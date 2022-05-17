import * as React from 'react';
import { View, Text } from 'react-native';
import { stylesBadge } from './badge.styles';
import { Route } from './models/Tab';

export const Badge = ({ route }: { route: Route }): React.ReactElement | null => (
  <View style={stylesBadge(route.badge).badge}>
    <Text style={stylesBadge(route.badge).count}>{route.count}</Text>
  </View>
);
