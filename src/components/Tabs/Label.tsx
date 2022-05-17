import * as React from 'react';
import { View, Text } from 'react-native';
import { Badge } from './Badge';
import { Dot } from './Dot';
import { Route } from './models/Tab';
import { styles } from './styles';

export const Label = (
  { route, focused }:
  { route: Route, focused: boolean },
): React.ReactElement => (
  <View style={styles.labelContainer}>
    <Text style={focused ? styles.active : styles.inactive}>
      <Text style={styles.label}>{route.title}</Text>
    </Text>
    {route.badge && <Badge route={route} />}
    {route.dot && <Dot route={route} />}
  </View>
);
