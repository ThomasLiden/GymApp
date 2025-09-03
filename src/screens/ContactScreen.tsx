import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

interface ContactScreenProps {
  navigation: any;
}

const ContactScreen: React.FC<ContactScreenProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (!name || !email || !message) {
      Alert.alert('Fel', 'Alla fält måste fyllas i');
      return;
    }

    // TODO: Implement actual message sending logic
    Alert.alert('Framgång', 'Ditt meddelande har skickats!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
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
        <Text style={styles.title}>Kontakta Oss</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Behöver du hjälp?</Text>
          <Text style={styles.infoText}>
            Vi finns här för att hjälpa dig med alla frågor om Tompas Träningsdagbok.
          </Text>
        </View>

        <View style={styles.contactMethods}>
          <Text style={styles.sectionTitle}>Kontaktmetoder</Text>
          
          <View style={styles.contactMethod}>
            <Text style={styles.contactMethodLabel}>E-post</Text>
            <Text style={styles.contactMethodValue}>support@tompa.se</Text>
          </View>
          
          <View style={styles.contactMethod}>
            <Text style={styles.contactMethodLabel}>Telefon</Text>
            <Text style={styles.contactMethodValue}>+46 70 123 45 67</Text>
          </View>
          
          <View style={styles.contactMethod}>
            <Text style={styles.contactMethodLabel}>Supporttider</Text>
            <Text style={styles.contactMethodValue}>Mån-Fre 9:00-17:00</Text>
          </View>
        </View>

        <View style={styles.contactForm}>
          <Text style={styles.sectionTitle}>Skicka meddelande</Text>
          
          <Text style={styles.label}>Namn</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Ange ditt namn"
            placeholderTextColor="#888888"
          />

          <Text style={styles.label}>E-post</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Ange din e-postadress"
            placeholderTextColor="#888888"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Meddelande</Text>
          <TextInput
            style={[styles.input, styles.messageInput]}
            value={message}
            onChangeText={setMessage}
            placeholder="Beskriv ditt problem eller fråga"
            placeholderTextColor="#888888"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
            activeOpacity={0.9}
          >
            <Text style={styles.sendButtonText}>Skicka Meddelande</Text>
          </TouchableOpacity>
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
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 28,
    marginBottom: 24,
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  infoText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  contactMethods: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
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
    marginBottom: 16,
    letterSpacing: -0.3,
  },
  contactMethod: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  contactMethodLabel: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  contactMethodValue: {
    fontSize: 16,
    color: '#1A2B2C',
    fontWeight: '600',
  },
  contactForm: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 8,
    marginTop: 16,
    letterSpacing: -0.2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#F8F9FA',
    color: '#000000',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#000000',
    padding: 18,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 24,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ContactScreen; 