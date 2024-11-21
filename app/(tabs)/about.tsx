import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={style.banner}>
      <Text>About page is here</Text>
    </View>
  );
}

const style = StyleSheet.create({
  banner: {
    backgroundColor: "#25292e",
    minHeight: 100,
  },
});
