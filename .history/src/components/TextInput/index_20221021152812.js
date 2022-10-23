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
        styles.container,
        style,
        {
          borderColor: isFocused ? Colors.primaryColor : Colors.disabledColor,
        },
      ]}>
      <Text
        style={[
          styles.title,
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
        {...props}
        style={{padding: 0}}
        value={_value}
        placeholder={DEFAULT_PLACEHOLDER}
        onChangeText={e => setValue(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DesignTokens.widths.medium,
    borderWidth: DesignTokens.borders.line,
    borderRadius: DesignTokens.radiuses.half,
    paddingHorizontal: DesignTokens.spaces.item,
    paddingVertical: DesignTokens.spaces.inline,
  },
  title: {
    //fontSize: 10,
    fontWeight: DesignTokens.fontWeights.bold,
    alignSelf: 'stretch',
    marginBottom: DesignTokens.spaces.inline,
  },
  textInput: {
    alignSelf: 'stretch',
    paddingHorizontal: 15,
  },
});

export default TextInput;
