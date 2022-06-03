import React from 'react';
import { View } from 'react-native';
import { FilterChipsItem } from './FilterChipsItem';


export const FilterChips = (
  { data, isInnerChips, setIsOpenPuller, isOpenPuller }:
  { data: any, isInnerChips: boolean, setIsOpenPuller: Function , isOpenPuller: boolean},
): React.ReactElement => {

  const [counter, setIsCounter] = React.useState<number>();

  const getChipsAction = (chipsData: any[]) => chipsData.reduce((chips: any, el: any): [] => {
    const _chips = chips;
    _chips[el.action] = el.inner;
    return _chips;
  });

  const chipsData = data;
  // const chipsDataFilter = isInnerChips ? getChipsAction(chipsData).active : chipsData;
  const chipsDataFilter = isInnerChips ? chipsData.inner : chipsData;
  console.log("🚀 ~ file: index.tsx ~ line 20 ~ chipsData", chipsData)
  
  return (
    chipsDataFilter?.map((data: any): React.ReactElement => (
      <View key={data.key}>
        <FilterChipsItem
          text={data.label}
          isFilter={data.isFilter}
          checked={data.checked}
          setIsOpenPuller={setIsOpenPuller}
          isOpenPuller={isOpenPuller}
          itemChip={data}
          chipsData={chipsData}
          chipsParent={data.chipsParent}
          isInnerChips={isInnerChips}
          getChipsAction={getChipsAction}
          // setInnerChips={setInnerChips}
          counter={counter}
          setIsCounter={setIsCounter}
        />
      </View>
    )));
};
