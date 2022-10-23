import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


import {Colors, DesignTokens} from '../theme.js';

const Label = ({text = 'Label Text', style, textStyle}) => {
  return (
    
      <Text style={[Styles.textStyle, textStyle]}>{text}</Text>
   
  );
};

const Styles = StyleSheet.create({
  container: {
    flex:1,
   
    
    justifyContent: "center",
    backgroundColor:"red"
  },
  textStyle:{
    flexDirection:'row',
    flex:1,
    alignSelf: "center",
    color:Colors.darkTextColor,
    fontSize:DesignTokens.fontSizes.text,
    fontWeight:DesignTokens.fontWeights.regular,
    backgroundColor:"blue"
  }
});

export default Label;
