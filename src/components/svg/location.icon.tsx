import React, {FC} from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export const LocationIcon: FC = () => {
  return (
    <View>
      <Svg width="23" height="27" viewBox="0 0 23 27" fill="none">
        <Path
          d="M21.4545 11.2273C21.4545 19.1818 11.2273 26 11.2273 26C11.2273 26 1 19.1818 1 11.2273C1 8.51483 2.07751 5.91348 3.9955 3.9955C5.91348 2.07751 8.51483 1 11.2273 1C13.9397 1 16.5411 2.07751 18.459 3.9955C20.377 5.91348 21.4545 8.51483 21.4545 11.2273Z"
          stroke="#016BBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M11.2275 14.6365C13.1102 14.6365 14.6365 13.1102 14.6365 11.2275C14.6365 9.34466 13.1102 7.81836 11.2275 7.81836C9.34466 7.81836 7.81836 9.34466 7.81836 11.2275C7.81836 13.1102 9.34466 14.6365 11.2275 14.6365Z"
          stroke="#016BBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
