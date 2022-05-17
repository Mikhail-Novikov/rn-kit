import { Platform, StyleSheet } from 'react-native';

export const styles = ({ ...props }): any =>
  StyleSheet.create({
    notification: {
      marginBottom: 16,
      padding: 16,
      flexDirection: 'row',
      backgroundColor:
        (props.success && '#107F8C') ||
        (props.warning && '#FF9900') ||
        (props.danger && '#C11030') ||
        '#1F1F22',
      borderRadius: Platform.OS === 'ios' ? 0 : 6,
    },
    text: {
      fontWeight: '500',
      fontSize: 14,
      color: '#ffffff',
      lineHeight: 20,
      flexGrow: 1,
      textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    },
    containerLink: {
      justifyContent: 'center',
      textAlign: 'right',
    },
    textLink: {
      fontWeight: '500',
      fontSize: 14,
      color: '#ffffff',
    },
  });
