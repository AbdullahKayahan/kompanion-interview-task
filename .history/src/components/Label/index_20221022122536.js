import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


import {Colors, DesignTokens} from '../theme.js';

const Label = ({text = 'Label Text', style}) => {
  return (
    
      <Text style={[Styles.textStyle, style]}>{text}</Text>
   
  );
};

const Styles = StyleSheet.create({

  textStyle:{
    flex:1,
    alignSelf: "center",
    color:Colors.darkTextColor,
    fontSize:DesignTokens.fontSizes.text,
    fontWeight:DesignTokens.fontWeights.regular,
    backgroundColor:"blue"
  }
});

export default Label;
