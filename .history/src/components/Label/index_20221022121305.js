import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

import {Colors, DesignTokens} from '../theme.js';

const Label = ({text = 'home', style, textStyle}) => {
  return (
    <View style={[Styles.container, style]}>
      <Text style={[Styles.container, textStyle]}>{text}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: DesignTokens.radiuses.quarter,
    backgroundColor: Colors.primaryColor,
  },
});

export default Label;
