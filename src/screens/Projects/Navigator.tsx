import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from './types';
import { Projects } from './Projects';

const Stack = createStackNavigator();

export const Navigator = (): React.ReactElement | null => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name={Screen.Projects}
      options={{
        headerTitle: 'Проекты',
      }}
      component={Projects}
    />
  </Stack.Navigator>
);
