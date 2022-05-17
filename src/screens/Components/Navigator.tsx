import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Screen } from './types';
import { Components } from './Components';
import { Alerts } from './Alerts/Alerts';
import { Buttons } from './Buttons/Buttons';
import { Notifications } from './Notifications/Notifications';
import { Tabs } from './Tabs/Tabs';
import { ChipsGroup } from './ChipsGroup/Chips';
import { BottomSheet } from './BottomSheet';


const Stack = createStackNavigator();

export const Navigator = (): React.ReactElement | null => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name={Screen.Components}
      options={{
            headerTitle: 'Компоненты',
          }}
      component={Components}
    />
    <Stack.Screen
      name={Screen.Buttons}
      options={{
        headerTitle: 'Кнопки',
      }}
      component={Buttons}
    />
    <Stack.Screen
      name={Screen.Alerts}
      options={{
        headerTitle: 'Алерты',
      }}
      component={Alerts}
    />
    <Stack.Screen
      name={Screen.Notifications}
      options={{
        headerTitle: 'Уведомления',
      }}
      component={Notifications}
    />
    <Stack.Screen
      name={Screen.Tabs}
      options={{
        headerTitle: 'Табы',
      }}
      component={Tabs}
    />
    <Stack.Screen
      name={Screen.Chips}
      options={{
        headerTitle: 'Чипсы',
      }}
      component={ChipsGroup}
    />
    <Stack.Screen
      name={Screen.BottomSheet}
      options={{
        headerTitle: 'Пуллер',
      }}
      component={BottomSheet}
    />
  </Stack.Navigator>
);
