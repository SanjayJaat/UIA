import {ActivityIndicator} from 'react-native';
import React from 'react';
import {WIDTH, HEIGHT} from '../Utils/Const';
import {black} from '../Utils/Color';

export default function Loader({loading}) {
  return loading ? (
    <ActivityIndicator
      size="large"
      color="red"
      style={{
        width: WIDTH,
        height: HEIGHT,
        position: 'absolute',
        backgroundColor: black + 90,
        zIndex: 1,
      }}
    />
  ) : null;
}
