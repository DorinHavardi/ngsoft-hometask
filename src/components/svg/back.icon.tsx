import React, {FC} from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export const BackIcon: FC = () => {
  return (
    <View>
      <Svg width="6" height="10" viewBox="0 0 6 10" fill="none">
        <Path
          d="M5 9L1 5L5 1"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
