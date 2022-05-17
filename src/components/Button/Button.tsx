import * as React from 'react';

import { TouchableOpacity, View, Text, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

import { styles } from './styles';

interface ButtonProps {
    label: string,
    secondary?: boolean,
    sm?: boolean,
    isDisabled?: boolean,
    onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
    customStyle?: object,
}

export const Button = ({
  label,
  secondary,
  sm,
  isDisabled,
  onPress,
  customStyle,
}: ButtonProps): React.ReactElement | null => (
  <TouchableOpacity
    style={[styles({ secondary, sm, isDisabled }).btn, customStyle]}
    onPress={onPress}
    activeOpacity={0.4}
    disabled={isDisabled}
  >
    <View
      style={styles({ secondary, sm, isDisabled }).button}
    >
      <Text
        style={styles({ secondary, sm, isDisabled }).text}
      >
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);
