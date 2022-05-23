/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ProdIcon } from '../Icon/ProdIcon';
import { styles } from './chips.styles';
import * as sizes from './sizes';

interface ChipsProps {

  text?: string,

  checked?: boolean,

  isFilter?: boolean,

  onPress?: Function,

  isSelect?: boolean,

  setIsSelect?: Function,

  setIsOpenPuller: Function,

  isReset?: boolean,

  setIsReset?: Function,

  isInnerChips?: boolean,

  data?: any,

  setChipData: Function,

  chipsData: any,

  chipsParent?: any,

}

const RenderContent = (props: ChipsProps): React.ReactElement => {
  const { text, isFilter, isSelect, setIsSelect, checked, isReset } = props;

  return (
    <View style={styles.chipsWrapper}>
      <Text
        style={[styles.dotText, { color: (isSelect || checked) ? '#FFFFFF' : '#1F1F22' }]}
      >
        {text}
      </Text>
      {!isReset && isFilter && (
        <View
          style={{
            marginLeft: 8,
            marginTop: 2,
          }}
        >
          <ProdIcon name="caretdown" size={16} color="#7D838A" />
        </View>
      )}
      {isReset && (
        <TouchableOpacity onPress={() => setIsSelect && setIsSelect(false)}>
          <View
            style={{
              marginLeft: 4,
            }}
          >
            <ProdIcon name="clear" size={20} color="#7D838A" />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};


const FilterChipsItem = (props: ChipsProps): React.ReactElement => {
  const { isFilter, text, checked, setIsOpenPuller, isInnerChips, data, setParentChips, chipsData } = props;
  console.log("🚀 ~ file: FilterChips.tsx ~ line 82 ~ chipsData", chipsData)
  const [isReset, setIsReset] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);

  const handleChangeTitleChips = (): void => {
    setIsReset(true);
    setParentChips(data);
    // if (chipsParent !== null && chipsParent !== undefined) {
    //   Object.assign(chipsParent, {
    //     label: data.label,
    //   });
    // }
    chipsData?.map((data: any): void => (
      data.inner?.map((chipsInnerItem: any): React.ReactNode => delete chipsInnerItem.actions)
    ))

    Object.assign(data, { actions: 'change' });
  };

  console.log('🚀 ~ file: FilterChips.tsx ~ line 98 ~ handleChangeTitleChips ~ data', data);

  const handlePressParent = () => {
    setIsOpenPuller(true);
    Object.assign(data, {
      actions: 'open',
    });
  };

  return isFilter || isInnerChips ? (
    <TouchableOpacity onPress={event => (!isInnerChips ? handlePressParent() : handleChangeTitleChips())}>
      <View
        style={[
          styles.chipsContainer,
          { backgroundColor: isSelect || checked ? '#1F1F22' : '#E4E8EB' },
        ]}
      >
        <RenderContent
          isFilter={isFilter}
          isSelect={isSelect}
          text={text}
          setIsSelect={setIsSelect}
          checked={checked}
          setIsOpenPuller={() => null}
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
      <RenderContent
        isFilter={isFilter}
        isSelect={isSelect}
        text={text}
        setIsSelect={setIsSelect}
        checked={checked}
        setIsOpenPuller={() => null}
      />
    </View>
  );
};

export const FilterChips = (
  { chipsData, isInnerChips, setIsOpenPuller }:
  { chipsData: any, isInnerChips: boolean, setIsOpenPuller: Function },
): React.ReactElement => {
  const [chipsParent, getChipsParent] = React.useState();
  console.log('🚀 ~ file: FilterChips.tsx ~ line 153 ~ chipsParent', chipsParent);

  // const [parentChips, getIdParentChips] = React.useState(chipsData);

  const [parentChips, setParentChips] = React.useState(chipsData);

  const innerChips = chipsData.reduce((chips: any, el: any): [] => {
    const _chips = chips;
    _chips[el.actions] = el.inner;
    return _chips;
  });

  const actionsKey = innerChips?.open?.find(key => key.actions === 'change');
  console.log('🚀 ~ file: FilterChips.tsx ~ line 166 ~ actionsKey', actionsKey?.label);

  const chipsDataFilter = isInnerChips ? innerChips.open : chipsData;
  console.log('🚀 ~ file: FilterChips.tsx ~ line 169 ~ innerChips.open', innerChips.open);
  console.log('🚀 ~ file: FilterChips.tsx ~ line 170 ~ chipsData', chipsData);

  React.useEffect(() => {
    chipsData?.map((data: any) => {
      if(data.actions === 'open') {
        Object.assign(data, {
          label: actionsKey?.label,
        });
      }
    });
  },[actionsKey?.label])

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
          // chipsDataFilter={chipsDataFilter}
          setChipData={data.setChipData}
          chipsParent={data.chipsParent}
          isInnerChips={isInnerChips}
          setParentChips={setParentChips}
        />
      </View>
    )));
};
