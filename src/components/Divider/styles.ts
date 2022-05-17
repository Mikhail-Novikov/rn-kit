import { StyleSheet } from 'react-native';
import { theme } from '../../constants/Colors';

export const styles = ({ ...props }): any =>
  StyleSheet.create({
    divider: {
    backgroundColor: theme.asphalt_05,
    padding: 10,
    marginVertical: 8,
    marginBottom: props.last && 0,
    marginTop: props.first && 0,
    },
    dividerText: {
      color: theme.darkGray,
    },
  });
