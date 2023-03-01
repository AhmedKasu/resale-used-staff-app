import { useState, useEffect } from 'react';
import { StyleSheet, Modal, View } from 'react-native';

import categoriesApi from '../api/categories';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

import ActivityIndicator from '../components/ActivityIndicator';
import CategoriesPickerItemComponent from '../components/Forms/CategoriesPickerComponent';
import CustomForm from '../components/Forms/CustomForm';
import CustomFormPicker from '../components/Forms/CustomFormPicker';
import CustomFormField from '../components/Forms/CustomFormField';
import FormImagePicker from '../components/Forms/FormImagePicker';
import HideKeyboard from '../components/Forms/HideKeyboard';
import Reload from '../api/components/Reload';
import SafeAreaScreen from './SafeAreScreen';
import SubmitButton from '../components/Forms/SubmitButton';
import UploadScreen from './UploadScreen';
import * as Yup from 'yup';

const listingValidation = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required(),
        type: Yup.string().required(),
        uri: Yup.string().required(),
      })
    )
    .min(2, 'Please upload atleast two images')
    .max(6, 'Please upload maximum 6 images'),
});

const ListingPostScreen = () => {
  const [progress, setProgress] = useState(0);
  const [uploadVisibility, setUploadVisibility] = useState(false);

  const fetchCategories = useApi(categoriesApi.getCategories);
  const postListing = useApi(listingsApi.addListing);

  useEffect(() => {
    fetchCategories.request();
  }, []);

  const handleSubmit = (listing, { resetForm }) => {
    postListing.request(listing, (progress) => setProgress(progress));
    setUploadVisibility(true);
    resetForm();

    if (postListing.error) alert('could not upload the listing');
  };
  return (
    <>
      <HideKeyboard>
        <SafeAreaScreen>
          <ActivityIndicator visible={categoriesApi.loading} />
          <Reload
            visible={fetchCategories.error}
            onPress={() => fetchCategories.request()}
          />
          {!categoriesApi.error && (
            <CustomForm
              initialValues={{
                title: '',
                price: '',
                category: null,
                description: '',
                images: [],
              }}
              onSubmit={(listing, actions) => handleSubmit(listing, actions)}
              validationSchema={listingValidation}>
              <View style={styles.container}>
                <FormImagePicker name='images' />
                <CustomFormField
                  maxLength={255}
                  name='title'
                  placeholder='Title'
                  width='90%'
                />
                <CustomFormField
                  keyboardType='numeric'
                  maxLength={8}
                  currency='euro'
                  name='price'
                  placeholder='Price'
                  width='40%'
                />
                <CustomFormPicker
                  items={fetchCategories.data}
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
                <SubmitButton title='Submit' width='55%' />
              </View>
            </CustomForm>
          )}
        </SafeAreaScreen>
      </HideKeyboard>
      <UploadScreen
        progress={progress}
        onDone={() => {
          setUploadVisibility(false);
        }}
        visibility={uploadVisibility}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
  },
});
export default ListingPostScreen;
