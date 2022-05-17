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

  id: number,

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

export const FilterChips = (props: ChipsProps): React.ReactElement => {
  const { isFilter, text, checked, setIsOpenPuller, inner } = props;
  const [isReset, setIsReset] = React.useState<boolean | undefined>(false);
  const [isSelect, setIsSelect] = React.useState<boolean | undefined>(false);

  return isFilter || inner ? (
    <TouchableOpacity onPress={() => (!inner ? setIsOpenPuller(true) : setIsReset(true))}>
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

Object.assign(FilterChips, sizes);
