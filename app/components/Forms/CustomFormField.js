import { useFormikContext } from 'formik';

import CustomTextInput from './CustomTextInput';
import ErrorMessage from './ErrorMessage';

const CustomFormField = ({ name, width, ...otherProps }) => {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <>
      <CustomTextInput
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default CustomFormField;
