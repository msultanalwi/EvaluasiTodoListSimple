import React from 'react';
import {View, Text} from 'react-native';

const HeaderCustom = () => {
  return (
    <View
      style={{
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
        }}>
        To Do List"
      </Text>
    </View>
  );
};

export default HeaderCustom;
