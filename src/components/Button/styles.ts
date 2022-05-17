import { StyleSheet } from 'react-native';
import { StylesGeneral } from './general.styles';
import { StylesSecondary } from './secondary.styles';

interface Props {
  secondary?: boolean,
  sm?: boolean,
  isDisabled?: boolean,
}

export const styles = (props: Props): any =>
  StyleSheet.create(
    props.secondary
      ? StylesSecondary(props.sm, props.isDisabled)
      : StylesGeneral(props.sm, props.isDisabled),
  );
