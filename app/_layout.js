import { Pressable, Text, View } from "react-native";
import { Link, Slot } from "expo-router";
import { Stack } from "expo-router";
import { Logo } from "../components/Logo";
import { styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    // <View className="flex-1 bg-black items-center justify-center">    <View className="flex-1 bg-black items-center justify-center">
    <View className="flex-1 ">
      {/* <Slot /> */}
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          // headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href="/about" asChild className="text-blue-400 text-xl p-8">
              <StyledPressable className="active:opacity-30 flex flex-row gap-2 items-center">
                <Ionicons name="information-circle" size={24} color="#60a5fa" />
                <Text className="color-blue-400">About</Text>
              </StyledPressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
