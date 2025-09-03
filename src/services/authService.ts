import { supabase } from './supabase';
import { User, AuthResponse } from './supabase';

// ============================================================================
// AUTHENTICATION SERVICE
// ============================================================================

export class AuthService {
  // ============================================================================
  // USER REGISTRATION
  // ============================================================================

  static async registerUser(email: string, password: string, username: string): Promise<AuthResponse> {
    try {
      // 1. Create user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            username: username,
          }
        }
      });

      if (authError) {
        return { user: null, error: authError.message };
      }

      if (!authData.user) {
        return { user: null, error: 'Registrering misslyckades' };
      }

      // 2. Create user profile in our users table
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email: email,
            username: username,
          }
        ])
        .select()
        .single();

      if (profileError) {
        return { user: null, error: profileError.message };
      }

      return { user: profileData, error: null };

    } catch (error) {
      console.error('Registration error:', error);
      return { user: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // USER LOGIN
  // ============================================================================

  static async loginUser(email: string, password: string): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { user: null, error: error.message };
      }

      if (!data.user) {
        return { user: null, error: 'Inloggning misslyckades' };
      }

      // Get user profile from our users table
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();

      if (profileError) {
        return { user: null, error: profileError.message };
      }

      return { user: profileData, error: null };

    } catch (error) {
      console.error('Login error:', error);
      return { user: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // USER LOGOUT
  // ============================================================================

  static async logoutUser(): Promise<{ error: string | null }> {
    try {
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        return { error: error.message };
      }

      return { error: null };

    } catch (error) {
      console.error('Logout error:', error);
      return { error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // GET CURRENT USER
  // ============================================================================

  static async getCurrentUser(): Promise<AuthResponse> {
    try {
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser();

      if (authError || !authUser) {
        return { user: null, error: authError?.message || 'Ingen användare inloggad' };
      }

      // Get user profile from our users table
      const { data: profileData, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (profileError) {
        return { user: null, error: profileError.message };
      }

      return { user: profileData, error: null };

    } catch (error) {
      console.error('Get current user error:', error);
      return { user: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // CHECK IF USER IS AUTHENTICATED
  // ============================================================================

  static async isAuthenticated(): Promise<boolean> {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      return !error && !!user;
    } catch (error) {
      console.error('Authentication check error:', error);
      return false;
    }
  }

  // ============================================================================
  // UPDATE USER PROFILE
  // ============================================================================

  static async updateUserProfile(userId: string, updates: Partial<User>): Promise<AuthResponse> {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        return { user: null, error: error.message };
      }

      return { user: data, error: null };

    } catch (error) {
      console.error('Update profile error:', error);
      return { user: null, error: 'Ett oväntat fel uppstod' };
    }
  }

  // ============================================================================
  // DELETE USER ACCOUNT
  // ============================================================================

  static async deleteUserAccount(userId: string): Promise<{ error: string | null }> {
    try {
      // Delete user profile from our users table
      const { error: profileError } = await supabase
        .from('users')
        .delete()
        .eq('id', userId);

      if (profileError) {
        return { error: profileError.message };
      }

      // Delete user from Supabase Auth
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);

      if (authError) {
        return { error: authError.message };
      }

      return { error: null };

    } catch (error) {
      console.error('Delete account error:', error);
      return { error: 'Ett oväntat fel uppstod' };
    }
  }
}
