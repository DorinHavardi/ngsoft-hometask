import React, {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {DownIcon} from '../svg/down.icon copy';

interface IDropdown {
  options: Array<string>;
}

export const Dropdown: FC<IDropdown> = ({options}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {t} = useTranslation();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={{width: '100%', alignItems: 'center', marginBottom: 15}}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => handleDropdown()}>
        <Text style={styles.text}>{t('profile.form.requestReason')}</Text>
        <DownIcon
          style={{
            transform: isOpen ? [{rotate: '180deg'}] : [{rotate: '0deg'}],
          }}
        />
      </TouchableOpacity>
      <ScrollView
        style={[styles.box, {display: isOpen ? 'flex' : 'none'}]}
        scrollEnabled={true}>
        {options.map((option, i) => (
          <TouchableOpacity key={i}>
            <Text style={[styles.text, styles.option]}>{option}</Text>
            <View style={styles.hr} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    width: '90%',
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.primary,
    borderWidth: 1,
    // marginBottom: 15,
    padding: 14,
    paddingStart: 21,
    fontFamily: Fonts.Rubik_Light,
    color: Colors.primary,
  },
  text: {
    color: Colors.primary,
    fontFamily: Fonts.Rubik_Light,
    fontWeight: '400',
  },
  box: {
    width: '90%',
    height: 100,
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 14,
    paddingStart: 21,
    fontFamily: Fonts.Rubik_Light,
    borderTopWidth: 0,
  },
  option: {
    marginBottom: 5,
  },
  hr: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity: 0.3,
    marginBottom: 5,
  },
});
