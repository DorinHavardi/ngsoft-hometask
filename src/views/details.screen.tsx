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
import {Input} from '../components/common/input.cmp';
import {ProgressBar} from '../components/progress-bar/progressbar.cmp';
import {Colors} from '../theme/colors';
import {Button} from '../components/common/button.cmp';
import {Dropdown} from '../components/common/dropdown.cmp';
import {TabBar} from '../components/common/tab-bar.cmp';
import {Header} from '../components/common/header.cmp';
import {Formik} from 'formik';
import stores from '../stores';
import {observer} from 'mobx-react';

const UserStore = stores.UserStore;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Details: FC<any> = observer(() => {
  const {t} = useTranslation();
  const {setUserDetails, currentUser} = UserStore;

  const options = [
    `${t('profile.form.reasonOption1')}`,
    `${t('profile.form.reasonOption2')}`,
    `${t('profile.form.reasonOption3')}`,
    `${t('profile.form.reasonOption4')}`,
    `${t('profile.form.reasonOption5')}`,
  ];

  const setUser = (values: any) => {
    console.log(values);
    setUserDetails(values);
  };
  console.log(currentUser);

  return (
    <SafeAreaView>
      <ScrollView>
        <Header
          title={`${t('profile.title')}`}
          subtitle={`${t('profile.subtitle')}`}
        />
        {/* <View style={styles.formBackground}>
          <Formik
            initialValues={{firstname: ''}}
            onSubmit={values => setUser(values)}>
            {({handleChange, handleSubmit, handleBlur, values}) => (
              <View style={styles.form}>
                <ProgressBar phases={4} currentPhase={2} />
                <Input
                  placeholder={`${t('profile.form.firstName')}`}
                  onChangeText={handleChange('firstname')}
                  onBlur={handleBlur('firstname')}
                  value={values.firstname}
                  defaultValue={currentUser?.firstName}
                  // value={}
                />
                <Dropdown options={options} />
                <Button
                  title={`${t('common.nextPhase')}`}
                  onPress={handleSubmit}
                />
              </View>
            )}
          </Formik>
        </View> */}
      </ScrollView>
      <TabBar />
    </SafeAreaView>
  );
});
const styles = StyleSheet.create({
  formBackground: {
    height: windowHeight - windowHeight / 3,
    width: windowWidth,
    backgroundColor: Colors.greyBG,
  },
  form: {
    width: windowWidth - 30,
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
    color: Colors.white,
    fontFamily: Fonts.Rubik_Light,
  },
});
