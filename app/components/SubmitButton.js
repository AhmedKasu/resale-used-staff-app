//import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';

import CustomButton from './CustomButton';

const SubmitButton = ({ title, color }) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();
  return (
    <>
      {console.log(isValid)}
      <CustomButton
        disabled={!isValid | !dirty}
        title={title}
        color={color}
        onPress={handleSubmit}
      />
    </>
  );
};

export default SubmitButton;
