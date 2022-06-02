import React, { memo } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export const CustomInput = memo((props) => {
  const { name, placeholder, control, rules, secureTextEntry } = props;
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
          />
        )}
        name={name}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    includeFontPadding: 10,
    marginVertical: 5,
  },
  input: {},
});
