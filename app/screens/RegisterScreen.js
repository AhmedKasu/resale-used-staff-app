import { View, StyleSheet } from 'react-native';

import CustomForm from '../components/AppForm/CustomForm';
import CustomFormField from '../components/AppForm/CustomFormField';
import SubmitButton from '../components/AppForm/SubmitButton';
import HideKeyboard from '../components/AppForm/HideKeyboard';
import { validationSchema } from '../utils/formHelpers';
import * as Yup from 'yup';

const registerValidationSchema = Yup.object().shape({
  name: validationSchema.firstNameLastName,
  email: validationSchema.email,
  password: validationSchema.password,
});

const RegisterScreen = () => {
  return (
    <HideKeyboard>
      <View style={styles.container}>
        <CustomForm
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={registerValidationSchema}>
          <CustomFormField name={'name'} icon={'person'} placeholder={'Name'} />
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
            icon={'lock'}
            secureTextEntry
            placeholder={'Password'}
            name={'password'}
            TextContentType='password'
          />
          <SubmitButton title={'Register'} />
        </CustomForm>
      </View>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 30,
  },
});

export default RegisterScreen;
