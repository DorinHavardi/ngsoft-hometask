import React, {useEffect} from 'react';
import {I18nManager, SafeAreaView, StyleSheet, View} from 'react-native';
import {Profile} from './src/views/profile.screen';
import './src/translates/i18n';
import {observer} from 'mobx-react';

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
    <SafeAreaView>
        <View>
          <Profile />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default observer(App);
