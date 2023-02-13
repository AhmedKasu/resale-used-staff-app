import { StyleSheet, View } from 'react-native';

import CategoriesPickerItemComponent from '../components/CategoriesPickerComponent';
import CustomForm from '../components/AppForm/CustomForm';
import CustomFormPicker from '../components/AppForm/CustomFormPicker';
import CustomFormField from '../components/AppForm/CustomFormField';
import HideKeyboard from '../components/AppForm/HideKeyboard';
import SafeAreaScreen from './SafeAreScreen';
import SubmitButton from '../components/AppForm/SubmitButton';
import * as Yup from 'yup';

const categories = [
  { label: 'Clothing', id: 1, icon: 'shoe-heel', color: 'primary' },
  { label: 'Cameras', id: 2, icon: 'camera', color: 'tomato' },
  { label: 'Cars', id: 3, icon: 'car', color: 'dodgerBlue' },
  { label: 'Sports', id: 4, icon: 'basketball', color: 'warning' },
  { label: 'Movies & Music', id: 4, icon: 'headphones', color: 'secondary' },
  { label: 'Books', id: 5, icon: 'book', color: 'springGreen' },
  { label: 'Other', id: 6, icon: 'devices', color: 'grey' },
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
            <CustomFormField
              maxLength={255}
              name='title'
              placeholder='Title'
              width='90%'
            />
            <CustomFormField
              keyboardType='numeric'
              maxLength={8}
              name='price'
              placeholder='Price'
              width='40%'
            />
            <CustomFormPicker
              items={categories}
              icon='apps'
              name='category'
              numberOfCulumns={3}
              placeholder='Category'
              PickerItemComponent={CategoriesPickerItemComponent}
              width='60%'
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
