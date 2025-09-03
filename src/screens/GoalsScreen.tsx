import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

interface GoalsScreenProps {
  navigation: any;
  user: any;
}

interface Goal {
  id: string;
  title: string;
  target: string;
  current: string;
  progress: number;
  unit: string;
}

const GoalsScreen: React.FC<GoalsScreenProps> = ({ navigation, user }) => {
  // Mock data - in real app this would come from API/database
  const mockGoals: Goal[] = [
    {
      id: '1',
      title: 'Bänkpress',
      target: '100',
      current: '85',
      progress: 85,
      unit: 'kg',
    },
    {
      id: '2',
      title: 'Marklyft',
      target: '150',
      current: '120',
      progress: 80,
      unit: 'kg',
    },
    {
      id: '3',
      title: 'Träna 3 gånger/vecka',
      target: '3',
      current: '2',
      progress: 67,
      unit: 'gånger',
    },
  ];

  const renderGoalCard = (goal: Goal) => (
    <View key={goal.id} style={styles.goalCard}>
      <View style={styles.goalHeader}>
        <Text style={styles.goalTitle}>{goal.title}</Text>
        <Text style={styles.goalProgress}>{goal.progress}%</Text>
      </View>
      
      <View style={styles.goalStats}>
        <Text style={styles.goalCurrent}>
          {goal.current} / {goal.target} {goal.unit}
        </Text>
      </View>
      
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${goal.progress}%` }
          ]} 
        />
      </View>
    </View>
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
          <Text style={styles.title}>Mål & Framsteg</Text>
        </View>

        <View style={styles.content}>
          <View style={styles.loginRequiredCard}>
            <Text style={styles.loginRequiredTitle}>Inloggning krävs</Text>
            <Text style={styles.loginRequiredText}>
              Du måste logga in för att se dina mål och framsteg.
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
        <Text style={styles.title}>Mål & Framsteg</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Översikt</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statItemNumber}>{mockGoals.length}</Text>
              <Text style={styles.statItemLabel}>Aktiva Mål</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statItemNumber}>
                {Math.round(mockGoals.reduce((sum, goal) => sum + goal.progress, 0) / mockGoals.length)}
              </Text>
              <Text style={styles.statItemLabel}>Genomsnitt</Text>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Dina Mål</Text>
        
        {mockGoals.map(renderGoalCard)}

        <TouchableOpacity style={styles.addGoalButton} activeOpacity={0.8}>
          <Text style={styles.addGoalButtonText}>+ Lägg till nytt mål</Text>
        </TouchableOpacity>
      </ScrollView>
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
  goalCard: {
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
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A4A4A',
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A2B2C',
  },
  goalStats: {
    marginBottom: 12,
  },
  goalCurrent: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#F8F9FA',
    borderRadius: 4,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1A2B2C',
    borderRadius: 3,
  },
  addGoalButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1A2B2C',
    borderStyle: 'dashed',
    marginTop: 8,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  addGoalButtonText: {
    color: '#1A2B2C',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default GoalsScreen; 