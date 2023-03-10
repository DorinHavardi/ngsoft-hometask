import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Dimensions,
  Platform,
} from 'react-native';
import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Fonts} from '../theme/fonts';
import {Colors} from '../theme/colors';
import {Formik} from 'formik';
import stores from '../stores';
import {observer} from 'mobx-react';
import {
  Header,
  Button,
  Input,
  Dropdown,
  ProgressBar,
  TabBar,
} from '../components/common';

const UserStore = stores.UserStore;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Profile: FC<any> = observer(({navigation}) => {
  const {t} = useTranslation();
  const {setUserDetails, currentUser} = UserStore;

  const options = [
    `${t('profile.form.reasonOption1')}`,
    `${t('profile.form.reasonOption2')}`,
    `${t('profile.form.reasonOption3')}`,
    `${t('profile.form.reasonOption4')}`,
    `${t('profile.form.reasonOption5')}`,
  ];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const setUser = (values: any) => {
    setUserDetails(values);
    navigation.navigate('UserDetails');
  };

  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: Colors.greyBG}}
        showsVerticalScrollIndicator={false}>
        <Header
          title={`${t('profile.title')}`}
          subtitle={`${t('profile.subtitle')}`}
        />
        <View style={styles.formBackground}>
          <Formik
            initialValues={{
              firstname: currentUser?.firstname,
              lastname: currentUser?.lastname,
              id: currentUser?.id,
              birthYear: currentUser?.birthYear,
              requestReason: currentUser?.requestReason,
            }}
            onSubmit={values => setUser(values)}>
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              setFieldValue,
            }) => (
              <View style={styles.form}>
                <ProgressBar phases={4} currentPhase={1} />
                <Input
                  placeholder={`${t('profile.form.firstname')}`}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                />
                <Input
                  placeholder={`${t('profile.form.lastname')}`}
                  onChangeText={handleChange('lastname')}
                  onBlur={handleBlur('lastname')}
                  value={values.lastname}
                />
                <Input
                  placeholder={`${t('profile.form.id')}`}
                  onChangeText={handleChange('id')}
                  onBlur={handleBlur('id')}
                  value={values.id}
                  keyboardType={'numeric'}
                  maxLength={9}
                />
                <Input
                  placeholder={`${t('profile.form.birthYear')}`}
                  onChangeText={handleChange('birthYear')}
                  onBlur={handleBlur('birthYear')}
                  value={values.birthYear?.toString()}
                  keyboardType={'numeric'}
                  maxLength={4}
                />
                <Dropdown
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  options={options}
                  value={values.requestReason}
                  placeholder={t('profile.form.requestReason')}
                  onSelect={selectedOption => {
                    setFieldValue('requestReason', selectedOption);
                  }}
                  onChangeText={handleChange('requestReason')}
                />
                <Button
                  title={`${t('common.nextPhase')}`}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
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
    backgroundColor: Colors.white,
    width: windowWidth - 30,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    top: Platform.OS === 'ios' ? '-7%' : '-12%',
    shadowOffset: {width: -2, height: 4}, // FOR IOS
    elevation: 20, // FOR ANDROID
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.Rubik_Light,
  },
});
