import * as React from "react";
import {MainNavigator} from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { ConfigureStore } from "./store/configureStore";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import {Fonts} from './styles/Fonts';


const store = ConfigureStore();

function App() {

  let [fontsLoaded] = useFonts(Fonts);
    
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
            <MainNavigator />
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default (App);