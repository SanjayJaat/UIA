import {TextInput, StyleSheet, View} from 'react-native';
import React from 'react';
import {WIDTH} from '../Utils/Const';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useState} from 'react';

export default function Input({
  placeholder,
  email,
  phone,
  style,
  value,
  setValue,
  ...rest
}) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  let keyboardType = 'default';
  // if (placeholder === 'Password') {
  //   keyboardType = 'numeric';
  // }

  // if (placeholder === 'Username') {
  //   keyboardType = 'email-adderes';
  // }

  return (
    <View style={[styles.container, style]}>
      <TextInput
        {...rest}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={!passwordVisible}
        keyboardType={keyboardType}
        style={[styles.input, style]}
      />
      {placeholder === 'Password' ? (
        <Icon
          name="eye-slash"
          size={25}
          color="grey"
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    width: '88%',
    height: 50,
    fontSize: 20,
    padding: 10,
    color: 'black',
    fontFamily: 'serif',
    backgroundColor: '#dfffe4',
    borderRadius: 10,
  },
  container: {
    width: WIDTH / 1.2,
    height: 50,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dfffe4',
    borderRadius: 10,
  },
});
