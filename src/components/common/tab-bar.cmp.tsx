import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {ContactIcon} from '../svg/contact.icon';
import {HomeIcon} from '../svg/home.icon';
import {LocationIcon} from '../svg/location.icon';
import {NotificationsIcon} from '../svg/notifications.icon';
import {SettingsIcon} from '../svg/settings.icon';

interface ITabBar {}

const windowWidth = Dimensions.get('window').width;

export const TabBar: FC<ITabBar> = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <LocationIcon />
        <Text style={styles.text}>{t('tabBar.nearMe')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <NotificationsIcon />
        <Text style={styles.text}>{t('tabBar.notifications')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={styles.mainButton}>
          <HomeIcon />
        </View>
        <Text style={styles.text}>{t('tabBar.homepage')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <ContactIcon />
        <Text style={styles.text}>{t('tabBar.contact')}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <SettingsIcon />
        <Text style={styles.text}>{t('tabBar.settings')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: windowWidth,
    height: 62,
    position: 'absolute',
    bottom: 0,
    padding: 15,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: Colors.white,
    shadowOffset: {width: 4, height: 1}, // FOR IOS
    elevation: 20, // FOR ANDROID
    shadowColor: Colors.black,
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  mainButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 9,
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginEnd: 15,
    height: 45,
  },
  text: {
    fontFamily: Fonts.Rubik_Light,
    fontWeight: '400',
    fontSize: 14,
    color: Colors.grey,
  },
});
