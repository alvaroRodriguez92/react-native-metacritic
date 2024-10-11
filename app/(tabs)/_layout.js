import { Tabs } from "expo-router";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarInactiveTintColor: "#60a5fa",
        tabBarActiveTintColor: "#ffee00",
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="info-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
