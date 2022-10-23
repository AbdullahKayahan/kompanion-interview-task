import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import {Colors, DesignTokens} from '../theme.js';

const Button = ({text, disabled, onPress, style, labelStyle}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        Styles.container,
        style,
        {
          opacity: disabled ? DesignTokens.disabled : 1,
        },
      ]}>
      <Text style={Styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    borderRadius: DesignTokens.radiuses.half,
    paddingVertical: DesignTokens.spaces.container,
    backgroundColor: Colors.primaryColor,
  },
  text: {
    textAlign: 'center',
    color: Colors.lightTextColor,
    fontWeight: DesignTokens.fontWeights.semiBold,
  },
});
export default Button;
