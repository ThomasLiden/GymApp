// ============================================================================
// SERVICES INDEX
// ============================================================================

export { supabase } from './supabase';
export { AuthService } from './authService';
export { WorkoutService } from './workoutService';

// ============================================================================
// TYPES EXPORT
// ============================================================================

export type {
  User,
  AuthResponse,
  WorkoutSession,
  WorkoutExercise,
  WorkoutSet,
  UserGoal
} from './supabase';
