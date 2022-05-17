import * as React from 'react';
import { Animated } from 'react-native';
import { SceneRendererProps } from 'react-native-tab-view';
import { stylesIndicator } from './indicator.styles';
import { State } from './models/Tab';

export const renderIndicator = (
  props: SceneRendererProps & {
    navigationState: State,
    getTabWidth: (i: number) => number,
  },
): React.ReactNode => {
  const { position, navigationState, getTabWidth } = props;

  const inputRange = navigationState.routes.map((_: any, i: any) => i);

  // коррекция ширины линии индиктора кореллирует с отступами вокруг таба.
  // линия индикатора не выходит за рамки текста таба
  const offset = 12;

  const translateX = position.interpolate({
    inputRange,
    outputRange: inputRange
      .reduce<number[]>((acc: number[], _: any, i: number) => {
        if (i === 0) return [0];
        return [...acc, acc[i - 1] + getTabWidth(i - 1)];
      }, [])
      .map((x, n) => x + getTabWidth(n) / 2),
  });

  const widthIndicatorTab = position.interpolate({
    inputRange,
    outputRange: inputRange.map((i: number) => getTabWidth(i) - offset * 2),
  });

  return (
    <Animated.View
      style={[
        stylesIndicator.containerInd,
        { transform: [{ translateX }] as any },
      ]}
    >
      <Animated.View
        style={[
          stylesIndicator.indicator,
          { transform: [{ scaleX: widthIndicatorTab }] as any },
        ]}
      />
    </Animated.View>
  );
};
