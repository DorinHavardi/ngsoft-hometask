import React, {useEffect} from 'react';
import {I18nManager, SafeAreaView, StyleSheet, View} from 'react-native';
import {Profile} from './src/views/profile.screen';
import './src/translates/i18n';
import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Details} from './src/views/details.screen';

const Stack = createNativeStackNavigator();

const App = () => {
  const initializeLang = async () => {
    const isRTL = true;

    I18nManager.forceRTL(isRTL);
    I18nManager.allowRTL(isRTL);
    I18nManager.swapLeftAndRightInRTL(true);
  };

  useEffect(() => {
    initializeLang();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="UserDetails"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default observer(App);
