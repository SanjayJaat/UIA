import {ActivityIndicator} from 'react-native';
import React from 'react';
import {WIDTH, HEIGHT} from '../Utils/Const';

export default function Loader() {
  return (
    <ActivityIndicator
      size="large"
      color="red"
      style={{width: WIDTH, height: HEIGHT}}
    />
  );
}
