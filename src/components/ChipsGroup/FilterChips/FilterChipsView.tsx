import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ProdIcon } from '../../Icon/ProdIcon';
import { styles } from '../chips.styles';
import { ChipsContentProps } from '../models/Chips';


export const FilterChipsView = (props: ChipsContentProps): React.ReactElement => {
  const { text, isFilter, isSelect, setIsSelect, checked, isClearBtn } = props;

  return (
    <View
      style={[
        styles.chipsWrapper,
        { backgroundColor: isSelect || checked ? '#1F1F22' : '#E4E8EB' },
      ]}
    >
      <Text
        style={[styles.dotText, { color: (isSelect || checked) ? '#FFFFFF' : '#1F1F22' }]}
      >
        {text}
      </Text>
      {!isClearBtn && isFilter && (
        <View
          style={{
            marginLeft: 8,
            marginTop: 2,
          }}
        >
          <ProdIcon name="caretdown" size={16} color="#7D838A" />
        </View>
      )}
      {isClearBtn && (
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