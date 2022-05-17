import * as React from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { DocsNavigator } from './Docs';
import { ComponentsNavigator } from './Components';
import { ProjectsNavigator } from './Projects';

export const Navigator = (): React.ReactElement | null => {
  const Tab = createBottomTabNavigator();
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName="Компоненты"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <Tab.Screen
        name="Руководство"
        component={DocsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="questioncircleo" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Компоненты"
        component={ComponentsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="layout" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Проекты"
        component={ProjectsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="google-play" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
