import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import BaseView from '../../Component/BaseView';
import Text from '../../Component/Text';
import {white} from '../../Utils/Color';
import Input from '../../Component/Input';
import Button from '../../Component/Button';
import Loader from '../../Component/Loader';
import CreatUser from '../../Network/Auth';

const Create = () => {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirm, setComfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (
      name.trim() === '' ||
      (name == 'nul' && email.trim() == '') ||
      (email == 'null' && password.trim() == '') ||
      (password == 'null' && comfirm.trim() == '') ||
      comfirm == 'null'
    ) {
      alert('enter your data');
    } else {
      setLoading(true);
      CreatUser(email, password)
        .then(res => {
          console.log(res, 'usercreate');
          alert(res);
          setLoading(false);
        })
        .catch(error => {
          console.log(error, 'createusererror');
          setLoading(false);
        });
      // navigation.replace('Login', {name});

      // setLoading(true);
      // setTimeout(() => {
      //   setLoading(false);
      //   //
      // }, 3000);
    }
  };

  return (
    <BaseView style={styles.BaseView}>
      <Loader visible={loading} />
      <Text h1 mt={50} ta={'center'} color={white}>
        Create Account
      </Text>

      <Input setValue={setname} placeholder={'Enter your name'} />
      <Input setValue={setEmail} placeholder={'Enter your email'} />
      <Input setValue={setPassword} placeholder={'Password'} />
      <Input setValue={setComfirm} placeholder={'Confirm password'} />

      <Button lable={'submit'} onPress={submit} />
    </BaseView>
  );
};

const styles = StyleSheet.create({
  BaseView: {
    alignItems: 'center',
  },
});

export default Create;
