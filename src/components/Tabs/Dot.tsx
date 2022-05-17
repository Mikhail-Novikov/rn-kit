import * as React from 'react';
import { View } from 'react-native';
import { stylesDot } from './dot.styles';
import { Route } from './models/Tab';

export const Dot = ({ route }: { route: Route }): React.ReactElement | null => (
  <View style={stylesDot(route.dot).dot} />
);
