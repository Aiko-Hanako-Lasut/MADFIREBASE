/* eslint-disable prettier/prettier */

// InputText.tsx
import React, {ReactNode} from 'react';
import {StyleSheet, TextInput, View, Text, TextInputProps} from 'react-native';

// 1) Define a props interface that extends all of React Native's TextInputProps
// 2) Add in your own props (label, children, etc.) with proper types.
interface InputTextProps extends TextInputProps {
  label?: string;
  children?: ReactNode; // <-- this types your icon/button/etc.
  style?: TextInputProps['style'];
}

const InputText: React.FC<InputTextProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  children,
  style,
}) => (
  <View style={styles.container}>
    {label != null && <Text style={styles.label}>{label}</Text>}
    <View style={styles.inputWrapper}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
      {children != null && <View style={styles.iconContainer}>{children}</View>}
    </View>
  </View>
);

export default InputText;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#555',
    paddingVertical: 10,
  },
  iconContainer: {
    paddingLeft: 10,
  },
});
