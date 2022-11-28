import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Text from './Text';
import {WIDTH} from '../Utils/Const';
import {white} from '../Utils/Color';

export default function Button({style, textstyle, lable, onPress, ...rest}) {
  return (
    <TouchableOpacity {...rest} onPress={onPress} style={[styles.touch, style]}>
      <Text lable={lable} color={white } style={[styles.texts, textstyle]}>
        Login
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  touch: {
    borderWidth: 0.5,
    height: 50,
    width: WIDTH / 1.2,
    backgroundColor: '#ba5555',
    borderStyle: 'solid',
    marginTop: 50,
  },

  texts: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
});
