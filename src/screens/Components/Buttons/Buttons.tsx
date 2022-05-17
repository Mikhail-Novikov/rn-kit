import * as React from 'react';
import { ScrollView } from 'react-native';

import { styles } from '../../../common/styles';

import { Button } from '../../../components/Button';
import { Divider } from '../../../components/Divider';
import { Link } from '../../../components/Link';

export const Buttons = (): React.ReactElement | null => (
  <ScrollView style={styles.container}>
    <Divider
      first
      text="General MD (Нажми, чтобы посмотреть состояние Active)"
    />
    <Button label="Button name" />
    <Divider text="General MD Disabled" />
    <Button label="Button name" isDisabled />
    <Divider text="General SM" />
    <Button label="Button name" sm />
    <Divider text="General SM Disabled" />
    <Button label="Button name" sm isDisabled />
    <Divider text="Secondary MD (Нажми, чтобы посмотреть состояние Active)" />
    <Button label="Button name" secondary />
    <Divider text="Secondary MD Disabled" />
    <Button label="Button name" secondary isDisabled />
    <Divider text="Secondary SM" />
    <Button label="Button name" secondary sm />
    <Divider text="Secondary SM Disabled" />
    <Button label="Button name" secondary sm isDisabled />
    <Divider text="Link SM (Нажми, чтобы посмотреть состояние Active. Состаявния Disabled для данного компонента не предусмотренно)" />
    <Link label="Button name" />
    <Divider last text="The end" />
  </ScrollView>
);
