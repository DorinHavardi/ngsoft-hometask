import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
  Text,
} from 'react-native';
import React, {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Fonts} from '../theme/fonts';
import {Colors} from '../theme/colors';
import {Header, Button, ProgressBar, TabBar} from '../components/common';
import stores from '../stores';
import {observer} from 'mobx-react';

const UserStore = stores.UserStore;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Details: FC<any> = observer(() => {
  const {t} = useTranslation();
  const {currentUser} = UserStore;

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          title={`${t('details.title')}`}
          subtitle={`${t('details.subtitle')}`}
        />
        <View style={styles.formBackground}>
          <View style={styles.form}>
            <ProgressBar phases={4} currentPhase={3} />
            <Text style={styles.text}>
              {currentUser?.firstname} {currentUser?.lastname}
            </Text>
            <Text style={styles.text}>{currentUser?.id}</Text>
            <Text style={styles.text}>
              {currentUser?.birthYear}, {currentUser?.requestReason}
            </Text>
            <Text style={styles.text}>{t('details.description')}</Text>
            <Button
              title={`${t('common.scanButton')}`}
              onPress={() => console.log('ok')}
            />
          </View>
        </View>
      </ScrollView>
      <TabBar />
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  formBackground: {
    height: windowHeight - windowHeight / 4,
    width: windowWidth,
    backgroundColor: Colors.greyBG,
  },
  form: {
    width: windowWidth - 30,
    height: windowHeight - windowHeight / 3,
    padding: 20,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: Platform.OS === 'ios' ? '-7%' : '-12%',
    shadowOffset: {width: -2, height: 4}, // FOR IOS
    elevation: 20, // FOR ANDROID
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: Colors.primary,
    fontFamily: Fonts.Rubik_Light,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 10,
  },
});
