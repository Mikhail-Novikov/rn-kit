import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCachedResources } from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { RootNavigator } from './RootNavigator';

export const App = (): React.ReactElement | null => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <RootNavigator colorScheme={colorScheme} />
      <StatusBar />
    </SafeAreaProvider>
  );
};
