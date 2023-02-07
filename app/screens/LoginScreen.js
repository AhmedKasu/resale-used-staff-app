import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppLogo from '../components/AppLogo';
import CustomFormField from '../components/AppForm/CustomFormField';
import CustomForm from '../components/AppForm/CustomForm';
import HideKeyboard from '../components/AppForm/HideKeyboard';
import SubmitButton from '../components/AppForm/SubmitButton';
import { validationSchema } from '../utils/formHelpers';
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  email: validationSchema.email,
  password: validationSchema.email,
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
