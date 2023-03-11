import {DefaultTFuncReturn} from 'i18next';
import {observer} from 'mobx-react';
import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {Input} from './input.cmp';

interface IDropdown {
  options: Array<string>;
  value?: string | undefined;
  defaultValue?: string | number | DefaultTFuncReturn;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  selectedOption: string | null;
  setSelectedOption: Dispatch<SetStateAction<string | null>>;
  placeholder: string;
  onSelect: (value: string | null) => void;
}

export const Dropdown: FC<IDropdown> = observer(
  ({
    options,
    placeholder,
    onChangeText,
    selectedOption,
    setSelectedOption,
    onSelect,
  }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {}, [selectedOption]);

    const handleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const handleSelect = (value: string) => {
      setSelectedOption(value);
      setIsOpen(false);
      onSelect(selectedOption);
      return selectedOption;
    };
    return (
      <>
        <TouchableOpacity onPress={() => handleDropdown()}>
          <Input
            isDropdown={true}
            onChangeText={onChangeText}
            value={selectedOption}
            placeholder={placeholder}
            isOpen={isOpen}
          />
        </TouchableOpacity>
        <ScrollView
          style={[styles.box, {display: isOpen ? 'flex' : 'none'}]}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}>
          {options.map((option, i) => (
            <TouchableOpacity key={i} onPress={() => handleSelect(option)}>
              <Text style={[styles.text, styles.option]}>{option}</Text>
              <View style={styles.hr} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </>
    );
  },
);

const styles = StyleSheet.create({
  dropdown: {
    width: '90%',
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.primary,
    borderWidth: 1,
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
    paddingStart: 15,
    paddingBottom: 25,
    fontFamily: Fonts.Rubik_Light,
    borderTopWidth: 0,
    marginBottom: 15,
    top: -15,
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
