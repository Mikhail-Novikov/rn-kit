import * as React from 'react';

import { View, Text } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  text: string,
  first?: boolean,
  last?: boolean,
}

export const Divider = ({
  text,
  first,
  last,
}: ButtonProps): React.ReactElement | null =>
  // TODO Компонент надо доработать (с дизайнерами не согласован)
   (
     <View
       style={styles({ first, last }).divider}
     >
       <Text style={styles({ first, last }).dividerText}>{text}</Text>
     </View>
  );
