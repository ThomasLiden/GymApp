import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

interface WorkoutHistoryScreenProps {
  navigation: any;
  user: any;
}

interface WorkoutSession {
  id: string;
  date: string;
  duration: string;
  exercises: number;
  totalSets: number;
}

const WorkoutHistoryScreen: React.FC<WorkoutHistoryScreenProps> = ({ navigation, user }) => {
  // Mock data - in real app this would come from API/database
  const mockWorkouts: WorkoutSession[] = [
    {
      id: '1',
      date: '2024-01-15',
      duration: '45 min',
      exercises: 6,
      totalSets: 18,
    },
    {
      id: '2',
      date: '2024-01-12',
      duration: '52 min',
      exercises: 5,
      totalSets: 15,
    },
    {
      id: '3',
      date: '2024-01-10',
      duration: '38 min',
      exercises: 4,
      totalSets: 12,
    },
  ];

  const renderWorkoutItem = ({ item }: { item: WorkoutSession }) => (
    <TouchableOpacity style={styles.workoutCard} activeOpacity={0.8}>
      <View style={styles.workoutHeader}>
        <Text style={styles.workoutDate}>{item.date}</Text>
        <Text style={styles.workoutDuration}>{item.duration}</Text>
      </View>
      
      <View style={styles.workoutStats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{item.exercises}</Text>
          <Text style={styles.statLabel}>Övningar</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{item.totalSets}</Text>
          <Text style={styles.statLabel}>Set</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Träningshistorik</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.loginRequiredCard}>
            <Text style={styles.loginRequiredTitle}>Inloggning krävs</Text>
            <Text style={styles.loginRequiredText}>
              Du måste logga in för att se din träningshistorik.
            </Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Login')}
              activeOpacity={0.9}
            >
              <Text style={styles.loginButtonText}>Logga In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Träningshistorik</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Översikt</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statItemNumber}>{mockWorkouts.length}</Text>
              <Text style={styles.statItemLabel}>Träningspass</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statItemNumber}>
                {mockWorkouts.reduce((sum, workout) => sum + workout.totalSets, 0)}
              </Text>
              <Text style={styles.statItemLabel}>Totalt Set</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Senaste träningspass</Text>
        
        <FlatList
          data={mockWorkouts}
          renderItem={renderWorkoutItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  backButtonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '600',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.3,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  loginRequiredCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 28,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  loginRequiredTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  loginRequiredText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  loginButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  statsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statItemNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A2B2C',
    marginBottom: 4,
  },
  statItemLabel: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  workoutCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    marginBottom: 12,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  workoutDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  workoutDuration: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  workoutStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A2B2C',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '500',
  },
});

export default WorkoutHistoryScreen; 