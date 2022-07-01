import React, { memo } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export const CustomInput = memo((props) => {
  const { name, placeholder, control, rules, secureTextEntry } = props;
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              placeholderTextColor="#B6B6B7"
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
            />
          </View>
          {error && <Text style={{ color: '#F13C31', alignSelf: 'stretch' }}>{error.message || 'Error'}</Text>}
        </>
      )}
      name={name}
    />
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 13,

    includeFontPadding: 10,
    marginVertical: 10,
  },
  input: {
    padding: 10,
  },

  place_holder: {
    color: '#B6B6B7',
  },
});
