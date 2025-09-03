import { supabase } from './supabase';
import { WorkoutSession, WorkoutExercise, WorkoutSet, UserGoal } from './supabase';

// ============================================================================
// WORKOUT SERVICE
// ============================================================================

export class WorkoutService {
  // ============================================================================
  // WORKOUT SESSIONS
  // ============================================================================

  static async createWorkoutSession(userId: string): Promise<{ data: WorkoutSession | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('workout_sessions')
        .insert([
          {
            user_id: userId,
            started_at: new Date().toISOString(),
          }
        ])
        .select()
        .single();

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Create workout session error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  static async endWorkoutSession(sessionId: string, duration: number): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase
        .from('workout_sessions')
        .update({
          ended_at: new Date().toISOString(),
          total_duration: duration,
        })
        .eq('id', sessionId);

      if (error) {
        return { error: error.message };
      }

      return { error: null };

    } catch (error) {
      console.error('End workout session error:', error);
      return { error: 'Ett oväntat fel uppstod' };
    }
  }

  static async getUserWorkoutSessions(userId: string): Promise<{ data: WorkoutSession[] | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('workout_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Get workout sessions error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // WORKOUT EXERCISES
  // ============================================================================

  static async addExerciseToWorkout(
    workoutSessionId: string, 
    exerciseName: string, 
    equipment: string[]
  ): Promise<{ data: WorkoutExercise | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('workout_exercises')
        .insert([
          {
            workout_session_id: workoutSessionId,
            exercise_name: exerciseName,
            equipment: equipment,
          }
        ])
        .select()
        .single();

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Add exercise error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  static async getWorkoutExercises(workoutSessionId: string): Promise<{ data: WorkoutExercise[] | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('workout_exercises')
        .select('*')
        .eq('workout_session_id', workoutSessionId)
        .order('created_at', { ascending: true });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Get workout exercises error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // WORKOUT SETS
  // ============================================================================

  static async addSetToExercise(
    workoutExerciseId: string,
    setNumber: number,
    reps: number,
    weight: number
  ): Promise<{ data: WorkoutSet | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('workout_sets')
        .insert([
          {
            workout_exercise_id: workoutExerciseId,
            set_number: setNumber,
            reps: reps,
            weight: weight,
            completed: false,
          }
        ])
        .select()
        .single();

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Add set error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  static async updateSet(
    setId: string,
    updates: Partial<WorkoutSet>
  ): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase
        .from('workout_sets')
        .update(updates)
        .eq('id', setId);

      if (error) {
        return { error: error.message };
      }

      return { error: null };

    } catch (error) {
      console.error('Update set error:', error);
      return { error: 'Ett oväntat fel uppstod' };
    }
  }

  static async getExerciseSets(workoutExerciseId: string): Promise<{ data: WorkoutSet[] | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('workout_sets')
        .select('*')
        .eq('workout_exercise_id', workoutExerciseId)
        .order('set_number', { ascending: true });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Get exercise sets error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // USER GOALS
  // ============================================================================

  static async createUserGoal(
    userId: string,
    title: string,
    targetValue: number,
    unit: string,
    targetDate?: string
  ): Promise<{ data: UserGoal | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('user_goals')
        .insert([
          {
            user_id: userId,
            title: title,
            target_value: targetValue,
            current_value: 0,
            unit: unit,
            target_date: targetDate,
            completed: false,
          }
        ])
        .select()
        .single();

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Create goal error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  static async updateUserGoal(
    goalId: string,
    updates: Partial<UserGoal>
  ): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase
        .from('user_goals')
        .update(updates)
        .eq('id', goalId);

      if (error) {
        return { error: error.message };
      }

      return { error: null };

    } catch (error) {
      console.error('Update goal error:', error);
      return { error: 'Ett oväntat fel uppstod' };
    }
  }

  static async getUserGoals(userId: string): Promise<{ data: UserGoal[] | null, error: string | null }> {
    try {
      const { data, error } = await supabase
        .from('user_goals')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        return { data: null, error: error.message };
      }

      return { data, error: null };

    } catch (error) {
      console.error('Get user goals error:', error);
      return { data: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  static async deleteUserGoal(goalId: string): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase
        .from('user_goals')
        .delete()
        .eq('id', goalId);

      if (error) {
        return { error: error.message };
      }

      return { error: null };

    } catch (error) {
      console.error('Delete goal error:', error);
      return { error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // STATISTICS
  // ============================================================================

  static async getUserWorkoutStats(userId: string): Promise<{ 
    totalWorkouts: number, 
    totalSets: number, 
    totalMinutes: number,
    error: string | null 
  }> {
    try {
      // Get total workouts
      const { data: workouts, error: workoutsError } = await supabase
        .from('workout_sessions')
        .select('id, total_duration')
        .eq('user_id', userId);

      if (workoutsError) {
        return { totalWorkouts: 0, totalSets: 0, totalMinutes: 0, error: workoutsError.message };
      }

      const totalWorkouts = workouts?.length || 0;
      const totalMinutes = workouts?.reduce((sum, w) => sum + (w.total_duration || 0), 0) || 0;

      // Get total sets
      const { data: sets, error: setsError } = await supabase
        .from('workout_sets')
        .select('id')
        .eq('user_id', userId);

      if (setsError) {
        return { totalWorkouts, totalSets: 0, totalMinutes, error: setsError.message };
      }

      const totalSets = sets?.length || 0;

      return { totalWorkouts, totalSets, totalMinutes, error: null };

    } catch (error) {
      console.error('Get workout stats error:', error);
      return { totalWorkouts: 0, totalSets: 0, totalMinutes: 0, error: 'Ett oväntat fel uppstod' };
    }
  }
}
