import Services from "@/app/components/services/Services";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button,
  Pressable,
  ScrollView,
} from "react-native";

const banner = require("../../assets/images/insurance_bg.jpg");

export default function App() {
  return (
      <ScrollView>
    <View style={styles.container}>
        {/* hero section starts */}
        <View>
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
          <Text style={{ color: "white", textAlign: "center", marginTop: 15, fontWeight: '600',marginBottom: 10, }}>
            Your peace of mind is our priority. With reliable insurance
            solutions, we safeguard what matters most to you—your family, your
            assets, and your dreams. Trust us to provide the protection you
            deserve.
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
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              borderRadius: 25,
            }}
          >
            <View style={{ width: 200, borderRadius: 25 }}>
              <Button
                // onPress={onPressLearnMore}
                title="Get Started"
                color="#2196F3"
                // accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
        {/* hero section ends */}
        {/* <Pressable >
        <Text>Get Started</Text>
      </Pressable> */}
        <Services />
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: "10%",
    backgroundColor: "#25292e",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
