import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from '../chips.styles';
import { FilterChipsContent } from './FilterChipsContent';
import { ChipsProps } from '../models/Chips';

export const FilterChipsItem = (props: ChipsProps): React.ReactElement => {
  const {
    isFilter, text, checked, setIsOpenPuller, isInnerChips, data, chipsData, getChipsAction,
  } = props;
  const [isReset, setIsReset] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);

  const handleSelectedInnerChips = (): void => {
    setIsReset(true);

    Object.assign(data, {
      action: 'selected',
    });

    const countChipsSelected = (
      getChipsAction(chipsData).active?.filter((el: { action: string }) => el.action === 'selected')
      .map((acc: any, i: number) => i)
    )?.length;

    chipsData.map((el: { action: string }): React.ReactNode => {
      if (el.action === 'active' && countChipsSelected !== undefined) {
        Object.assign(el, {
          label: `Select ${countChipsSelected} choice`,
        });
      }
      return null;
    });
  };

  const handleActiveParentChips = (): void => {
    setIsOpenPuller(true);
    Object.assign(data, {
      action: 'active',
    });
  };

  return isFilter || isInnerChips ? (
    <TouchableOpacity
      onPress={event => (!isInnerChips ? handleActiveParentChips() : handleSelectedInnerChips())}
    >
      <View
        style={[
          styles.chipsContainer,
          { backgroundColor: isSelect || checked ? '#1F1F22' : '#E4E8EB' },
        ]}
      >
        <FilterChipsContent
          text={text}
          isFilter={isFilter}
          isSelect={isSelect}
          setIsSelect={setIsSelect}
          checked={checked}
          isReset={isReset}
        />
      </View>
    </TouchableOpacity>
  ) : (
    <View
      style={[
        styles.chipsContainer,
        {
          backgroundColor: checked ? '#1F1F22' : '#E4E8EB',
        },
      ]}
    >
      <FilterChipsContent
        text={text}
        isFilter={isFilter}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        checked={checked}
        isReset={isReset}
      />
    </View>
  );
};
