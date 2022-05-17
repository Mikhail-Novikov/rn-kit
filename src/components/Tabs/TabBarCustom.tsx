import * as React from 'react';
import { TabBarItem, SceneRendererProps, TabBar } from 'react-native-tab-view';
import { renderIndicator } from './IndicatorTab';
import { Label } from './Label';
import { State } from './models/Tab';
import { styles } from './styles';

const renderTabBarItem = (props: any): React.ReactElement => (
  <TabBarItem
    key={props.route.key}
    {...props}
    renderLabel={Label}
    pressOpacity={0.5}
  />
);

export const TabBarCustom = (
  props: SceneRendererProps & { navigationState: State },
): React.ReactElement => (
  <TabBar
    {...props}
    scrollEnabled
    indicatorStyle={styles.indicatorTabActive}
    style={styles.tabBar}
    tabStyle={styles.tabStyle}
    renderTabBarItem={renderTabBarItem}
    renderIndicator={renderIndicator}
  />
);
