/* eslint-disable react/no-unused-prop-types */
import React, { ReactNode } from 'react';
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

  isSelect?: boolean,

  setIsSelect?: Function,

  setIsOpenPuller: Function,

  isReset?: boolean,

  setIsReset?: Function,

  isInnerChips?: boolean,

  data?: any,

  setChipsData: Function,

  chipsData: any[],

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

const getChipsAction = (chipsData: any[]) => chipsData.reduce((chips: any, el: any): [] => {
  const _chips = chips;
  _chips[el.action] = el.inner;
  return _chips;
});

const FilterChipsItem = (props: ChipsProps): React.ReactElement => {
  const { isFilter, text, checked, setIsOpenPuller, isInnerChips, data, chipsData, setChipsData } = props;
  const [isReset, setIsReset] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);

  const handleSelectedInnerChips = (): void => {
    setIsReset(true);

    setChipsData({...data, action: 'selected'})

    const countChipsSelected = (
      getChipsAction(chipsData).active?.filter((el: { action: string; }) => el.action === 'selected')
      .map((acc: any, i: number) => i)
    )?.length;
    
    chipsData?.map((data: any) => {
      if(data.action === 'active' && countChipsSelected !== undefined) {
        Object.assign(data, {
          label: `Select ${countChipsSelected} choice`,
        });
      }
    });
  };

  const handleActiveParentChips = () => {
    setIsOpenPuller(true);
    console.log("🚀 ~ file: FilterChips.tsx ~ line 109 ~ handleActiveParentChips ~ data", data)
    Object.assign(data, {
    
      action: 'active',
    });
  };

  return isFilter || isInnerChips ? (
    <TouchableOpacity onPress={event => (!isInnerChips ? handleActiveParentChips() : handleSelectedInnerChips())}>
      <View
        style={[
          styles.chipsContainer,
          { backgroundColor: isSelect || checked ? '#1F1F22' : '#E4E8EB' },
        ]}
      >
        <RenderContent
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
      <RenderContent
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

export const FilterChips = (
  { data, isInnerChips, setIsOpenPuller }:
  { data: any, isInnerChips: boolean, setIsOpenPuller?: Function },
): React.ReactElement => {

  const [chipsData, setChipsData] = React.useState(data);
  const chipsDataFilter = isInnerChips ? getChipsAction(chipsData).active : chipsData;
  console.log("🚀 ~ file: FilterChips.tsx ~ line 160 ~ chipsData", chipsData)
  console.log("🚀 ~ file: FilterChips.tsx ~ line 161 ~ getChipsAction(chipsData).active", getChipsAction(chipsData))

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
          setChipsData={setChipsData}
          chipsParent={data.chipsParent}
          isInnerChips={isInnerChips}
        />
      </View>
    )));
};
