import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootNavigator from './src/navigation/rootNavigator';
import store, {persistor} from './src/store';
import colors from './src/utils/colors';
import styles from './src/utils/styles';
import paperTheme from './src/utils/theme';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <PaperProvider theme={paperTheme()}>
            <SafeAreaProvider style={styles.safeAreaProvider}>
              <StatusBar
                barStyle={'light-content'}
                backgroundColor={colors.main.background}
              />
              <RootNavigator />
            </SafeAreaProvider>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
