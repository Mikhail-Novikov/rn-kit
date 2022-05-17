import { NavigationState } from 'react-native-tab-view';

export type Route = {
  key: string,
  title: string,
  badge?: string,
  count?: number,
  dot?: string,
};

export type State = NavigationState<Route>;
