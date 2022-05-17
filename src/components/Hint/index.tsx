import * as React from 'react';
import {View, Text, Image} from "react-native";

import { styles } from "./Hint.styles";

interface HintProps {
    describe: string,
}

export const Hint = ({ describe }: HintProps): React.ReactElement | null => {
    return (
        <View style={styles().hint}>
            <Text style={styles().describe}>{describe}</Text>
        </View>
    )
}
