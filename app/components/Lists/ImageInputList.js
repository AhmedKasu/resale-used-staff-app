import React, { useRef } from 'react';
import { ScrollView } from 'react-native';

import ImageInput from '../ImageInput';

const ImageInputList = ({ images = [], onAddImage, onRemoveImage }) => {
  const scrollView = useRef();
  return (
    <>
      <ScrollView
        ref={scrollView}
        horizontal
        onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        {images.map((image, i) => (
          <>
            <ImageInput
              key={image.uri + i}
              imageUri={image.uri}
              onChangeImage={(uri) => onRemoveImage(uri)}
            />
          </>
        ))}

        <ImageInput onChangeImage={(imageObj) => onAddImage(imageObj)} />
      </ScrollView>
    </>
  );
};

export default ImageInputList;
