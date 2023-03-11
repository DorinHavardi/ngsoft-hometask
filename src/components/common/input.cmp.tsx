import {DefaultTFuncReturn} from 'i18next';
import {ChangeEvent, FC} from 'react';
import {KeyboardType, StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {DownIcon} from '../svg/down.icon';

interface IInput {
  placeholder?: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  value: string | undefined | DefaultTFuncReturn;
  maxLength?: number;
  isDropdown?: boolean;
  isOpen?: boolean;
  keyboardType?: KeyboardType;
}

export const Input: FC<IInput> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  maxLength,
  isDropdown,
  isOpen,
  keyboardType,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, {marginStart: isDropdown ? 12 : undefined}]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value?.toString()}
        maxLength={maxLength}
        placeholderTextColor={isDropdown ? Colors.primary : Colors.grey}
        editable={!isDropdown}
        pointerEvents={isDropdown ? 'none' : undefined}
        keyboardType={keyboardType}
      />
      <>
        {isDropdown ? (
          <DownIcon
            style={[
              styles.icon,
              {transform: isOpen ? [{rotate: '180deg'}] : [{rotate: '0deg'}]},
            ]}
          />
        ) : null}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 46,
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 14,
    paddingStart: 21,
    fontFamily: Fonts.Rubik_Light,
    color: Colors.primary,
  },
  icon: {
    left: -28,
    padding: 0,
    margin: 0,
  },
});
