import { StyleSheet } from 'react-native';

export const stylesDot = (color: string
    | undefined): any => StyleSheet.create({
    dot: {
        backgroundColor:
          (color === 'success' && '#107F8C') ||
          (color === 'warning' && '#FF9900') ||
          (color === 'danger' && '#C11030') ||
          '#E4E8EB',
        borderRadius: 8,
        display: 'flex',
        height: 8,
        width: 8,
        marginLeft: 8,
        marginBottom: 4,
    },
});
