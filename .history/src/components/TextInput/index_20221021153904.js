import React, {useState, useEffect} from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors, DesignTokens} from '../theme.js';

const DEFAULT_PLACEHOLDER = 'düzenlemek için dokunun';

const TextInput = ({value, title, style, onChangeText, ...props}) => {
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
        style,
        {
          borderColor: isFocused ? Colors.primaryColor : Colors.disabledColor,
        },
      ]}>
      <Text
        style={[
          Styles.title,
          {
            color: isFocused
              ? Colors.primaryColor
              : value && value.length
              ? Colors.primaryColor
              : Colors.darkTextColor,
          },
        ]}
        numberOfLines={1}>
        {title}
      </Text>
      <NativeTextInput
        style={[Styles.textInput]}
        {...props}
        value={_value}
        placeholder={DEFAULT_PLACEHOLDER}
        onChangeText={e => setValue(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: DesignTokens.widths.medium,
    borderWidth: DesignTokens.borders.line,
    borderRadius: DesignTokens.radiuses.half,
    paddingHorizontal: DesignTokens.spaces.item,
    paddingVertical: DesignTokens.spaces.inline,
  },
  title: {
    fontWeight: DesignTokens.fontWeights.bold,
    marginBottom: DesignTokens.spaces.inline,
    alignSelf: 'stretch',
    fontSize: DesignTokens.fontSizes.title,
  },
  textInput: {
    alignSelf: 'stretch',
    fontSize: DesignTokens.fontSizes.text,
  },
});

export default TextInput;
