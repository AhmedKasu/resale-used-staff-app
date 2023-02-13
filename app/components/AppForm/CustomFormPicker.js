import { useFormikContext } from 'formik';

import CustomPicker from '../CustomPicker';
import ErrorMessage from '../ErrorMessage';

const CustomFormPicker = ({ icon, placeholder, items, name }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <CustomPicker
        icon={icon}
        placeholder={placeholder}
        items={items}
        selectedItem={values[name]}
        onSelectItem={(item) => setFieldValue(name, item)}
      />
      <ErrorMessage touched={touched[name]} error={errors[name]} />
    </>
  );
};

export default CustomFormPicker;
