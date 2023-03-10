import React, {FC} from 'react';
import {View} from 'react-native';
import {Path, Svg} from 'react-native-svg';

export const HomeIcon: FC = () => {
  return (
    <View>
      <Svg width="25" height="25" viewBox="0 0 25 25" fill="none">
        <Path
          d="M1.24972 13.7501H2.49971V22.5C2.49971 23.8788 3.62095 25 4.99968 25H19.9995C21.3783 25 22.4995 23.8788 22.4995 22.5V13.7501H23.7495C23.9967 13.7501 24.2383 13.6767 24.4438 13.5394C24.6493 13.402 24.8095 13.2068 24.9041 12.9784C24.9987 12.7501 25.0234 12.4988 24.9752 12.2563C24.927 12.0139 24.808 11.7912 24.6332 11.6164L13.3833 0.366498C13.2674 0.250317 13.1296 0.158145 12.978 0.0952576C12.8263 0.0323698 12.6638 0 12.4996 0C12.3354 0 12.1729 0.0323698 12.0212 0.0952576C11.8696 0.158145 11.7319 0.250317 11.6159 0.366498L0.36598 11.6164C0.19122 11.7912 0.0722131 12.0139 0.0240041 12.2563C-0.0242049 12.4988 0.000548683 12.7501 0.0951353 12.9784C0.189722 13.2068 0.349895 13.402 0.555405 13.5394C0.760915 13.6767 1.00254 13.7501 1.24972 13.7501ZM9.99963 22.5V16.2501H14.9996V22.5H9.99963ZM12.4996 3.01772L19.9995 10.5176V16.2501L20.0008 22.5H17.4996V16.2501C17.4996 14.8714 16.3783 13.7501 14.9996 13.7501H9.99963C8.6209 13.7501 7.49966 14.8714 7.49966 16.2501V22.5H4.99968V10.5176L12.4996 3.01772Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};
