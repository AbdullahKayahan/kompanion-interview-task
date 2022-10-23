import React, {useState, useEffect} from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors, DesignTokens} from '../theme.js';


const NavigationTextInput = ({value, style, onChangeText, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [_value, setValue] = useState(value);

  useEffect(() => {
    if (onChangeText) {
      onChangeText(_value);
    }
  }, [_value]);

  return (
    <View
      style={[
        Styles.container,
        style
      ]}>
      
      <NativeTextInput
        style={[Styles.textInput]}
        placeholder={"Bir Metin Girin"}
        {...props}
        value={_value}
        onChangeText={e => setValue(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {

  },
  textInput: {
    alignSelf: 'stretch',
    fontSize: DesignTokens.fontSizes.text,
  },
});

export default NavigationTextInput;
