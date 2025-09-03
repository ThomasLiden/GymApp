// ============================================================================
// PREDEFINED EXERCISES FOR TOMPAS TRAINING APP
// ============================================================================

import { Exercise, ExerciseType, MuscleGroup } from '../types';

/**
 * Interface for predefined exercise data
 */
export interface PredefinedExercise {
  /** Unique identifier for the exercise */
  id: string;
  /** Exercise name */
  name: string;
  /** Primary muscle groups targeted */
  primaryMuscleGroups: MuscleGroup[];
  /** Secondary muscle groups that are also worked */
  secondaryMuscleGroups?: MuscleGroup[];
  /** Type of exercise */
  type: ExerciseType;
  /** Equipment needed for this exercise */
  equipment: string[];
  /** Whether this is a compound or isolation exercise */
  isCompound: boolean;
}

// ============================================================================
// CHEST EXERCISES
// ============================================================================

export const CHEST_EXERCISES: PredefinedExercise[] = [
  {
    id: 'bench-press',
    name: 'Barbell Bench Press',
    primaryMuscleGroups: [MuscleGroup.CHEST],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    type: ExerciseType.COMPOUND,
    equipment: ['Barbell', 'Bench'],
    isCompound: true
  },
  {
    id: 'dumbbell-press',
    name: 'Dumbbell Chest Press',
    primaryMuscleGroups: [MuscleGroup.CHEST],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    type: ExerciseType.COMPOUND,
    equipment: ['Dumbbells', 'Bench'],
    isCompound: true
  },
  {
    id: 'push-ups',
    name: 'Push-Ups',
    primaryMuscleGroups: [MuscleGroup.CHEST],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS, MuscleGroup.CORE],
    type: ExerciseType.COMPOUND,
    equipment: ['Bodyweight'],
    isCompound: true
  },
  {
    id: 'incline-press',
    name: 'Incline Barbell Press',
    primaryMuscleGroups: [MuscleGroup.CHEST],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS, MuscleGroup.TRICEPS],
    type: ExerciseType.COMPOUND,
    equipment: ['Barbell', 'Incline Bench'],
    isCompound: true
  },
  {
    id: 'chest-flyes',
    name: 'Dumbbell Flyes',
    primaryMuscleGroups: [MuscleGroup.CHEST],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbells', 'Bench'],
    isCompound: false
  },
  {
    id: 'cable-flyes',
    name: 'Cable Flyes',
    primaryMuscleGroups: [MuscleGroup.CHEST],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS],
    type: ExerciseType.ISOLATION,
    equipment: ['Cable Machine'],
    isCompound: false
  }
];

// ============================================================================
// BACK EXERCISES
// ============================================================================

export const BACK_EXERCISES: PredefinedExercise[] = [
  {
    id: 'deadlift',
    name: 'Barbell Deadlift',
    primaryMuscleGroups: [MuscleGroup.BACK],
    secondaryMuscleGroups: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS, MuscleGroup.CORE],
    type: ExerciseType.COMPOUND,
    equipment: ['Barbell', 'Weight Plates'],
    isCompound: true
  },
  {
    id: 'pull-ups',
    name: 'Pull-Ups',
    primaryMuscleGroups: [MuscleGroup.BACK],
    secondaryMuscleGroups: [MuscleGroup.BICEPS, MuscleGroup.SHOULDERS],
    type: ExerciseType.COMPOUND,
    equipment: ['Pull-Up Bar'],
    isCompound: true
  },
  {
    id: 'barbell-rows',
    name: 'Barbell Rows',
    primaryMuscleGroups: [MuscleGroup.BACK],
    secondaryMuscleGroups: [MuscleGroup.BICEPS, MuscleGroup.SHOULDERS],
    type: ExerciseType.COMPOUND,
    equipment: ['Barbell', 'Weight Plates'],
    isCompound: true
  },
  {
    id: 'lat-pulldowns',
    name: 'Lat Pulldowns',
    primaryMuscleGroups: [MuscleGroup.BACK],
    secondaryMuscleGroups: [MuscleGroup.BICEPS, MuscleGroup.SHOULDERS],
    type: ExerciseType.COMPOUND,
    equipment: ['Lat Pulldown Machine'],
    isCompound: true
  },
  {
    id: 'face-pulls',
    name: 'Face Pulls',
    primaryMuscleGroups: [MuscleGroup.BACK],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS],
    type: ExerciseType.ISOLATION,
    equipment: ['Cable Machine', 'Rope Attachment'],
    isCompound: false
  }
];

// ============================================================================
// SHOULDER EXERCISES
// ============================================================================

export const SHOULDER_EXERCISES: PredefinedExercise[] = [
  {
    id: 'overhead-press',
    name: 'Overhead Press',
    primaryMuscleGroups: [MuscleGroup.SHOULDERS],
    secondaryMuscleGroups: [MuscleGroup.TRICEPS, MuscleGroup.CORE],
    type: ExerciseType.COMPOUND,
    equipment: ['Barbell'],
    isCompound: true
  },
  {
    id: 'lateral-raises',
    name: 'Lateral Raises',
    primaryMuscleGroups: [MuscleGroup.SHOULDERS],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbells'],
    isCompound: false
  },
  {
    id: 'front-raises',
    name: 'Front Raises',
    primaryMuscleGroups: [MuscleGroup.SHOULDERS],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbells'],
    isCompound: false
  },
  {
    id: 'rear-delt-flyes',
    name: 'Rear Delt Flyes',
    primaryMuscleGroups: [MuscleGroup.SHOULDERS],
    secondaryMuscleGroups: [MuscleGroup.BACK],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbells'],
    isCompound: false
  }
];

// ============================================================================
// BICEPS EXERCISES
// ============================================================================

export const BICEPS_EXERCISES: PredefinedExercise[] = [
  {
    id: 'barbell-curls',
    name: 'Barbell Curls',
    primaryMuscleGroups: [MuscleGroup.BICEPS],
    secondaryMuscleGroups: [MuscleGroup.FOREARMS],
    type: ExerciseType.ISOLATION,
    equipment: ['Barbell'],
    isCompound: false
  },
  {
    id: 'dumbbell-curls',
    name: 'Dumbbell Curls',
    primaryMuscleGroups: [MuscleGroup.BICEPS],
    secondaryMuscleGroups: [MuscleGroup.FOREARMS],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbells'],
    isCompound: false
  },
  {
    id: 'hammer-curls',
    name: 'Hammer Curls',
    primaryMuscleGroups: [MuscleGroup.BICEPS],
    secondaryMuscleGroups: [MuscleGroup.FOREARMS],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbells'],
    isCompound: false
  },
  {
    id: 'preacher-curls',
    name: 'Preacher Curls',
    primaryMuscleGroups: [MuscleGroup.BICEPS],
    secondaryMuscleGroups: [MuscleGroup.FOREARMS],
    type: ExerciseType.ISOLATION,
    equipment: ['Preacher Bench', 'Barbell or Dumbbells'],
    isCompound: false
  }
];

// ============================================================================
// TRICEPS EXERCISES
// ============================================================================

export const TRICEPS_EXERCISES: PredefinedExercise[] = [
  {
    id: 'tricep-dips',
    name: 'Tricep Dips',
    primaryMuscleGroups: [MuscleGroup.TRICEPS],
    secondaryMuscleGroups: [MuscleGroup.CHEST, MuscleGroup.SHOULDERS],
    type: ExerciseType.COMPOUND,
    equipment: ['Dip Bars'],
    isCompound: true
  },
  {
    id: 'tricep-pushdowns',
    name: 'Tricep Pushdowns',
    primaryMuscleGroups: [MuscleGroup.TRICEPS],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Cable Machine', 'Bar Attachment'],
    isCompound: false
  },
  {
    id: 'skull-crushers',
    name: 'Skull Crushers',
    primaryMuscleGroups: [MuscleGroup.TRICEPS],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Barbell or Dumbbells', 'Bench'],
    isCompound: false
  },
  {
    id: 'overhead-tricep-extension',
    name: 'Overhead Tricep Extension',
    primaryMuscleGroups: [MuscleGroup.TRICEPS],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Dumbbell'],
    isCompound: false
  }
];

// ============================================================================
// LEG EXERCISES
// ============================================================================

export const LEG_EXERCISES: PredefinedExercise[] = [
  {
    id: 'squats',
    name: 'Barbell Squats',
    primaryMuscleGroups: [MuscleGroup.QUADS],
    secondaryMuscleGroups: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS, MuscleGroup.CORE],
    type: ExerciseType.COMPOUND,
    equipment: ['Barbell', 'Squat Rack'],
    isCompound: true
  },
  {
    id: 'leg-press',
    name: 'Leg Press',
    primaryMuscleGroups: [MuscleGroup.QUADS],
    secondaryMuscleGroups: [MuscleGroup.GLUTES, MuscleGroup.HAMSTRINGS],
    type: ExerciseType.COMPOUND,
    equipment: ['Leg Press Machine'],
    isCompound: true
  },
  {
    id: 'leg-extensions',
    name: 'Leg Extensions',
    primaryMuscleGroups: [MuscleGroup.QUADS],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Leg Extension Machine'],
    isCompound: false
  },
  {
    id: 'leg-curls',
    name: 'Leg Curls',
    primaryMuscleGroups: [MuscleGroup.HAMSTRINGS],
    secondaryMuscleGroups: [MuscleGroup.CALVES],
    type: ExerciseType.ISOLATION,
    equipment: ['Leg Curl Machine'],
    isCompound: false
  },
  {
    id: 'calf-raises',
    name: 'Standing Calf Raises',
    primaryMuscleGroups: [MuscleGroup.CALVES],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Calf Raise Machine or Step'],
    isCompound: false
  }
];

// ============================================================================
// CORE EXERCISES
// ============================================================================

export const CORE_EXERCISES: PredefinedExercise[] = [
  {
    id: 'plank',
    name: 'Plank',
    primaryMuscleGroups: [MuscleGroup.CORE],
    secondaryMuscleGroups: [MuscleGroup.SHOULDERS],
    type: ExerciseType.ISOLATION,
    equipment: ['Bodyweight'],
    isCompound: false
  },
  {
    id: 'crunches',
    name: 'Crunches',
    primaryMuscleGroups: [MuscleGroup.CORE],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Bodyweight'],
    isCompound: false
  },
  {
    id: 'russian-twists',
    name: 'Russian Twists',
    primaryMuscleGroups: [MuscleGroup.CORE],
    secondaryMuscleGroups: [],
    type: ExerciseType.ISOLATION,
    equipment: ['Weight (optional)'],
    isCompound: false
  }
];

// ============================================================================
// CARDIO EXERCISES
// ============================================================================

export const CARDIO_EXERCISES: PredefinedExercise[] = [
  {
    id: 'treadmill-running',
    name: 'Treadmill Running',
    primaryMuscleGroups: [MuscleGroup.FULL_BODY],
    secondaryMuscleGroups: [],
    type: ExerciseType.CARDIO,
    equipment: ['Treadmill'],
    isCompound: true
  },
  {
    id: 'stationary-bike',
    name: 'Stationary Bike',
    primaryMuscleGroups: [MuscleGroup.QUADS],
    secondaryMuscleGroups: [MuscleGroup.CALVES, MuscleGroup.GLUTES],
    type: ExerciseType.CARDIO,
    equipment: ['Stationary Bike'],
    isCompound: true
  },
  {
    id: 'rowing-machine',
    name: 'Rowing Machine',
    primaryMuscleGroups: [MuscleGroup.BACK],
    secondaryMuscleGroups: [MuscleGroup.QUADS, MuscleGroup.CORE, MuscleGroup.SHOULDERS],
    type: ExerciseType.CARDIO,
    equipment: ['Rowing Machine'],
    isCompound: true
  }
];

// ============================================================================
// ALL EXERCISES COMBINED
// ============================================================================

export const ALL_EXERCISES: PredefinedExercise[] = [
  ...CHEST_EXERCISES,
  ...BACK_EXERCISES,
  ...SHOULDER_EXERCISES,
  ...BICEPS_EXERCISES,
  ...TRICEPS_EXERCISES,
  ...LEG_EXERCISES,
  ...CORE_EXERCISES,
  ...CARDIO_EXERCISES
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get exercises by muscle group
 */
export function getExercisesByMuscleGroup(muscleGroup: MuscleGroup): PredefinedExercise[] {
  return ALL_EXERCISES.filter(exercise => 
    exercise.primaryMuscleGroups.includes(muscleGroup) ||
    exercise.secondaryMuscleGroups?.includes(muscleGroup)
  );
}

/**
 * Get exercises by type
 */
export function getExercisesByType(type: ExerciseType): PredefinedExercise[] {
  return ALL_EXERCISES.filter(exercise => exercise.type === type);
}

/**
 * Search exercises by name
 */
export function searchExercises(searchTerm: string): PredefinedExercise[] {
  const term = searchTerm.toLowerCase();
  return ALL_EXERCISES.filter(exercise => 
    exercise.name.toLowerCase().includes(term)
  );
}

/**
 * Get exercise by ID
 */
export function getExerciseById(id: string): PredefinedExercise | undefined {
  return ALL_EXERCISES.find(exercise => exercise.id === id);
} 