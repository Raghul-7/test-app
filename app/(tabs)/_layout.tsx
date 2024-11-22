import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";

const logo = require("../../assets/images/marketing-star.png");

export default function TabLayout() {
  const [showMenu, SetShowMenu] = useState(false);

  const handleClicks = () => {
    SetShowMenu(!showMenu);
  };
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ffd33d",
        headerStyle: {
          backgroundColor: "white",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
        headerTitle: () => (
          <Image
            source={logo}
            resizeMode="contain"
            style={{
              width: 200,
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        ),
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={handleClicks}>
              <Ionicons name="menu" size={30} color="black" />
            </TouchableOpacity>
            {showMenu && (
              <View style={styles.dropdown}>
                <TouchableOpacity>
                  <Text style={styles.menuItem}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.menuItem}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.menuItem}>Logout</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ),
      }}
    >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="about"
          options={{
            title: "About",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={
                  focused ? "information-circle" : "information-circle-outline"
                }
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="contact"
          options={{
            title: "contact",
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name={focused ? "contacts" : "contacts-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    top: 30,
    right: 0,
    backgroundColor: "#25292e",
    borderRadius: 5,
    padding: 5,
    elevation: 5, // For shadow effect
  },
  menuItem: {
    padding: 10,
    color: "#fff",
    fontSize: 16,
  },
});
