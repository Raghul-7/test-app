import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.text}>Hello react native</Text>
      <Text
        style={{
          color: "blue",
        }}
      >
        Hey there!
      </Text>
      <Link
        href="/about"
        style={{
          fontSize: 20,
          margin: 20,
          color: 'black',
          backgroundColor: 'yellow',
          borderRadius: 25,
          padding: 10,
        }}
      >
        About Page link
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
});
