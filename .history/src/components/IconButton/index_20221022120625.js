import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';

import {Colors, DesignTokens} from '../theme.js';

const IconButton = ({icon="home", size=24, color=Colors.primaryColor, disabled, onPress, style}) => {
    return (
        <TouchableOpacity 
        disabled={disabled}
        style={[Styles.container, style]} 
        onPress={onPress}>
        <MaterialIcon name={icon} size={size} color={color} />
      </TouchableOpacity>
    );
  };

  const Styles = StyleSheet.create({
   
    container : {
        alignItems:'center',
        justifyContent:'center',
        height:DesignTokens.heights.iconButton,
        width:DesignTokens.widths.iconButton,
        borderRadius:DesignTokens.radiuses.quarter,
        backgroundColor:Colors.primaryColor,
    }
});

export default IconButton;