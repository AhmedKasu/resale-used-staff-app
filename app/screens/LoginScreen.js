import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppLogo from '../components/AppLogo';
import CustomFormField from '../components/Forms/CustomFormField';
import CustomForm from '../components/Forms/CustomForm';
import ErrorMessage from '../components/Forms/ErrorMessage';
import HideKeyboard from '../components/Forms/HideKeyboard';
import SubmitButton from '../components/Forms/SubmitButton';

import useAuth from '../hooks/useAuth';
import { validationSchema } from '../utilities/formHelpers';
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
  email: validationSchema.email,
  password: validationSchema.password,
});

const LoginScreen = () => {
  const { login, error } = useAuth();

  return (
    <HideKeyboard>
      <View style={styles.container}>
        <View style={styles.appLogoContainer}>
          <AppLogo />
        </View>
        <CustomForm
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => login(values)}
          validationSchema={LogInSchema}>
          <View style={styles.inputsContainer}>
            <ErrorMessage visible={error ? true : false} error={error} />
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
    backgroundColor: 'white',
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
