import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Button } from 'react-native';

import { NavigatorParamList, Screen } from './types';

export const Components = (): React.ReactElement | null => {
  const { navigate } = useNavigation<StackNavigationProp<NavigatorParamList>>();

  return (
    <>
      <Button title="Кнопки" onPress={() => navigate(Screen.Buttons)} />
      <Button title="Алерты" onPress={() => navigate(Screen.Alerts)} />
      <Button title="Уведомления" onPress={() => navigate(Screen.Notifications)} />
      <Button title="Табы" onPress={() => navigate(Screen.Tabs)} />
      <Button title="Чипсы" onPress={() => navigate(Screen.Chips)} />
      <Button title="Пуллер" onPress={() => navigate(Screen.BottomSheet)} />
    </>
  );
};
