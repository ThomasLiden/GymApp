// ============================================================================
// HOME COMPONENT
// ============================================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import HamburgerMenu from './HamburgerMenu';

// ============================================================================
// COMPONENT
// ============================================================================

interface HomeProps {
  navigation: any;
  user: any;
}

export const Home: React.FC<HomeProps> = ({ navigation, user }) => {
  // ============================================================================
  // STATE
  // ============================================================================

  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // ============================================================================
  // HANDLERS
  // ============================================================================

  const handleOpenHamburgerMenu = () => {
    setShowHamburgerMenu(true);
  };

  const handleCloseHamburgerMenu = () => {
    setShowHamburgerMenu(false);
  };

  const handleStartWorkout = () => {
    navigation.navigate('StartWorkout');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Tompa</Text>
          <Text style={styles.subtitle}>Träningsdagbok</Text>
        </View>
        <TouchableOpacity
          style={styles.hamburgerButton}
          onPress={handleOpenHamburgerMenu}
          activeOpacity={0.8}
        >
          <Text style={styles.hamburgerIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView 
        style={styles.content} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>Välkommen till Tompa</Text>
            <Text style={styles.welcomeText}>
              Din personliga träningsdagbok för att spåra framsteg och nå dina mål
            </Text>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsSection}>
          <Text style={styles.sectionTitle}>Kom igång</Text>
          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={styles.primaryActionButton}
              onPress={handleStartWorkout}
              activeOpacity={0.9}
            >
              <View style={styles.buttonContent}>
                <Text style={styles.primaryButtonText}>Starta Träningspass</Text>
              </View>
            </TouchableOpacity>

            {!user && (
              <TouchableOpacity
                style={styles.secondaryActionButton}
                onPress={handleLogin}
                activeOpacity={0.9}
              >
                <View style={styles.buttonContent}>
                  <Text style={styles.secondaryButtonText}>Logga In</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Features Grid */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Funktioner</Text>
          
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Logga Träningspass</Text>
              <Text style={styles.featureText}>
                Enkelt att logga övningar, set och reps
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Spåra Framsteg</Text>
              <Text style={styles.featureText}>
                Följ ditt framsteg med detaljerad statistik
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Sätt Mål</Text>
              <Text style={styles.featureText}>
                Definiera träningsmål och få motivation
              </Text>
            </View>

            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Synkronisera</Text>
              <Text style={styles.featureText}>
                Synkronisera data mellan enheter
              </Text>
            </View>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.sectionTitle}>Din Statistik</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Träningspass</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Övningar</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>Minuter</Text>
            </View>
          </View>
        </View>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Hamburger Menu */}
      <HamburgerMenu
        isVisible={showHamburgerMenu}
        onClose={handleCloseHamburgerMenu}
        navigation={navigation}
        user={user}
      />
    </SafeAreaView>
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
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  headerContent: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#888888',
    marginTop: 2,
  },
  hamburgerButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  hamburgerIcon: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  welcomeSection: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  welcomeCard: {
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
  welcomeTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4A4A4A',
    textAlign: 'center',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  welcomeText: {
    fontSize: 17,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 280,
  },
  actionsSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 20,
    letterSpacing: -0.3,
  },
  actionsContainer: {
    gap: 16,
  },
  primaryActionButton: {
    backgroundColor: '#000000',
    borderRadius: 8,
    padding: 20,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  secondaryActionButton: {
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
  featuresSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  featuresGrid: {
    gap: 16,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  featureTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 22,
  },
  statsSection: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A2B2C',
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 13,
    color: '#888888',
    textAlign: 'center',
    fontWeight: '500',
  },
  bottomSpacing: {
    height: 20,
  },
});

export default Home; 