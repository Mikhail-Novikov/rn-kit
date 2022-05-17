import { StyleSheet } from 'react-native';
import {theme} from "../../constants/Colors";

export const styles = StyleSheet.create({
    link: {
        // TODO Неясны отступы
        marginHorizontal: 10,
        marginVertical: 4,
        alignItems: 'center',
    },
    text: {
        fontWeight: '500',
        fontSize: 15,
        color: theme.malachite_02,
    },
});
