import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const data = [
  {
    id: 1,
    title: "health insurance",
  },
  {
    id: 2,
    title: "car insurance",
  },
  {
    id: 3,
    title: "life insurance",
  },
  {
    id: 4,
    title: "bike insurance",
  },
];

const Services = () => {
  return (
    <View style={style.service_Hero}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 600,
          textAlign: "center",
          color: "white",
        }}
      >
        Our Services
      </Text>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 25,
          paddingBottom: 30,
          gap: 20,
        }}
      >
        {/* above parent comp */}
        {/* single comp starts */}
        {data.map((item) => (
          <View
          key={item.id}
            style={{
              width: 300,
              minHeight: 200,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 16,
              padding: 10,
            }}
          >
            {/* icon */}
            <Ionicons name="timer" size={30} color="blue" />
            {/* title */}
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                textAlign: "center",
                marginBottom: 7,
                marginTop: 3,
                textTransform: 'capitalize'
              }}
            >
              {item.title}
            </Text>
            {/* para */}
            <Text style={{ fontSize: 12, fontWeight: "400", color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              animi repellat dolorum cumque iure dolore praesentium at maiores
              totam, nisi, adipisci tempora quae assumenda odio neque doloribus
              nemo repellendus. Officiis.
            </Text>
          </View>
        ))}
        {/* single comp ends */}
      </View>
    </View>
  );
};

export default Services;

const style = StyleSheet.create({
  service_Hero: {
    marginTop: 40,
  },
});
