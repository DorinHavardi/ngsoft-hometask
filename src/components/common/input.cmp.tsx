import {ChangeEvent, FC} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

interface IInput {
  placeholder?: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  onBlur: (e: any) => void;
  value: string;
}

export const Input: FC<IInput> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
}) => {
  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: 46,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginBottom: 15,
    padding: 14,
    paddingStart: 21,
    fontFamily: Fonts.Rubik_Light,
    color: Colors.primary,
  },
});
