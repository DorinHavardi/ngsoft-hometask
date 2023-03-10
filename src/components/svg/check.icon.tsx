import React, {FC} from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export const CheckIcon: FC = () => {
  return (
    <View>
      <Svg width="17" height="12" viewBox="0 0 17 12" fill="none">
        <Path
          d="M15.5455 1L5.54545 11L1 6.45455"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
