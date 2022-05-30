import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { FilterChipsView } from './FilterChipsView';
import { ChipsProps } from '../models/Chips';

export const FilterChipsItem = (props: ChipsProps): React.ReactElement => {
  const {
    isFilter, text, checked, setIsOpenPuller, isInnerChips, data, chipsData, getChipsAction,
  } = props;
  const [isClearBtn, setIsClearBtn] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);

  const handleSelectedInnerChips = (): void => {
    setIsClearBtn(true);

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
    setChipsSelected();
  };

  const setChipsSelected = (): void => {
    getChipsAction(chipsData)
    .active?.filter((el: { action: string }) => el.action === 'selected')
    .map((el: any, i: number) => {
      console.log('🚀 ~ file: FilterChipsItem.tsx ~ line 43 ~ handleSelectedInnerChips ~ el', el);
    });
  };

  console.log('🚀 ~ file: FilterChipsItem.tsx ~ line 45 ~ chipsData', chipsData);
  console.log('🚀 ~ file: FilterChipsItem.tsx ~ line 46 ~ data', data);

  return isFilter || isInnerChips ? (
    <TouchableOpacity
      onPress={event => (!isInnerChips ? handleActiveParentChips() : handleSelectedInnerChips())}
    >
      <FilterChipsView
        text={text}
        isFilter={isFilter}
        checked={checked}
        isClearBtn={isClearBtn}
        setIsClearBtn={setIsClearBtn}
      />
    </TouchableOpacity>
  ) : (
    <View>
      <FilterChipsView
        text={text}
        isFilter={isFilter}
        checked={checked}
        isClearBtn={isClearBtn}
        setIsClearBtn={setIsClearBtn}
      />
    </View>
  );
};
