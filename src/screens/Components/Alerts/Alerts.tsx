import * as React from 'react';

import { ScrollView } from 'react-native';
import { styles } from '../../../common/styles';
import { Alert } from '../../../components/Alert';
import { Hint } from '../../../components/Hint';

export const Alerts = (): React.ReactElement | null => (
  <ScrollView style={styles.container}>
    <Alert describe="Информационное уведомление" iconName="info-fill" color="#1358BF" />
    <Alert describe="Уведомление, связанное с ограничением чего-либо" iconName="alert-fill" color="#FF9900" />
    <Alert describe="Когда совсем что-то плохо" iconName="error-fill" color="#C11030" />
    <Alert title="Заголовок" describe="Информационное уведомление" iconName="info-fill" color="#1358BF" />
    <Alert
      title="Заголовок"
      describe="Уведомление, связанное с ограничением чего-либо" 
      iconName="alert-fill" 
      color="#FF9900"
    />
    <Alert title="Заголовок" describe="Когда совсем что-то плохо" iconName="error-fill" color="#C11030" />
    <Hint describe="Подключение смс и push-уведомлений об изменении баланса ваших рублевых счетов. Вы будете получать сообщения каждый раз, когда вам переводят средства или происходит списание" />
    <Alert title="Бесплатно" describe="Описание" iconName="specialoffer-fill" color="#FF9900" />
    <Alert title="199 ₽ / месяц" describe="Описание" iconName="rub-fill" color="#107F8C" />
  </ScrollView>
);
