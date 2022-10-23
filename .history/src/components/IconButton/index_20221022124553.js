import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import {Colors, DesignTokens} from '../theme.js';

const IconButton = ({
  icon = 'home',
  size = 24,
  color = Colors.lightTextColor,
  disabled,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[Styles.container, style]}
      onPress={onPress}>
      <FontAwesome name={icon} size={size} color={color} />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: DesignTokens.heights.iconButton,
    width: DesignTokens.widths.iconButton,
    borderRadius: DesignTokens.radiuses.quarter,
    backgroundColor: Colors.primaryColor,
  },
});

export default IconButton;
