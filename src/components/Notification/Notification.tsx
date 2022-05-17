import React from 'react';
import { View, Text } from "react-native";
import { Link } from './Link';
import { styles } from './Notification.styles';

interface NotificationProps {
  text: string,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  control?: string,
}

export const Notification = ({ ...props }: NotificationProps): React.ReactElement => (
  <View style={styles(props).notification}>
    <Text style={styles(props).text}>{props.text}</Text>
    {!!props.control && <Link label={props.control} />} 
  </View>
);
