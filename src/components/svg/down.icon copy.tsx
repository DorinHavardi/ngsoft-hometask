import React, {FC} from 'react';
import {View, ViewStyle} from 'react-native';
import {Path, Svg} from 'react-native-svg';

interface IDownIcon {
  style: ViewStyle | ViewStyle[];
}

export const DownIcon: FC<IDownIcon> = ({style}) => {
  return (
    <View style={style}>
      <Svg width="12" height="7" viewBox="0 0 12 7" fill="none">
        <Path
          d="M1 1L6 6L11 1"
          stroke="#016BBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
