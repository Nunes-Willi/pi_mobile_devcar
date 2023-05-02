import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const Carousel = () => {
  return (
    <Swiper style={styles.wrapper} autoplay>
      <View style={styles.slide}>
        <Image
          source={require}
          style={styles.image}
        />
        <Text style={styles.text}>Slide 1</Text>
      </View>
      <View style={styles.slide}>
        <Image
          source={require}
          style={styles.image}
        />
        <Text style={styles.text}>Slide 2</Text>
      </View>
      <View style={styles.slide}>
        <Image
          source={require}
          style={styles.image}
        />
        <Text style={styles.text}>Slide 3</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Carousel;
