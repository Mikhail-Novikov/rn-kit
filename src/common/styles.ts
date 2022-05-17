import { StyleSheet } from 'react-native';
import { theme } from '../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // TODO Необходимо узнать у дизайнеров о цвете общей подложки на экранах приложения
    backgroundColor: theme.white,
  },
  txtGray: {
    color: theme.darkGray,
  },
  marginTopNone: {
    marginTop: 0,
  },
  marginBottomNone: {
    marginBottom: 0,
  },
  marginRight16: {
    marginRight: 16,
  },
});
