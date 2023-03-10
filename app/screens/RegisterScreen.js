import { View, StyleSheet } from 'react-native';

import CustomForm from '../components/Forms/CustomForm';
import CustomFormField from '../components/Forms/CustomFormField';
import SubmitButton from '../components/Forms/SubmitButton';
import HideKeyboard from '../components/Forms/HideKeyboard';
import { validationSchema } from '../utilities/formHelpers';
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
        <View></View>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});

export default RegisterScreen;
