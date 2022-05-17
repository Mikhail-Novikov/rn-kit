import { StyleSheet } from 'react-native';
import {theme} from "../../constants/Colors";

export const styles = (type?: any) => StyleSheet.create({
    hint: {
        backgroundColor: theme.asphalt_05,
        padding: 16,
        margin: 10,
        borderRadius: 8,
    },
    describe: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '500',
        color: theme.asphalt_01,
    },
});
