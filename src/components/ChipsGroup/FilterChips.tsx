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

  inner?: boolean,

  data?: any,

  setChipData: Function,

  chipData?: [],

  chipsParent?: any,

  getChipsParent: Function,

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
  const { isFilter, text, checked, setIsOpenPuller, inner, data, chipsParent, getChipsParent, chipData, setChipData } = props;
  const [isReset, setIsReset] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);

  const getIdParentChips = (data): any => {
    setIsOpenPuller(true);
    getChipsParent({ ...chipsParent, label: data.label });

    return data;
  };

  const handleChangeTitleChips = (): void => {
    setIsReset(true);
    if (chipsParent !== null && chipsParent !== undefined) {
      Object.assign(chipsParent, {
        label: data.label,
      });
    }

    // setChipData(chipsParent.label);
  };
  console.log('🚀 ~ file: FilterChips.tsx ~ line 103 ~ data', data);
  console.log('🚀 ~ file: FilterChips.tsx ~ line 99 ~ chipsParent', chipsParent);

  return isFilter || inner ? (
    <TouchableOpacity onPress={event => (!inner ? getIdParentChips(data) : handleChangeTitleChips())}>

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

export const FilterChips = ({ chipData }: {chipData: ChipsProps}): React.ReactElement => (
  chipData.map((data: any): React.ReactElement => (
    <View key={data.key}>
      <FilterChipsItem
        text={data.label}
        isFilter={data.isFilter}
        checked={data.checked}
        setIsOpenPuller={data.setIsOpenPuller}
        data={data}
        chipData={data.chipData}
        setChipData={data.setChipData}
        chipsParent={data.chipsParent}
        getChipsParent={data.getChipsParent}
        inner
      />
    </View>
  )));
