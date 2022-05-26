import React from 'react';
import { View } from 'react-native';
import { FilterChipsItem } from './FilterChipsItem';

export const getChipsAction = (chipsData: any[]) => chipsData.reduce((chips: any, el: any): [] => {
  const _chips = chips;
  _chips[el.action] = el.inner;
  return _chips;
});

export const FilterChips = (
  { data, isInnerChips, setIsOpenPuller }:
  { data: any, isInnerChips: boolean, setIsOpenPuller: Function },
): React.ReactElement => {

  const chipsData = data;
  const chipsDataFilter = isInnerChips ? getChipsAction(chipsData).active : chipsData;

  return (
    chipsDataFilter?.map((data: any): React.ReactElement => (
      <View key={data.key}>
        <FilterChipsItem
          text={data.label}
          isFilter={data.isFilter}
          checked={data.checked}
          setIsOpenPuller={setIsOpenPuller}
          data={data}
          chipsData={chipsData}
          chipsParent={data.chipsParent}
          isInnerChips={isInnerChips} />
      </View>
    )));
};
