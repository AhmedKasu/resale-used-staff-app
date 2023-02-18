import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import ImageInput from '../ImageInput';

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const scrollView = useRef();

  return (
    <>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        {imageUris.map((uri) => (
          <ImageInput
            key={uri}
            imageUri={uri}
            onChangeImage={(uri) => onRemoveImage(uri)}
          />
        ))}

        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </ScrollView>
    </>
  );
};

export default ImageInputList;
