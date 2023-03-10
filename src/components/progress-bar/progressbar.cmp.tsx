import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../theme/colors';
import {Fonts} from '../../theme/fonts';
import {CheckIcon} from '../svg/check.icon';

interface IProgressBar {
  phases: number;
  currentPhase: number;
}

export const ProgressBar: FC<IProgressBar> = ({phases, currentPhase}) => {
  return (
    <View style={styles.container}>
      {Array(phases)
        .fill(0)
        .map((_, i) => {
          return (
            <React.Fragment key={i}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      currentPhase > i + 1
                        ? Colors.primary
                        : currentPhase === i + 1
                        ? Colors.secondary
                        : Colors.white,
                    borderColor:
                      currentPhase === i + 1
                        ? Colors.secondary
                        : Colors.primary,
                  },
                ]}>
                {currentPhase > i + 1 ? (
                  <CheckIcon />
                ) : (
                  <Text
                    style={[
                      styles.text,
                      {
                        color:
                          currentPhase === i + 1
                            ? Colors.white
                            : Colors.primary,
                      },
                    ]}>
                    {i + 1}
                  </Text>
                )}
              </View>
              {phases === i + 1 ? null : <View style={styles.line} />}
            </React.Fragment>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    direction: 'ltr',
    marginBottom: 20,
  },
  circle: {
    width: 37,
    height: 37,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: Fonts.Rubik_Light,
    fontSize: 19,
  },
  line: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    width: 45,
  },
});
