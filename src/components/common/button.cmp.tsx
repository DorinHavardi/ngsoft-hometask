import {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';

interface IButton {
  title: string;
  onPress: () => void;
}

export const Button: FC<IButton> = ({title, onPress}) => {
  return (
    <View style={{width: '100%', alignItems: 'center', position: "relative",bottom: 0}}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  title: {
    fontFamily: Fonts.Rubik_Light,
    fontWeight: '400',
    fontSize: 19,
    color: Colors.white,
  },
});
