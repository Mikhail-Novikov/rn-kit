import * as React from 'react';

import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "./Link.styles";

interface LinkProps {
    label: string,
}

export const Link = ({label}: LinkProps): React.ReactElement | null => {
    return (
        <TouchableOpacity style={styles.link} onPress={() => {/* do this */}} activeOpacity={0.4}>
            <View>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}
