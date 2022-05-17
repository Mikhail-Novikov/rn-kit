import { StyleSheet } from 'react-native';
import { theme } from '../../constants/Colors';

export const stylesLink = StyleSheet.create({
    btn: {
        marginHorizontal: 10,
        marginVertical: 0,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderColor: 'transparent',
        borderRadius: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    text: {
        color: theme.malachite_02,
        fontSize: 17,
        fontWeight: '700',
        lineHeight: 24,
        textAlign: 'center',
    },
    disabled: {
        backgroundColor: theme.asphalt_04,
    },
    disabledText: {
        color: theme.asphalt_02,
    },
});
