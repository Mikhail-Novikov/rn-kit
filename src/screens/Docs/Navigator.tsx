import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from './types';
import { Docs } from './Docs';

const Stack = createStackNavigator();

export const Navigator = (): React.ReactElement | null => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name={Screen.Docs}
      options={{
        headerTitle: 'Компоненты',
      }}
      component={Docs}
    />
  </Stack.Navigator>
);
