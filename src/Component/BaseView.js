import { View, Text } from 'react-native'
import React from 'react'

export default function BaseView({children, style}) {
  return (
    <View style={[{flex:1, backgroundColor:"lightgrey",}, style]}>
    {children}
    </View>
  )
}