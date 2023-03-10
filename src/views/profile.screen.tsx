import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {FC} from 'react';
import {BackIcon} from '../components/svg/back.icon';
import {useTranslation} from 'react-i18next';
import {Fonts} from '../theme/fonts';
import {Input} from '../components/common/input.cmp';
import {ProgressBar} from '../components/progress-bar/progressbar.cmp';
import {RadioButton} from '../components/common/radio-button.cmp';
import {Colors} from '../theme/colors';
import { Button } from '../components/common/button.cmp';

export const Profile: FC<any> = () => {
  const {t} = useTranslation();
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{t('profile.back')}</Text>
          <BackIcon />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={[styles.text, {fontWeight: 'bold', fontSize: 20}]}>
          {t('profile.title')}
        </Text>
        <Text style={[styles.text, {fontSize: 18}]}>
          {t('profile.subtitle')}
        </Text>
      </View>
      <View style={styles.formBackground}>
        <View style={styles.form}>
          <ProgressBar phases={4} currentPhase={2} />
          <Input
            onChangeText={() => console.log('onChangeText')}
            placeholder={`${t('profile.form.firstName')}`}
          />
          <RadioButton
            label={`${t('profile.form.newsletter')}`}
            checked={true}
          />
          <Button title={`${t('common.nextPhase')}`}/>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  formBackground: {
    height: '85%',
    width: '100%',
    backgroundColor: Colors.greyBG,
  },
  form: {
    height: '100%',
    width: '90%',
    padding: 20,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: '-3%',
    shadowOffset: {width: -2, height: 4}, // FOR IOS
    elevation: 20, // FOR ANDROID
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  backButton: {
    display: 'flex',
    width: 75,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  backButtonText: {
    fontFamily: Fonts.Rubik_Light,
    color: Colors.white,
  },
  logo: {
    width: 53,
    height: 66,
    top: '-8%',
    marginBottom: 5,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.Rubik_Light,
  },
});
