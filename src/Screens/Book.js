import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default class Book extends React.Component {
  constructor() {
    super();
    this.state = {inputtext: ''};
  }
  render() {
    return (
      <View style={{marginTop: 100, alignSelf: 'center'}}>
        <Text style={{fontSize: 40, textAlign: 'center'}}>this is home</Text>
        <TextInput
          style={{width: 250}}
          onChangeText={text => this.setState({inputtext: text})}
          placeholder="Name"></TextInput>
        <Button
          title="button"
          onPress={() =>
            this.props.navigation.navigate('Home', {
              other: this.state.inputtext,
            })
          }
        />
      </View>
    );
  }
}
