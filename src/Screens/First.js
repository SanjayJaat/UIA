import {StyleSheet, TextInput} from 'react-native';
import React from 'react';
import BaseView from '../Component/BaseView';
import Input from '../Component/Input';
import Text from '../Component/Text';
import Button from '../Component/Button';
import {WIDTH} from '../Utils/Const';
import {useState} from 'react';
import OtpInputs from 'react-native-otp-inputs';
import auth from '@react-native-firebase/auth';

export default function First() {
  const [number, setNumber] = useState();
  const [confirm, setConfirm] = useState(null);
  const submit = async () => {
    if (number.trim() == '' || number == null) {
      alert('please enter number');
    } else {
      const confirmation = await auth().signInWithPhoneNumber('+91' + number);
      setConfirm(confirmation);
    }
  };
  async function confirmCode(code) {
    if (code.length == 6) {
      try {
        let res = await confirm.confirm(code);
        // console.log(res, '====');
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  }
  return (
    <BaseView style={styles.view}>
      <Text h1 fw={'900'} style={styles.text}>
        ICA
      </Text>
      <Input
        style={styles.input}
        placeholder="Enter your Number"
        value={number}
        keyboardType={'numeric'}
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
        handleChange={code => confirmCode(code)}
        numberOfInputs={6}
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
    //margin:111,
    // flex:1,
  },
});
