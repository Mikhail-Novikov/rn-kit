import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 21,
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#D0D7DD',
  },
  tabStyle: {
    width: 'auto',
    padding: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'none',
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  active: {
    color: '#1F1F22',
  },
  inactive: {
    color: '#B2B8BF',
  },
  icon: {
    height: 26,
    width: 26,
  },
  indicatorTabActive: {
    backgroundColor: '#1F1F22',
  },
});
