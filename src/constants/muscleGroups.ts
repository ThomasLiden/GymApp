// ============================================================================
// MUSCLE GROUP CONSTANTS FOR TOMPAS TRAINING APP
// ============================================================================

import { MuscleGroup } from '../types';

/**
 * Interface for muscle group display information
 */
export interface MuscleGroupInfo {
  /** English name */
  english: string;
  /** Swedish name */
  swedish: string;
  /** Emoji representation */
  emoji: string;
  /** Color for UI representation */
  color: string;
  /** Description of the muscle group */
  description: string;
}

/**
 * Muscle group information mapping
 */
export const MUSCLE_GROUP_INFO: Record<MuscleGroup, MuscleGroupInfo> = {
  [MuscleGroup.CHEST]: {
    english: 'Chest',
    swedish: 'Bröst',
    emoji: '💪',
    color: '#FF6B6B',
    description: 'Pectoralis major and minor muscles'
  },
  [MuscleGroup.BACK]: {
    english: 'Back',
    swedish: 'Rygg',
    emoji: '🏋️',
    color: '#4ECDC4',
    description: 'Latissimus dorsi, rhomboids, and trapezius'
  },
  [MuscleGroup.SHOULDERS]: {
    english: 'Shoulders',
    swedish: 'Axlar',
    emoji: '🏋️‍♂️',
    color: '#45B7D1',
    description: 'Deltoids (anterior, lateral, posterior)'
  },
  [MuscleGroup.BICEPS]: {
    english: 'Biceps',
    swedish: 'Biceps',
    emoji: '💪',
    color: '#96CEB4',
    description: 'Biceps brachii muscles'
  },
  [MuscleGroup.TRICEPS]: {
    english: 'Triceps',
    swedish: 'Triceps',
    emoji: '💪',
    color: '#FFEAA7',
    description: 'Triceps brachii muscles'
  },
  [MuscleGroup.FOREARMS]: {
    english: 'Forearms',
    swedish: 'Underarmar',
    emoji: '🤏',
    color: '#DDA0DD',
    description: 'Forearm flexors and extensors'
  },
  [MuscleGroup.CORE]: {
    english: 'Core',
    swedish: 'Mage',
    emoji: '🔥',
    color: '#FF8A80',
    description: 'Abdominal and lower back muscles'
  },
  [MuscleGroup.QUADS]: {
    english: 'Quadriceps',
    swedish: 'Framlår',
    emoji: '🦵',
    color: '#81C784',
    description: 'Quadriceps femoris muscles'
  },
  [MuscleGroup.HAMSTRINGS]: {
    english: 'Hamstrings',
    swedish: 'Baklår',
    emoji: '🦵',
    color: '#64B5F6',
    description: 'Hamstring muscles (biceps femoris, semitendinosus, semimembranosus)'
  },
  [MuscleGroup.CALVES]: {
    english: 'Calves',
    swedish: 'Vader',
    emoji: '🦵',
    color: '#FFB74D',
    description: 'Gastrocnemius and soleus muscles'
  },
  [MuscleGroup.GLUTES]: {
    english: 'Glutes',
    swedish: 'Rumpa',
    emoji: '🍑',
    color: '#F06292',
    description: 'Gluteus maximus, medius, and minimus'
  },
  [MuscleGroup.FULL_BODY]: {
    english: 'Full Body',
    swedish: 'Hela Kroppen',
    emoji: '🏃‍♂️',
    color: '#9C27B0',
    description: 'Multiple muscle groups worked simultaneously'
  }
};

/**
 * Get muscle group display name in specified language
 */
export function getMuscleGroupName(muscleGroup: MuscleGroup, language: 'english' | 'swedish' = 'english'): string {
  return MUSCLE_GROUP_INFO[muscleGroup][language];
}

/**
 * Get muscle group emoji
 */
export function getMuscleGroupEmoji(muscleGroup: MuscleGroup): string {
  return MUSCLE_GROUP_INFO[muscleGroup].emoji;
}

/**
 * Get muscle group color
 */
export function getMuscleGroupColor(muscleGroup: MuscleGroup): string {
  return MUSCLE_GROUP_INFO[muscleGroup].color;
}

/**
 * Get all muscle groups as an array
 */
export function getAllMuscleGroups(): MuscleGroup[] {
  return Object.values(MuscleGroup);
}

/**
 * Get muscle groups sorted by name
 */
export function getMuscleGroupsSorted(language: 'english' | 'swedish' = 'english'): MuscleGroup[] {
  return getAllMuscleGroups().sort((a, b) => 
    getMuscleGroupName(a, language).localeCompare(getMuscleGroupName(b, language))
  );
} 