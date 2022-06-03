/* eslint-disable import/named */
import React from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import { FilterChipsView } from './FilterChipsView';
import { ChipsProps } from '../models/Chips';
import { handlePushInnerChips } from './vendor/handlePushInnerChips';
import { handlePushParentChips } from './vendor/handlePushParentChips';

export const FilterChipsItem = (props: ChipsProps): React.ReactElement => {
  const {
    isFilter,
    text,
    checked,
    setIsOpenPuller,
    isInnerChips,
    itemChip,
    chipsData,
    setIsCounter,
    counter,
  } = props;
  const [isClearBtn, setisClearBtn] = React.useState<boolean>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);


  // Если актион в статусе selected изменить стейт isClearBtn
  React.useEffect(() => {
    if (itemChip.action === 'selected') {
      setIsSelect(true);
      setisClearBtn(true);
    }
  }, [itemChip.action]);

  return isFilter || isInnerChips ? (
    <TouchableOpacity
      onPress={event =>
        (!isInnerChips ?
          handlePushParentChips({ chipsData, itemChip, setIsOpenPuller }) :
          handlePushInnerChips({ chipsData, setisClearBtn, isClearBtn, setIsCounter })
        )
      }
    >
      <FilterChipsView
        text={text}
        isFilter={isFilter}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        checked={checked}
        isClearBtn={isClearBtn}
      />
    </TouchableOpacity>
  ) : (
    <View>
      <FilterChipsView
        text={text}
        isFilter={isFilter}
        isSelect={isSelect}
        setIsSelect={setIsSelect}
        checked={checked}
        isClearBtn={isClearBtn}
      />
    </View>
  );
};
