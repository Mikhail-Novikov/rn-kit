import { StyleSheet } from 'react-native';
import { theme } from '../../constants/Colors';

export const styles = StyleSheet.create({
    chipsWrapper: {
      borderRadius: 16,
      paddingHorizontal: 16,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 4,
      minHeight: 32,
      minWidth: 114,
    },
    chipsText: {
      color: '#1F1F22',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
    },
    dotText: {
      color: '#1F1F22',
      fontSize: 15,
      lineHeight: 20,
      textAlign: 'center',
    },
    dotChips: {
      backgroundColor: '#E4E8EB',
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      margin: 4,
    },
  });
