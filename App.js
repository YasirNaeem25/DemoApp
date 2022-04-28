
import React from 'react';

import { Provider, useSelector, useDispatch } from 'react-redux';
import configureStore from './redux-store/store';

import { LogBox, View, StatusBar } from 'react-native';

import DrawerContent from './Components/DrawerContent';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs([
  "If you want to use Reanimated 2 then go through our installation steps https://docs.swmansion.com/react-native-reanimated/docs/installation",
]);
const store = configureStore();
export default function App() {

  return (
    <Provider store={store}>
      <DrawerContent />
    </Provider>
  );
}
