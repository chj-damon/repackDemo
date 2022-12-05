import React from 'react';
import {View, Text} from 'react-native';

export default function StudentSide({user}: any) {
  return (
    <View style={{flex: 1}}>
      <Text>Hello {user.name}!</Text>
      <Text>You are a student.</Text>
      {/* ...more student related code */}
    </View>
  );
}
