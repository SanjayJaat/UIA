import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import BaseView from '../Component/BaseView';
import Input from '../Component/Input';
import Text from '../Component/Text';
import Button from '../Component/Button';
import {WIDTH} from '../Utils/Const';
import {useState} from 'react';
import OtpInputs from 'react-native-otp-inputs';

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
        ICA
      </Text>
      <Input
        style={styles.input}
        placeholder="Enter your Number"
        value={number}
        setValue={setNumber}
        secureTextEntry={false}></Input>
      <OtpInputs
        style={{
          width: '82%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 5,
        }}
        inputStyles={{
          width: 45,

          fontSize: 28,
          textAlign: 'center',
          fontWeight: 'bold',

          height: 50,
          marginTop: 5,
        }}
        inputContainerStyles={{
          borderWidth: 3,
          borderColor: 'black',
          borderRadius: 10,
        }}
        handleChange={code => console.log(code)}
        numberOfInputs={4}
        autofillFromClipboard={true}
      />
      <Text style={styles.text1}>Resand OTP </Text>

      <Button lable={'Submit'} onPress={submit} style={styles.button} />
    </BaseView>
  );
}
const styles = StyleSheet.create({
  input: {
    alignItems: 'center',
    borderRadius: 40,
    paddingLeft: 10,
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
