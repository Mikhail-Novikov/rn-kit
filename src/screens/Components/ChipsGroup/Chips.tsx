import * as React from 'react';

import { ScrollView, View } from 'react-native';

import { styles } from '../../../common/styles';
import { DotChips, FilterChips } from '../../../components/ChipsGroup';
import { Puller } from '../../../components/Puller';

interface ChipData {
  key: number,
  label: string,
  isFilter?: boolean,
  checked?: boolean,
}

const chips = [
  { key: 1, label: 'Chips name 1', checked: true },
  { key: 2, label: 'Chips name 2' },
  { key: 3,
    label: 'Chips name 3',
    isFilter: true,
    checked: true,
    inner: [
      { key: 6, label: 'Chips name 6' },
      { key: 7, label: 'Chips name 7' },
      { key: 8, label: 'Chips name 8' },
    ],
  },
  { key: 4,
    label: 'Chips name 4',
    isFilter: true,
    checked: true,
    inner: [
      { key: 9, label: 'Chips name 9' },
      { key: 10, label: 'Chips name 10' },
    ],
  },
  { key: 5, label: 'Chips name 5' },
  { key: 6, label: 'Chips name 6' },
];

export const ChipsGroup = (): React.ReactElement | null => {
  const [isOpenPuller, setIsOpenPuller] = React.useState<boolean>(false);

  return (
    <>
      <ScrollView style={styles.container} horizontal>
        <FilterChips
          data={chips}
          setIsOpenPuller={setIsOpenPuller}
        />

        <DotChips isOpenPanel={isOpenPuller} setIsOpenPanel={setIsOpenPuller} />
      </ScrollView>

      <Puller isOpen={isOpenPuller} setIsOpen={setIsOpenPuller} showCloseButton>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

          <FilterChips
            data={chips}
            setIsOpenPuller={setIsOpenPuller}
            isInnerChips
          />
        </View>
      </Puller>
    </>
  );
};
