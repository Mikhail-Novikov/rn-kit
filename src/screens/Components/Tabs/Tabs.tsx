import * as React from 'react';
import { View, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { TabBarCustom } from '../../../components/Tabs/TabBarCustom';
import { styles } from '../../../components/Tabs/styles';

const TabContent1 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-1</Text></View>
);

const TabContent2 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-2</Text></View>
);

const TabContent3 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-3</Text></View>
);

const TabContent4 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-4</Text></View>
);

const TabContent5 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-5</Text></View>
);

const TabContent6 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent6</Text></View>
);

const TabContent7 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-7</Text></View>
);

const TabContent8 = (): React.ReactElement => (
  <View style={[styles.container, { backgroundColor: 'transparent' }]}><Text>TabContent-8</Text></View>
);

const renderScene = SceneMap({
  1: TabContent1,
  2: TabContent2,
  3: TabContent3,
  4: TabContent4,
  5: TabContent5,
  6: TabContent6,
  7: TabContent7,
  8: TabContent8,
});

export const Tabs = (): React.ReactElement | null => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: '1', title: 'TabName-1' },
    { key: '2', title: 'TabName-2', badge: 'warning', count: 12 },
    { key: '3', title: 'TabName-3' },
    { key: '4', title: 'TabName-4', badge: 'default', count: 12 },
    { key: '5', title: 'TabName-5' },
    { key: '6', title: 'TabName-6', dot: 'warning' },
    { key: '7', title: 'TabName-7' },
    { key: '8', title: 'TabName-8' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      renderTabBar={TabBarCustom}
      onIndexChange={setIndex}
    />
  );
};
