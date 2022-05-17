import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { ProdIcon } from '../Icon/ProdIcon';

import { styles } from './Alert.styles';

interface AlertProps {
    title?: string,
    iconName: string,
    color: string,
    describe: string,
    hint?: boolean,
}

export const Alert =
({ title, describe, iconName, color, hint }: AlertProps): React.ReactElement | null => (
  <View style={styles.alert}>
    {!hint && (
    <View style={styles.icon}>
      <ProdIcon name={iconName} color={color} size={20} />
    </View>
  )}
    <View style={styles.textContainer}>
      {title && <Text style={styles.title}>{title}</Text>}
      <Text style={styles.describe}>{describe}</Text>
    </View>
  </View>
);
