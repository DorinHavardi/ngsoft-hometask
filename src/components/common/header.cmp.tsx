import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {BackIcon} from '../svg/back.icon';

interface IHeader {
  title: string;
  subtitle: string;
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Header: FC<IHeader> = ({title, subtitle}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>{t('profile.back')}</Text>
        <BackIcon />
      </TouchableOpacity>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={[styles.text, {fontFamily: Fonts.Rubik_Bold, fontSize: 20}]}>
        {title}
      </Text>
      <Text style={[styles.text, {fontWeight: '400', fontSize: 18}]}>
        {subtitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    flex: 3,
    width: windowWidth,
    height: windowHeight / 3,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  backButton: {
    width: 85,
    padding: 15,
    alignItems: 'center',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  backButtonText: {
    fontFamily: Fonts.Rubik_Light,
    fontSize: 18,
    color: Colors.white,
    fontWeight: '400',
  },
  logo: {
    width: 53,
    height: 66,
    top: '-10%',
    marginBottom: 2,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.Rubik_Light,
  },
});
