import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

export default function First() {
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          marginTop: 100,
          color: 'red',
        }}>
        Ica
      </Text>
      <TextInput
        style={{
          width: 200,
          alignSelf: 'center',
          borderWidth: 1,
          borderColor: 'black',
          height: 40,
          padding: 7,
          marginTop: 50,
          fontSize: 18,
        }}
        placeholder="Enter your Number"
        keyboardType="numeric">
        +91
      </TextInput>

      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          alignSelf: 'center',
          marginTop: 50,
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 30,
          backgroundColor: 'blue',
        }}>
        <Text style={{fontSize: 29, textAlign: 'center', color: 'white'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}
