import React from 'react';
import {View, StyleSheet, Text} from 'react-native';


import {Colors, DesignTokens} from '../theme.js';

const Label = ({text = 'Label Text', style, textStyle}) => {
  return (
    <View style={[Styles.container, style]}>
      <Text style={[Styles.textStyle, textStyle]}>{text}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor:"red"
  },
  textStyle:{
    color:Colors.darkTextColor,
    fontSize:DesignTokens.fontSizes.text,
    fontWeight:DesignTokens.fontWeights.regular,
    backgroundColor:"blue"
  }
});

export default Label;
