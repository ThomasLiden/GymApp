import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import {
  StartWorkoutScreen,
  CreateUserScreen,
  LoginScreen,
  ProfileScreen,
  WorkoutHistoryScreen,
  GoalsScreen,
  SettingsScreen,
  FAQScreen,
  AboutScreen,
  ContactScreen,
} from './src/screens';

// Import components
import { Home } from './src/components';
import ActiveWorkout from './src/components/ActiveWorkout';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState<any>(null);

  const handleLogin = (userData: any) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#0A0A0A' },
            cardShadowEnabled: false,
          }}
        >
          <Stack.Screen name="Home">
            {(props) => <Home {...props} user={user} />}
          </Stack.Screen>
          
          <Stack.Screen name="StartWorkout" component={StartWorkoutScreen} />
          <Stack.Screen name="ActiveWorkout" component={ActiveWorkout} />
          
          <Stack.Screen name="CreateUser" component={CreateUserScreen} />
          
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
          
          <Stack.Screen name="Profile">
            {(props) => <ProfileScreen {...props} user={user} onLogout={handleLogout} />}
          </Stack.Screen>
          
          <Stack.Screen name="WorkoutHistory">
            {(props) => <WorkoutHistoryScreen {...props} user={user} />}
          </Stack.Screen>
          
          <Stack.Screen name="Goals">
            {(props) => <GoalsScreen {...props} user={user} />}
          </Stack.Screen>
          
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="FAQ" component={FAQScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Contact" component={ContactScreen} />
        </Stack.Navigator>
        
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
});
