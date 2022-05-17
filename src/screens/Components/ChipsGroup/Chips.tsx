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

// const chipData = ([
//   { key: 0, label: 'Chips name', checked: true },
//   { key: 1, label: 'Chips name' },
//   { key: 2, label: 'Chips name', isFilter: true, checked: true },
//   { key: 3, label: 'Chips name', isFilter: true },
//   { key: 4, label: 'Chips name' },
// ]);


export const ChipsGroup = (): React.ReactElement | null => {
  const [isOpenPuller, setIsOpenPuller] = React.useState<boolean>(false);
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Chips name 1', checked: true },
    { key: 1, label: 'Chips name 2' },
    { key: 2,
      label: 'Chips name 3',
      isFilter: true,
      checked: true,
      inner: [
        { key: 5, label: 'Chips name 5' },
        { key: 6, label: 'Chips name 6' },
      ],
    },
    { key: 3, label: 'Chips name 4', isFilter: true },
    { key: 4, label: 'Chips name 5' },
  ]);

  return (
    <>
      <ScrollView style={styles.container} horizontal>
        {chipData.map((data: any): React.ReactElement =>
          (
            <View key={data.key}>
              <FilterChips
                text={data.label}
                isFilter={data.isFilter}
                checked={data.checked}
                setIsOpenPuller={setIsOpenPuller}
                id={data.key}
              />
            </View>
          ))}

        <DotChips isOpenPanel={isOpenPuller} setIsOpenPanel={setIsOpenPuller} />
      </ScrollView>

      <Puller isOpen={isOpenPuller} setIsOpen={setIsOpenPuller} showCloseButton>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {chipData[2].inner?.map((data: any): React.ReactElement =>
            (
              <View key={data.key}>
                <FilterChips
                  text={data.label}
                  isFilter={data.isFilter}
                  checked={data.checked}
                  setIsOpenPuller={setIsOpenPuller}
                  id={data.key}
                  inner
                />
              </View>
            ))}
        </View>
      </Puller>
    </>
  );
};
