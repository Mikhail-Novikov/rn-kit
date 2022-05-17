import * as React from 'react';

import { ScrollView } from 'react-native';
import { styles } from '../../../common/styles';
import { Notification } from '../../../components/Notification';

export const Notifications = (): React.ReactElement | null => (
  <ScrollView style={styles.container}>
    <Notification text="Данный функционал недоступен в демо-режиме" warning />
    <Notification text="Платеж успешно сохранен" success />
    <Notification text="Что-то пошло не так" danger />
    <Notification text="Нет соединения с интернетом" danger control="Повторить" />
    <Notification text="Данный функционал недоступен в демо-режиме" />
  </ScrollView>
);
