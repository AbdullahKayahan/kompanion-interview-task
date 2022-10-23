import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const BACKGROUND_COLOR = '#FF664C';
const LABEL_COLOR = '#FFFFFF';

const Button = ({label, disabled, onPress, style, labelStyle}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        Styles.container,
        style,
        {
          opacity: disabled ? 0.3 : 1,
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
    borderRadius: 50,
    paddingVertical: 10,
    backgroundColor: BACKGROUND_COLOR,
  },
  label: {
    textAlign: 'center',
    color: LABEL_COLOR,
    fontWeight: '600',
  },
});
export default Button;