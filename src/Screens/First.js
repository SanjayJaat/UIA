import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import BaseView from '../Component/BaseView';
import Input from '../Component/Input';
import Text from '../Component/Text';
import Button from '../Component/Button';
import {WIDTH} from '../Utils/Const';
import {useState} from 'react';

export default function First() {
  const [number, setNumber] = useState('');
  const submit = () => {
    if (number.trim() == '' || number == null) {
      alert('please enter number');
    }
  };

  return (
    <BaseView style={styles.view}>
      <Text h1 fw={'900'} style={styles.text}>
        Ica
      </Text>
      {/* <Input style={styles.input} placeholder="Enter your Number">
        +91
      </Input> */}
      <TextInput
        onChangeText={text => setNumber(text)}
        placeholder="enter your number"
        keyboardType="numeric"
        maxLength={10}
        style={{
          backgroundColor: 'white',
          width: WIDTH / 1.2,
          borderRadius: 30,
          fontSize: 20,
          paddingLeft: 15,
        }}></TextInput>
      <Button lable={'Submit'} onPress={submit} style={styles.button} />
    </BaseView>
  );
}
const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
  },
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 60,
    borderRadius: 50,
    color: 'white',
    fontWeight: '300',
  },
  text: {
    marginBottom: 80,
  },
});
