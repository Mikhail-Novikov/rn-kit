import * as React from 'react';

import { TouchableOpacity, View, Text } from 'react-native';
import { ProdIcon } from '../Icon/ProdIcon';

import { styles } from './chips.styles';

interface LinkProps {
  isOpenPanel: boolean,
  setIsOpenPanel: Function,
}

export const DotChips = (
  { isOpenPanel, setIsOpenPanel }: LinkProps,
): React.ReactElement | null => (
  <TouchableOpacity
    onPress={() => setIsOpenPanel(!isOpenPanel)}
    activeOpacity={0.4}
  >
    <View style={styles.dotChips}>
      <ProdIcon name="more" size={16} />
    </View>
  </TouchableOpacity>
);
