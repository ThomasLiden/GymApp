// ============================================================================
// EXERCISE SELECTOR COMPONENT
// ============================================================================

import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert
} from 'react-native';
import { ExerciseType, MuscleGroup } from '../types';
import { 
  ALL_EXERCISES,
  getExercisesByMuscleGroup,
  getExercisesByType,
  searchExercises,
  PredefinedExercise
} from '../constants';
import { getMuscleGroupName, getMuscleGroupColor } from '../constants/muscleGroups';


// ============================================================================
// TYPES
// ============================================================================

export interface ExerciseSelectorProps {
  /** Currently selected exercises */
  selectedExercises: PredefinedExercise[];
  /** Callback when exercise selection changes */
  onExerciseSelectionChange: (exercises: PredefinedExercise[]) => void;
  /** Whether to allow multiple selections */
  allowMultiple?: boolean;
  /** Maximum number of exercises that can be selected */
  maxSelections?: number;
  /** Language for display */
  language?: 'english' | 'swedish';
  /** Whether the selector is disabled */
  disabled?: boolean;
  /** Show exercise details in the list */
  showDetails?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const ExerciseSelector: React.FC<ExerciseSelectorProps> = ({
  selectedExercises,
  onExerciseSelectionChange,
  allowMultiple = true,
  maxSelections,
  language = 'english',
  disabled = false,
  showDetails = true
}) => {
  // ============================================================================
  // STATE
  // ============================================================================

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExerciseType, setSelectedExerciseType] = useState<ExerciseType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // ============================================================================
  // COMPUTED VALUES
  // ============================================================================

  /**
   * Filter exercises based on search, muscle groups, and exercise type
   */
  const filteredExercises = useMemo(() => {
    let exercises = ALL_EXERCISES;

    // Filter by search query
    if (searchQuery.trim()) {
      exercises = searchExercises(searchQuery.trim());
    }



    // Filter by exercise type
    if (selectedExerciseType) {
      exercises = exercises.filter(exercise => exercise.type === selectedExerciseType);
    }

    return exercises;
  }, [searchQuery, selectedExerciseType]);

  /**
   * Check if an exercise is selected
   */
  const isExerciseSelected = useCallback((exercise: PredefinedExercise): boolean => {
    return selectedExercises.some(selected => selected.id === exercise.id);
  }, [selectedExercises]);

  // ============================================================================
  // HANDLERS
  // ============================================================================

  /**
   * Handle exercise selection/deselection
   */
  const handleExercisePress = (exercise: PredefinedExercise) => {
    if (disabled) return;

    const isSelected = isExerciseSelected(exercise);

    if (allowMultiple) {
      if (isSelected) {
        // Remove exercise
        onExerciseSelectionChange(
          selectedExercises.filter(e => e.id !== exercise.id)
        );
      } else {
        // Add exercise (check max selections)
        if (maxSelections && selectedExercises.length >= maxSelections) {
          Alert.alert(
            language === 'swedish' ? 'Max antal övningar' : 'Maximum Exercises',
            language === 'swedish' 
              ? `Du kan bara välja ${maxSelections} övningar`
              : `You can only select ${maxSelections} exercises`
          );
          return;
        }
        onExerciseSelectionChange([...selectedExercises, exercise]);
      }
    } else {
      // Single selection mode
      onExerciseSelectionChange([exercise]);
    }
  };

  /**
   * Clear all filters
   */
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedExerciseType(null);
  };

  /**
   * Get exercise type display name
   */
  const getExerciseTypeName = (type: ExerciseType): string => {
    const typeNames = {
      [ExerciseType.COMPOUND]: language === 'swedish' ? 'Grundövningar' : 'Compound',
      [ExerciseType.ISOLATION]: language === 'swedish' ? 'Isolerade' : 'Isolation',
      [ExerciseType.CARDIO]: language === 'swedish' ? 'Kondition' : 'Cardio',
      [ExerciseType.STRETCHING]: language === 'swedish' ? 'Stretching' : 'Stretching'
    };
    return typeNames[type];
  };

  // ============================================================================
  // RENDER ITEMS
  // ============================================================================

  /**
   * Render exercise type filter button
   */
  const renderExerciseTypeFilter = (type: ExerciseType) => {
    const isSelected = selectedExerciseType === type;
    
    return (
      <TouchableOpacity
        key={type}
        onPress={() => setSelectedExerciseType(isSelected ? null : type)}
        disabled={disabled}
        style={[
          styles.typeFilterButton,
          isSelected && styles.selectedTypeFilter,
          disabled && styles.disabled
        ]}
      >
        <Text style={[
          styles.typeFilterText,
          isSelected && styles.selectedTypeFilterText,
          disabled && styles.disabledText
        ]}>
          {getExerciseTypeName(type)}
        </Text>
      </TouchableOpacity>
    );
  };

  /**
   * Render exercise item
   */
  const renderExerciseItem = ({ item: exercise }: { item: PredefinedExercise }) => {
    const isSelected = isExerciseSelected(exercise);
    const primaryMuscleGroup = exercise.primaryMuscleGroups[0];
    const color = getMuscleGroupColor(primaryMuscleGroup);

    return (
      <TouchableOpacity
        onPress={() => handleExercisePress(exercise)}
        disabled={disabled}
        style={[
          styles.exerciseItem,
          isSelected && { borderColor: color, borderWidth: 2 },
          disabled && styles.disabled
        ]}
        activeOpacity={0.7}
      >
        <View style={styles.exerciseHeader}>
          <View style={styles.exerciseTitleContainer}>
            <Text style={[
              styles.exerciseName,
              isSelected && styles.selectedExerciseName,
              disabled && styles.disabledText
            ]}>
              {exercise.name}
            </Text>
            <View style={styles.exerciseMeta}>
              <Text style={styles.exerciseType}>
                {getExerciseTypeName(exercise.type)}
              </Text>
            </View>
          </View>

        </View>

        {showDetails && (
          <View style={styles.exerciseDetails}>
            <View style={styles.equipmentContainer}>
              <Text style={styles.equipmentLabel}>
                {language === 'swedish' ? 'Utrustning' : 'Equipment'}:
              </Text>
              <Text style={styles.equipment}>
                {exercise.equipment.join(', ')}
              </Text>
            </View>
          </View>
        )}

        {isSelected && (
          <View style={[styles.selectedIndicator, { backgroundColor: color }]}>
            <Text style={styles.selectedIndicatorText}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, disabled && styles.disabled]}
          placeholder={language === 'swedish' ? 'Sök övningar...' : 'Search exercises...'}
          value={searchQuery}
          onChangeText={setSearchQuery}
          editable={!disabled}
          placeholderTextColor="#999"
        />
      </View>



      {/* Exercise Type Filter */}
      <View style={styles.typeFilterContainer}>
        <Text style={styles.filterTitle}>
          {language === 'swedish' ? 'Övningstyp' : 'Exercise Type'}
        </Text>
        <View style={styles.typeFilterButtons}>
          {Object.values(ExerciseType).map(renderExerciseTypeFilter)}
        </View>
      </View>

      {/* Clear Filters Button */}
      {(searchQuery || selectedExerciseType) && (
        <TouchableOpacity
          onPress={clearFilters}
          disabled={disabled}
          style={[styles.clearFiltersButton, disabled && styles.disabled]}
        >
          <Text style={[styles.clearFiltersText, disabled && styles.disabledText]}>
            {language === 'swedish' ? 'Rensa filter' : 'Clear Filters'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Results Count */}
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsText}>
          {language === 'swedish'
            ? `${filteredExercises.length} övningar hittade`
            : `${filteredExercises.length} exercises found`
          }
        </Text>
        {selectedExercises.length > 0 && (
          <Text style={styles.selectedCount}>
            {language === 'swedish'
              ? `${selectedExercises.length} valda`
              : `${selectedExercises.length} selected`
            }
          </Text>
        )}
      </View>

      {/* Exercise List */}
      <FlatList
        data={filteredExercises}
        renderItem={renderExerciseItem}
        keyExtractor={(item) => item.id}
        style={styles.exerciseList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              {language === 'swedish' 
                ? 'Inga övningar hittades'
                : 'No exercises found'
              }
            </Text>
          </View>
        }
      />
    </View>
  );
};

// ============================================================================
// STYLES
// ============================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  searchInput: {
    height: 44,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  typeFilterContainer: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  typeFilterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  typeFilterButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedTypeFilter: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  typeFilterText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  selectedTypeFilterText: {
    color: '#fff',
  },
  clearFiltersButton: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 8,
  },
  clearFiltersText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  resultsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
  },
  selectedCount: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  exerciseList: {
    flex: 1,
  },
  exerciseItem: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  exerciseTitleContainer: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  selectedExerciseName: {
    color: '#007AFF',
  },
  exerciseMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  exerciseType: {
    fontSize: 12,
    color: '#666',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  exerciseDetails: {
    marginTop: 8,
  },

  equipmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  equipmentLabel: {
    fontSize: 12,
    color: '#999',
    marginRight: 4,
  },
  equipment: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  selectedIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedIndicatorText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  disabledText: {
    color: '#999',
  },
});

export default ExerciseSelector; 