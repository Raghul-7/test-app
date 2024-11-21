import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const banner = require('../../assets/images/banner.jpg');

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={banner} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#25292e',
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: 'cover', 
  },
});
