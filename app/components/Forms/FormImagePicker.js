import React from 'react';
import { useFormikContext, FieldArray } from 'formik';

import ImageInputList from '../Lists/ImageInputList';
import ErrorMessage from './ErrorMessage';

const FormImagePicker = ({ name }) => {
  const { errors, setFieldTouched, touched, values } = useFormikContext();

  const handleAdd = (push, imageObj) => {
    setFieldTouched(name);
    push(imageObj);
  };
  const handleDelete = (remove, uri) => {
    remove(uri);
    setFieldTouched(name);
  };

  return (
    <>
      <FieldArray name={name}>
        {({ push, remove }) => (
          <ImageInputList
            images={values[name]}
            onAddImage={(imageObj) => handleAdd(push, imageObj)}
            onRemoveImage={(uri) => handleDelete(remove, uri)}
          />
        )}
      </FieldArray>
      <ErrorMessage touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default FormImagePicker;
