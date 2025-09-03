// ============================================================================
// ACTIVE WORKOUT COMPONENT
// ============================================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal
} from 'react-native';
import ExerciseSelector from './ExerciseSelector';
import { PredefinedExercise } from '../constants';

// ============================================================================
// TYPES
// ============================================================================

interface WorkoutSet {
  id: string;
  setNumber: number;
  reps: number;
  weight: number;
  completed: boolean;
}

interface ActiveWorkoutExercise {
  exercise: PredefinedExercise;
  sets: WorkoutSet[];
}

// ============================================================================
// COMPONENT
// ============================================================================

export const ActiveWorkout: React.FC = () => {
  // ============================================================================
  // STATE
  // ============================================================================

  const [workoutExercises, setWorkoutExercises] = useState<ActiveWorkoutExercise[]>([]);
  const [showExerciseSelector, setShowExerciseSelector] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState<PredefinedExercise | null>(null);

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const handleAddExercise = () => {
    if (!selectedExercise) {
      Alert.alert('Fel', 'Välj en övning först');
      return;
    }

    // Create a single empty set for this exercise
    const sets: WorkoutSet[] = [{
      id: `${selectedExercise.id}-set-1`,
      setNumber: 1,
      reps: 0,
      weight: 0,
      completed: false
    }];

    const newWorkoutExercise: ActiveWorkoutExercise = {
      exercise: selectedExercise,
      sets: sets
    };

    setWorkoutExercises([...workoutExercises, newWorkoutExercise]);
    setSelectedExercise(null);
    setShowExerciseSelector(false);
  };

  const handleRemoveExercise = (index: number) => {
    const updatedExercises = workoutExercises.filter((_, i) => i !== index);
    setWorkoutExercises(updatedExercises);
  };

  const handleExerciseSelection = (exercises: PredefinedExercise[]) => {
    if (exercises.length > 0) {
      setSelectedExercise(exercises[0]);
    }
  };

  const handleSetToggle = (exerciseIndex: number, setIndex: number) => {
    const updatedExercises = [...workoutExercises];
    updatedExercises[exerciseIndex].sets[setIndex].completed = 
      !updatedExercises[exerciseIndex].sets[setIndex].completed;
    setWorkoutExercises(updatedExercises);
  };

  const handleSetUpdate = (exerciseIndex: number, setIndex: number, field: 'reps' | 'weight', value: string) => {
    const updatedExercises = [...workoutExercises];
    const numValue = parseFloat(value) || 0;
    
    if (field === 'reps') {
      updatedExercises[exerciseIndex].sets[setIndex].reps = Math.floor(numValue);
    } else {
      updatedExercises[exerciseIndex].sets[setIndex].weight = numValue;
    }
    
    setWorkoutExercises(updatedExercises);
  };

  const handleAddSet = (exerciseIndex: number) => {
    const updatedExercises = [...workoutExercises];
    const exercise = updatedExercises[exerciseIndex];
    const newSetNumber = exercise.sets.length + 1;
    
    exercise.sets.push({
      id: `${exercise.exercise.id}-set-${newSetNumber}`,
      setNumber: newSetNumber,
      reps: 0,
      weight: 0,
      completed: false
    });
    
    setWorkoutExercises(updatedExercises);
  };

  const handleFinishWorkout = () => {
    const totalSets = workoutExercises.reduce((sum, exercise) => sum + exercise.sets.length, 0);
    const completedSets = workoutExercises.reduce((sum, exercise) => 
      sum + exercise.sets.filter(set => set.completed).length, 0);

    Alert.alert(
      'Avsluta Träningspass',
      `Du har slutfört ${completedSets} av ${totalSets} set. Vill du avsluta träningspasset?`,
      [
        { text: 'Fortsätt Träna', style: 'cancel' },
        { text: 'Avsluta', onPress: () => console.log('Workout finished:', workoutExercises) }
      ]
    );
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Aktivt Träningspass</Text>
        <Text style={styles.subtitle}>
          {workoutExercises.length} övningar • {workoutExercises.reduce((sum, ex) => sum + ex.sets.length, 0)} set
        </Text>
      </View>

      {/* Exercise List */}
      <ScrollView style={styles.exerciseList} showsVerticalScrollIndicator={false}>
        {workoutExercises.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              Inga övningar tillagda än
            </Text>
            <Text style={styles.emptySubtext}>
              Klicka "Lägg till övning" för att komma igång
            </Text>
          </View>
        ) : (
          workoutExercises.map((workoutExercise, exerciseIndex) => (
            <View key={exerciseIndex} style={styles.exerciseCard}>
              <View style={styles.exerciseHeader}>
                <Text style={styles.exerciseName}>
                  {workoutExercise.exercise.name}
                </Text>
                <TouchableOpacity
                  onPress={() => handleRemoveExercise(exerciseIndex)}
                  style={styles.removeButton}
                >
                  <Text style={styles.removeButtonText}>Ta bort</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={styles.exerciseInfo}>
                Utrustning: {workoutExercise.exercise.equipment.join(', ')}
              </Text>

              {/* Sets */}
              <View style={styles.setsContainer}>
                {workoutExercise.sets.map((set, setIndex) => (
                  <View key={set.id} style={styles.setRow}>
                    <Text style={styles.setNumber}>Set {set.setNumber}</Text>
                    
                    <TextInput
                      style={[styles.setInput, set.completed && styles.setInputCompleted]}
                      value={set.reps.toString()}
                      onChangeText={(value) => handleSetUpdate(exerciseIndex, setIndex, 'reps', value)}
                      keyboardType="numeric"
                      placeholder="10"
                      placeholderTextColor="#888888"
                      editable={!set.completed}
                    />
                    
                    <Text style={styles.setLabel}>reps</Text>
                    
                    <TextInput
                      style={[styles.setInput, set.completed && styles.setInputCompleted]}
                      value={set.weight.toString()}
                      onChangeText={(value) => handleSetUpdate(exerciseIndex, setIndex, 'weight', value)}
                      keyboardType="numeric"
                      placeholder="0"
                      placeholderTextColor="#888888"
                      editable={!set.completed}
                    />
                    
                    <Text style={styles.setLabel}>kg</Text>
                    
                    <TouchableOpacity
                      style={[styles.completionCheckbox, set.completed && styles.completionCompleted]}
                      onPress={() => handleSetToggle(exerciseIndex, setIndex)}
                    >
                      {set.completed && <Text style={styles.checkmark}>✓</Text>}
                    </TouchableOpacity>
                  </View>
                ))}
                
                {/* Add Set Button */}
                <TouchableOpacity
                  style={styles.addSetButton}
                  onPress={() => handleAddSet(exerciseIndex)}
                >
                  <Text style={styles.addSetButtonText}>+ Lägg till set</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {/* Add Exercise Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setShowExerciseSelector(true)}
      >
        <Text style={styles.addButtonText}>Lägg till övning</Text>
      </TouchableOpacity>

      {/* Finish Workout Button */}
      {workoutExercises.length > 0 && (
        <TouchableOpacity
          style={styles.finishButton}
          onPress={handleFinishWorkout}
        >
          <Text style={styles.finishButtonText}>Avsluta Träningspass</Text>
        </TouchableOpacity>
      )}

      {/* Exercise Selector Modal */}
      <Modal
        visible={showExerciseSelector}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Välj Övning</Text>
            <TouchableOpacity
              onPress={() => setShowExerciseSelector(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Stäng</Text>
            </TouchableOpacity>
          </View>

          <ExerciseSelector
            selectedExercises={selectedExercise ? [selectedExercise] : []}
            onExerciseSelectionChange={handleExerciseSelection}
            allowMultiple={false}
            language="english"
            showDetails={true}
          />

          {selectedExercise && (
            <View style={styles.inputContainer}>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleAddExercise}
              >
                <Text style={styles.confirmButtonText}>Lägg till övning</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

// ============================================================================
// STYLES
// ============================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: '500',
  },
  exerciseList: {
    flex: 1,
    padding: 16,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: '600',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    fontWeight: '400',
  },
  exerciseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    flex: 1,
  },
  removeButton: {
    backgroundColor: '#EF5350',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  exerciseInfo: {
    fontSize: 14,
    color: '#888888',
    marginBottom: 12,
    fontWeight: '400',
  },
  setsContainer: {
    gap: 8,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  setCheckbox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  setCompleted: {
    backgroundColor: '#1A2B2C',
    borderColor: '#1A2B2C',
  },
  setNumber: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A4A4A',
    minWidth: 60,
  },
  setInput: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 6,
    padding: 8,
    width: 60,
    textAlign: 'center',
    fontSize: 14,
    backgroundColor: '#F8F9FA',
    color: '#000000',
  },
  setInputCompleted: {
    backgroundColor: '#F0F0F0',
    color: '#888888',
  },
  setLabel: {
    fontSize: 14,
    color: '#888888',
    width: 40,
    fontWeight: '500',
  },
  completionCheckbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E5E5',
  },
  completionCompleted: {
    backgroundColor: '#1A2B2C',
    borderColor: '#1A2B2C',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#000000',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  addSetButton: {
    backgroundColor: '#F8F9FA',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  addSetButtonText: {
    color: '#1A2B2C',
    fontSize: 14,
    fontWeight: '500',
  },
  finishButton: {
    backgroundColor: '#1A2B2C',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingTop: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  closeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  closeButtonText: {
    color: '#1A2B2C',
    fontSize: 16,
    fontWeight: '500',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: '#F8F9FA',
    color: '#000000',
  },
  confirmButton: {
    backgroundColor: '#1A2B2C',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ActiveWorkout; 