import React, {FC} from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export const NotificationsIcon: FC = () => {
  return (
    <View>
      <Svg width="25" height="27" viewBox="0 0 25 27" fill="none">
        <Path
          d="M19.7533 8.50133C19.7533 6.51185 18.963 4.60386 17.5562 3.19709C16.1495 1.79032 14.2415 1 12.252 1C10.2625 1 8.35453 1.79032 6.94775 3.19709C5.54098 4.60386 4.75066 6.51185 4.75066 8.50133C4.75066 17.2529 1 19.7533 1 19.7533H23.504C23.504 19.7533 19.7533 17.2529 19.7533 8.50133Z"
          stroke="#016BBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.4151 24.7539C14.1953 25.1328 13.8798 25.4473 13.5002 25.666C13.1207 25.8846 12.6903 25.9997 12.2522 25.9997C11.8142 25.9997 11.3838 25.8846 11.0042 25.666C10.6246 25.4473 10.3092 25.1328 10.0894 24.7539"
          stroke="#016BBB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    </View>
  );
};
