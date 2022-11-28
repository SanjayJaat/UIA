import {TextInput, StyleSheet} from 'react-native';
import React from 'react';

export default function Input(props) {
  const {placeholder, style} = props;
  return <TextInput placeholder={placeholder} style={[styles.text, style]} />;
}

const styles = StyleSheet.create({
  text: {
    width: 300,
    height: 50,
    borderColor: 'rgbe(0,0,0,3)',
    margin: 10,
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 10,
    color: 'black',
    fontFamily: 'serif',
    backgroundColor: '#dfffe4',
    borderRadius: 10,
  },
});
