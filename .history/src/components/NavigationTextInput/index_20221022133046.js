import React, {useState, useEffect} from 'react';
import {TextInput as NativeTextInput, StyleSheet, View} from 'react-native';
import {Colors, DesignTokens} from '../theme.js';
import {IconButton} from "../index";

const NavigationTextInput = ({value, style, onChangeText, ...props}) => {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    if (onChangeText) {
      onChangeText(_value);
    }
  }, [_value]);

  return (
    <View style={[Styles.container, style]}>
      <NativeTextInput
        style={[Styles.textInput, {color: Colors.primaryColor}]}
        placeholder={'Bir Metin Girin'}
        {...props}
        value={_value}
        onChangeText={e => setValue(e)}
      />
      <IconButton icon="times"/>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: DesignTokens.widths.medium,
    borderBottomWidth: DesignTokens.borders.line,
    paddingHorizontal: DesignTokens.spaces.item,
    paddingVertical: DesignTokens.spaces.inline,
    marginBottom: DesignTokens.spaces.item,
    borderBottomColor: Colors.primaryColor,
  },
  textInput: {
    alignSelf: 'stretch',
    fontSize: DesignTokens.fontSizes.text,
  },
});

export default NavigationTextInput;
