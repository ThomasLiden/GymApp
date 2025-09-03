// ============================================================================
// TYPES FOR TOMPAS TRAINING APP
// ============================================================================

/**
 * Olika typer av övningar
 */
export enum ExerciseType {
  COMPOUND = 'compound',    // Grundövningar (squats, deadlifts, etc.)
  ISOLATION = 'isolation',  // Isolerade övningar (bicep curls, etc.)
  CARDIO = 'cardio',        // Konditionsträning
  STRETCHING = 'stretching' // Stretching/flexibilitet
}

/**
 * Möjliga muskelgrupper
 */
export enum MuscleGroup {
  CHEST = 'chest',
  BACK = 'back',
  SHOULDERS = 'shoulders',
  BICEPS = 'biceps',
  TRICEPS = 'triceps',
  FOREARMS = 'forearms',
  CORE = 'core',
  QUADS = 'quads',
  HAMSTRINGS = 'hamstrings',
  CALVES = 'calves',
  GLUTES = 'glutes',
  FULL_BODY = 'full_body'
} 