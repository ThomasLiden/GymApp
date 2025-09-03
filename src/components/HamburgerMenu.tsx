import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

interface MenuItem {
  id: string;
  title: string;
  onPress: () => void;
  requiresAuth?: boolean;
}

interface HamburgerMenuProps {
  isVisible: boolean;
  onClose: () => void;
  navigation: any;
  user: any;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isVisible, onClose, navigation, user }) => {
  const [slideAnim] = useState(new Animated.Value(-width));

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const menuItems: MenuItem[] = [
    {
      id: 'start-workout',
      title: 'Starta Träningspass',
      onPress: () => {
        navigation.navigate('StartWorkout');
        onClose();
      },
    },
    {
      id: 'create-user',
      title: 'Skapa användare',
      onPress: () => {
        navigation.navigate('CreateUser');
        onClose();
      },
    },
    {
      id: 'profile',
      title: 'Min profil',
      onPress: () => {
        if (user) {
          navigation.navigate('Profile');
        } else {
          navigation.navigate('Login');
        }
        onClose();
      },
      requiresAuth: true,
    },
    {
      id: 'workout-history',
      title: 'Träningshistorik',
      onPress: () => {
        navigation.navigate('WorkoutHistory');
        onClose();
      },
      requiresAuth: true,
    },
    {
      id: 'goals',
      title: 'Mål & Framsteg',
      onPress: () => {
        navigation.navigate('Goals');
        onClose();
      },
      requiresAuth: true,
    },
    {
      id: 'settings',
      title: 'Inställningar',
      onPress: () => {
        navigation.navigate('Settings');
        onClose();
      },
    },
    {
      id: 'faq',
      title: 'FAQ',
      onPress: () => {
        navigation.navigate('FAQ');
        onClose();
      },
    },
    {
      id: 'about',
      title: 'Om appen',
      onPress: () => {
        navigation.navigate('About');
        onClose();
      },
    },
    {
      id: 'contact',
      title: 'Kontakta oss',
      onPress: () => {
        navigation.navigate('Contact');
        onClose();
      },
    },
  ];

  const filteredMenuItems = menuItems.filter(item => {
    if (item.requiresAuth && !user) {
      return false;
    }
    return true;
  });

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.backdrop}
          activeOpacity={1}
          onPress={onClose}
        />
        <Animated.View
          style={[
            styles.menuContainer,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.headerContent}>
                <Text style={styles.headerTitle}>Tompa</Text>
                <Text style={styles.headerSubtitle}>Träningsdagbok</Text>
              </View>
              <TouchableOpacity 
                style={styles.closeButton} 
                onPress={onClose}
                activeOpacity={0.8}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Menu Items */}
            <View style={styles.menuItems}>
              {filteredMenuItems.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.menuItem}
                  onPress={item.onPress}
                  activeOpacity={0.7}
                >
                  <View style={styles.menuItemContent}>
                    <Text style={styles.menuItemTitle}>{item.title}</Text>
                    <Text style={styles.menuItemArrow}>›</Text>
                  </View>
                  {index < filteredMenuItems.length - 1 && (
                    <View style={styles.menuItemDivider} />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Version 1.0.0</Text>
            </View>
          </SafeAreaView>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    flexDirection: 'row',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  menuContainer: {
    width: width * 0.85,
    backgroundColor: '#FFFFFF',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 4,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    letterSpacing: -0.3,
  },
  headerSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888888',
    marginTop: 2,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  closeButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  menuItems: {
    flex: 1,
    paddingTop: 8,
  },
  menuItem: {
    paddingVertical: 4,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  menuItemTitle: {
    fontSize: 17,
    color: '#000000',
    fontWeight: '500',
  },
  menuItemArrow: {
    fontSize: 18,
    color: '#1A2B2C',
    fontWeight: '400',
  },
  menuItemDivider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginLeft: 24,
    marginRight: 24,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  footerText: {
    fontSize: 13,
    color: '#888888',
    fontWeight: '400',
  },
});

export default HamburgerMenu; 