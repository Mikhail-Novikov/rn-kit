import * as React from 'react';

import { ScrollView, Text } from 'react-native';
import { styles } from '../../../common/styles';
import { Button } from '../../../components/Button';

import { Puller } from '../../../components/Puller';
import { View } from '../../../components/Themed';

export const BottomSheet = (): React.ReactElement | null => {
  const [isOpenPuller, setIsOpenPuller] = React.useState(false);
  const [isOpenPullerCustom, setIsOpenPullerCustom] = React.useState(false);
  const [isClose, setIsClose] = React.useState(false);

  return (
    <>
      <ScrollView style={styles.container} horizontal>
        <Button customStyle={styles.marginRight16} label="Puller" sm onPress={async () => setIsOpenPuller(!isOpenPuller)} />
        <Button label="Puller с контентом" sm onPress={async () => setIsOpenPullerCustom(!isOpenPullerCustom)} />
      </ScrollView>
      <Puller isOpen={isOpenPuller} setIsOpen={setIsOpenPuller} showCloseButton>
        <Text>Пуллер с иконкой скрытия</Text>
      </Puller>
      <Puller
        isOpen={isOpenPullerCustom}
        setIsOpen={setIsOpenPullerCustom}
        isClose={isClose}
        setIsClose={setIsClose}
      >
        <View style={{ alignItems: 'flex-start' }}>
          <Text style={{ marginBottom: 16 }}>
            Контент может быть различным, в том числе с использованием элементов управления
          </Text>
          <Button
            label="Закрыть"
            sm
            onPress={() => setIsClose(true)}
          />
        </View>
      </Puller>
    </>
  );
};
