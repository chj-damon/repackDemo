import React from 'react';
import {View, Text} from 'react-native';

export default function TeacherSide({user}: any) {
  return (
    <View style={{flex: 1}}>
      <Text>Hello {user.name}!</Text>
      <Text>You are a teacher.</Text>
      {/* ...more teacher related code */}
    </View>
  );
}
