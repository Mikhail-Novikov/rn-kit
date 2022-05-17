import { StyleSheet } from 'react-native';
import { theme } from '../../constants/Colors';

export const styles = StyleSheet.create({
    alert: {
      backgroundColor: theme.asphalt_05,
      paddingHorizontal: 16,
      paddingBottom: 16,
      paddingTop: 12,
      marginBottom: 16,
      borderRadius: 8,
      flexDirection: 'row',
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 16,
    },
    textContainer: {
      flex: 1,
    },
    title: {
      lineHeight: 20,
      fontWeight: '500',
      color: theme.graphite_01,
      marginBottom: 4,
    },
    describe: {
      fontSize: 12,
      lineHeight: 18,
      fontWeight: '500',
      color: theme.asphalt_01,
      marginTop: 2,
    },
  });
