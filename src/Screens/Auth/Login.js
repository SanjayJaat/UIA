import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import BaseView from '../../Component/BaseView';
import Text from '../../Component/Text';
import {lightgrey, navy, red} from '../../Utils/Color';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import {sizes} from '../../Utils/Typograpy';
import Loader from '../../Component/Loader';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const login = () => {
    if (username == '' && password == '') {
      alert('please enter Data');
    } else if (username.trim() == '' || username == 'null') {
      alert('enter your email');
    } else if (password.trim() == '' || password == 'null') {
      alert('enter your password');
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <BaseView style={styles.view}>
      <Loader visible={loading} />
      <Text
        color={red}
        mt={100}
        h1
        fw={'900'}
        style={styles.welcome}
        numberOfLines={1}>
        ICA
      </Text>

      <Input
        value={username}
        setValue={setUsername}
        placeholder="Username"></Input>
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Password"
        secureTextEntry={true}></Input>
      <Button onPress={login} lable={'Login'} />

      <Button
        lable={'Create Account'}
        textStyle={styles.text2}
        style={{backgroundColor: lightgrey}}
        onPress={() => navigation.navigate('First')}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Book')}>
        <Text style={styles.text1}>
          Forgot:
          <Text style={{textDecorationLine: 'underline', color: red + 99}}>
            Password
          </Text>
        </Text>
      </TouchableOpacity>
    </BaseView>
  );
};

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
  view: {
    alignItems: 'center',
    // width:300,
    // height:300
  },
  welcome: {
    marginBottom: 60,
    fontStyle: 'italic',
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'serif',
  },
  touch: {
    borderWidth: 0.5,
    width: 303,
    height: 50,
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
  text1: {
    fontSize: 20,
    fontFamily: 'serif',

    marginTop: 50,
    color: 'white',
  },
  image: {
    flex: 1,
  },
  text2: {
    fontSize: sizes.h2,
    textDecorationLine: 'underline',
    color: '#dd6677',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
});
export default Login;
