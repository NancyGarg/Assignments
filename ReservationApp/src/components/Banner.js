import React from 'react';

import {Image, View} from 'react-native';

const BACKGROUND =
  'https://discoveryrestaurant.in/img/sliderImage/1540398058.jpg';

const Banner = () => (
  <View>
    <Image
      resizeMode={'cover'}
      style={{width: '100%', height: 180}}
      source={{
        uri: BACKGROUND,
      }}
    />
  </View>
);
export default Banner;
