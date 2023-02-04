import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppLogo from '../components/AppLogo';
import CustomFormField from '../components/CustomFormField';
import CustomForm from '../components/CustomForm';
import HideKeyboard from '../components/HideKeyboard';
import SubmitButton from '../components/SubmitButton';
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Field is required'),
  password: Yup.string()
    .required('Field is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
});

const LoginScreen = () => {
  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.appLogoContainer}>
          <AppLogo />
        </View>
        <CustomForm
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => console.log(values)}
          validationSchema={LogInSchema}>
          <View style={styles.inputsContainer}>
            <CustomFormField
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              name='email'
              placeholder='Email'
            />
            <CustomFormField
              autoCorrect={false}
              autoCapitalize='none'
              icon='lock'
              secureTextEntry
              name='password'
              placeholder='Password'
              TextContentType='password'
            />
            <View style={styles.submitButton}>
              <SubmitButton title={'Login'} />
            </View>
          </View>
        </CustomForm>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appLogoContainer: {
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 20,
  },

  inputsContainer: {
    padding: 20,
  },
  submitButton: {
    marginVertical: 30,
  },
});

export default LoginScreen;
