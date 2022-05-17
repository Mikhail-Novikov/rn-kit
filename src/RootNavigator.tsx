import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainNavigator } from './screens';

const Stack = createStackNavigator();

export const RootNavigator = (
    { colorScheme }: { colorScheme: ColorSchemeName },
): React.ReactElement | null =>
(
  <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    <Stack.Navigator>
      <Stack.Screen name="Root" component={MainNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);
