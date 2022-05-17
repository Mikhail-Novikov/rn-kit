import * as React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { styles } from './Notification.styles';

interface LinkProps {
  label: string;
}

export const Link = ({ label }: LinkProps): React.ReactElement | null => {
  return (
    <TouchableOpacity
      style={styles({}).containerLink}
      onPress={() => {
        /* do this */
      }}
      activeOpacity={0.4}
    >
      <View>
        <Text style={styles({}).textLink}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
