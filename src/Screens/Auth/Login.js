import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import BaseView from '../../Component/BaseView';
import Text from '../../Component/Text';
import {blue, navy} from '../../Utils/Color';
import Input from '../../Component/Input';
import Loader from '../../Component/Loader';

const Login = ({navigation}) => {
  return (
    <BaseView style={{backgroundColor: 'black', alignItems: 'center'}}>
      <Loader />
      <Text h1 color={navy} mt={30} style={styles.welcome} numberOfLines={1}>
        ica ica ica ica ica ica ica ica ica ica ica
      </Text>

      <Input placeholder="Email"></Input>
      <Input style={styles.text} placeholder="Password"></Input>

      <TouchableOpacity style={styles.touch}>
        <Text style={styles.texts}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('Create')}
          style={styles.text2}>
          Create Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
        <Text style={styles.text1}>
          {' '}
          Forgot:{' '}
          <Text style={{textDecorationLine: 'underline', color: 'red'}}>
            Password
          </Text>
        </Text>
      </TouchableOpacity>
    </BaseView>
  );
};

const styles = StyleSheet.create({
  view: {
    //width:300,
    alignItems: 'center',
    //backgroundColor:'red',
    //height:300
  },
  welcome: {
    marginBottom: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    // marginTop: 30,
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
    fontSize: 29,
    marginTop: 30,
    textDecorationLine: 'underline',
    color: '#dd6677',
    fontStyle: 'italic',
    fontFamily: 'serif',
  },
});
export default Login;
