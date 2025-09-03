import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';

interface FAQScreenProps {
  navigation: any;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQScreen: React.FC<FAQScreenProps> = ({ navigation }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const faqData: FAQItem[] = [
    {
      id: '1',
      question: 'Hur loggar jag ett träningspass?',
      answer: 'Gå till "Starta Träningspass" och välj övningar. Logga sedan dina set, reps och vikt för varje övning.',
    },
    {
      id: '2',
      question: 'Kan jag synkronisera min data mellan enheter?',
      answer: 'Ja, när du loggar in på samma konto på olika enheter synkroniseras all data automatiskt.',
    },
    {
      id: '3',
      question: 'Hur sätter jag träningsmål?',
      answer: 'Gå till "Mål & Framsteg" och tryck på "+ Lägg till nytt mål". Ange övning, målvikt och deadline.',
    },
    {
      id: '4',
      question: 'Kan jag exportera min träningsdata?',
      answer: 'Ja, gå till Inställningar > Data > Exportera data för att ladda ner din träningshistorik.',
    },
    {
      id: '5',
      question: 'Hur fungerar framstegsspårning?',
      answer: 'Appen spårar automatiskt dina bästa resultat för varje övning och visar trender över tid.',
    },
  ];

  const toggleItem = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const renderFAQItem = (item: FAQItem) => {
    const isExpanded = expandedItems.includes(item.id);
    
    return (
      <View key={item.id} style={styles.faqItem}>
        <TouchableOpacity
          style={styles.faqQuestion}
          onPress={() => toggleItem(item.id)}
          activeOpacity={0.8}
        >
          <Text style={styles.faqQuestionText}>{item.question}</Text>
          <Text style={styles.faqArrow}>{isExpanded ? '−' : '+'}</Text>
        </TouchableOpacity>
        
        {isExpanded && (
          <View style={styles.faqAnswer}>
            <Text style={styles.faqAnswerText}>{item.answer}</Text>
          </View>
        )}
      </View>
    );
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
        <Text style={styles.title}>Vanliga Frågor</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.introCard}>
          <Text style={styles.introTitle}>Behöver du hjälp?</Text>
          <Text style={styles.introText}>
            Här hittar du svar på de vanligaste frågorna om Tompas Träningsdagbok.
          </Text>
        </View>

        <View style={styles.faqSection}>
          {faqData.map(renderFAQItem)}
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Hittade du inte svaret?</Text>
          <Text style={styles.contactText}>
            Kontakta vårt supportteam för personlig hjälp.
          </Text>
          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => navigation.navigate('Contact')}
            activeOpacity={0.9}
          >
            <Text style={styles.contactButtonText}>Kontakta Support</Text>
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
  introCard: {
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
  introTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  introText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  faqSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  faqItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  faqQuestionText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '600',
    flex: 1,
    marginRight: 16,
  },
  faqArrow: {
    fontSize: 20,
    color: '#1A2B2C',
    fontWeight: '700',
  },
  faqAnswer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  faqAnswerText: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 22,
    letterSpacing: 0.1,
  },
  contactCard: {
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
  contactTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#4A4A4A',
    marginBottom: 12,
    letterSpacing: -0.3,
  },
  contactText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  contactButton: {
    backgroundColor: '#1A2B2C',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  contactButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default FAQScreen; 