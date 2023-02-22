import { useFormikContext } from 'formik';

import CustomTextInput from './CustomTextInput';
import ErrorMessage from './ErrorMessage';

const CustomFormField = ({ name, width, ...otherProps }) => {
  const { errors, handleChange, setFieldTouched, touched } = useFormikContext();

  return (
    <>
      <CustomTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default CustomFormField;