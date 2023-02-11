import { StyleSheet, View } from 'react-native';

import CustomForm from '../components/AppForm/CustomForm';
import CustomFormPicker from '../components/AppForm/CustomFormPicker';
import CustomFormField from '../components/AppForm/CustomFormField';
import HideKeyboard from '../components/AppForm/HideKeyboard';
import SafeAreaScreen from './SafeAreScreen';
import SubmitButton from '../components/AppForm/SubmitButton';
import * as Yup from 'yup';

const categories = [
  { label: 'Clothes', id: 1 },
  { label: 'Electronics', id: 2 },
  { label: 'Home Aplliancies', id: 3 },
  { label: 'Sports', id: 4 },
];

const listingValidation = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
});

const ListingPostScreen = () => {
  return (
    <HideKeyboard>
      <SafeAreaScreen>
        <CustomForm
          initialValues={{
            title: '',
            price: '',
            category: null,
            description: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={listingValidation}>
          <View style={styles.container}>
            <CustomFormField maxLength={255} name='title' placeholder='Title' />
            <CustomFormField
              keyboardType='numeric'
              maxLength={8}
              name='price'
              placeholder='Price'
            />
            <CustomFormPicker
              items={categories}
              icon='apps'
              name='category'
              placeholder='Category'
            />
            <CustomFormField
              maxLength={255}
              multiline
              name='description'
              numberOfLines={3}
              placeholder='Description'
            />
            <SubmitButton title='Submit' />
          </View>
        </CustomForm>
      </SafeAreaScreen>
    </HideKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
});
export default ListingPostScreen;
