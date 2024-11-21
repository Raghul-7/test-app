import { Stack } from "expo-router";
// import { StyleSheet, View } from "react-native";

export default function RootLayout() {
  return (
    // <View style={style.layoutStyle}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
      </Stack>
    // </View>
  );
}

// const style = StyleSheet.create({
//   layoutStyle: {
//     backgroundColor: "#25292e",
//     flex: 1
//   },
// });
