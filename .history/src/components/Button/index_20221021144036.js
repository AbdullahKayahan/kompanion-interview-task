import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

import {Colors,DesignTokens} from '../theme.js';

const Button = ({label, disabled, onPress, style, labelStyle}) => {
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
      ]}
    />
  );
};
const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
    borderRadius: DesignTokens.borders.full,
    paddingVertical: 10,
    backgroundColor: Colors.primaryColor,
  },
  label: {
    textAlign: 'center',
    color: Colors.lightTextColor,
    fontWeight: '600',
  },
});
export default Button;