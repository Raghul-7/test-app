import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";

const banner = require("../../assets/images/insurance_bg.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={banner} style={styles.image}>
        <Text
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontSize: 25,
            fontWeight: 700,
            width: "50%",
            color: "white",
            paddingLeft: 15,
          }}
        >
          Secure Your Future Today
        </Text>
      </ImageBackground>
      <Text style={{ color: "white", textAlign: "center", marginTop: 15 }}>
        Your peace of mind is our priority. With reliable insurance solutions,
        we safeguard what matters most to you—your family, your assets, and your
        dreams. Trust us to provide the protection you deserve.
      </Text>
      <TextInput
        placeholder="Enter your Email"
        // value="Email"
        style={{
          borderRadius: 25,
          padding: 5,
          margin: 10,
          height: 50,
          backgroundColor: "white",
          borderWidth: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#25292e",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
