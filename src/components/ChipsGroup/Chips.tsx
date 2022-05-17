import * as React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';

import { SwipeablePanel } from 'rn-swipeable-panel';

import { styles } from './chips.styles';

interface ButtonProps {
  label: string,
  secondary?: boolean,
  sm?: boolean,
  isDisabled?: boolean,
}

export const Chips = ({
  label,
  secondary,
  sm,
  isDisabled,
  }: ButtonProps): React.ReactElement | null => (
    <TouchableOpacity
      activeOpacity={0.4}
      disabled={isDisabled}
    >
      <View
        style={styles.chipsWrapper}
      >
        <Text
          style={styles.chipsText}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
);
