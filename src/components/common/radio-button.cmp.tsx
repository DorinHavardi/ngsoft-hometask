import {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

interface IRadioButton {
  label: string;
  checked: boolean;
}

export const RadioButton: FC<IRadioButton> = ({label, checked}) => {
  return (
    <View style={styles.container}>
      <View style={styles.stroke}>
        {checked ? <View style={styles.fill} /> : null}
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  stroke: {
    height: 15,
    width: 15,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 7,
  },
  fill: {
    height: 15 / 2,
    width: 15 / 2,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  label: {
    color: Colors.primary,
    fontFamily: Fonts.Rubik_Light,
    fontWeight: '400',
  },
});
