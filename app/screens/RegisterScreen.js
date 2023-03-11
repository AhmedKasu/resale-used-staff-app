import { View, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import CustomForm from '../components/Forms/CustomForm';
import CustomFormField from '../components/Forms/CustomFormField';
import ErrorMessage from '../components/Forms/ErrorMessage';
import SubmitButton from '../components/Forms/SubmitButton';
import HideKeyboard from '../components/Forms/HideKeyboard';
import useAuth from '../hooks/useAuth';
import { validationSchema } from '../utilities/formHelpers';
import * as Yup from 'yup';
import colors from '../config/colors';

const registerValidationSchema = Yup.object().shape({
  name: validationSchema.firstNameLastName,
  email: validationSchema.email,
  password: validationSchema.password,
});

const RegisterScreen = () => {
  const { error, loading, register } = useAuth();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <HideKeyboard>
        <View style={styles.container}>
          <CustomForm
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={(values) => register(values)}
            validationSchema={registerValidationSchema}>
            <ErrorMessage visible={error ? true : false} error={error} />

            <CustomFormField
              name={'name'}
              icon={'person'}
              placeholder={'Name'}
            />
            <CustomFormField
              autoCorrect={false}
              autoCapitalize='none'
              icon={'email'}
              name={'email'}
              placeholder={'Email'}
            />
            <CustomFormField
              autoCorrect={false}
              autoCapitalize='none'
              icon='lock'
              secureTextEntry
              placeholder='Password'
              name='password'
              TextContentType='password'
            />

            <SubmitButton title='Register' />
          </CustomForm>
        </View>
      </HideKeyboard>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default RegisterScreen;
