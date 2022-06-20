import React from 'react';

// Routing
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Font Loading
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';

// Theming
import { ThemeProvider } from 'styled-components/native';
import theme from './constants/theme';

// Screens
import Home from './screens/Intro';
import Mobile from './screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Mobile: undefined;
};

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_400Regular_Italic,
    DMSans_500Medium,
    DMSans_500Medium_Italic,
    DMSans_700Bold,
    DMSans_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={NavigationTheme}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen name="Mobile" component={Mobile} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
