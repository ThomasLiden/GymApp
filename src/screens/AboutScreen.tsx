import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,
} from 'react-native';

interface AboutScreenProps {
  navigation: any;
}

const AboutScreen: React.FC<AboutScreenProps> = ({ navigation }) => {
  const handleOpenLink = (url: string) => {
    Linking.openURL(url);
  };

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
        <Text style={styles.title}>Om appen</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.appInfoCard}>
          <Text style={styles.appName}>Tompas Träningsdagbok</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Om appen</Text>
          <Text style={styles.sectionText}>
            Tompas Träningsdagbok är en enkel och användarvänlig app för att spåra dina träningspass. 
            Appen hjälper dig att logga övningar, set och reps, samt följa ditt framsteg över tid.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Funktioner</Text>
          <View style={styles.featureList}>
            <Text style={styles.featureItem}>• Logga träningspass med övningar, set och reps</Text>
            <Text style={styles.featureItem}>• Spåra träningshistorik och framsteg</Text>
            <Text style={styles.featureItem}>• Sätt och följ träningsmål</Text>
            <Text style={styles.featureItem}>• Synkronisera data mellan enheter</Text>
            <Text style={styles.featureItem}>• Enkel och intuitiv design</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Utvecklare</Text>
          <Text style={styles.sectionText}>
            Tompas Träningsdagbok är utvecklad med fokus på enkelhet och användbarhet. 
            Appen är byggd med React Native för att fungera smidigt på både iOS och Android.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Kontakt</Text>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => handleOpenLink('mailto:support@tompa.se')}
            activeOpacity={0.8}
          >
            <Text style={styles.linkText}>support@tompa.se</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => handleOpenLink('https://tompa.se')}
            activeOpacity={0.8}
          >
            <Text style={styles.linkText}>tompa.se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Juridisk information</Text>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => navigation.navigate('PrivacyPolicy')}
            activeOpacity={0.8}
          >
            <Text style={styles.linkText}>Sekretesspolicy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => navigation.navigate('TermsOfService')}
            activeOpacity={0.8}
          >
            <Text style={styles.linkText}>Användarvillkor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Tompas Träningsdagbok. Alla rättigheter förbehållna.
          </Text>
        </View>
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
  appInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 28,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  appName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 4,
    letterSpacing: -0.3,
  },
  appVersion: {
    fontSize: 16,
    color: '#888888',
    fontWeight: '500',
  },
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  sectionText: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  featureList: {
    marginTop: 8,
  },
  featureItem: {
    fontSize: 16,
    color: '#000000',
    lineHeight: 24,
    marginBottom: 4,
    letterSpacing: 0.1,
  },
  linkItem: {
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 16,
    color: '#1A2B2C',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    fontWeight: '400',
  },
});

export default AboutScreen; 