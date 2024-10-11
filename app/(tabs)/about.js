import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View className="flex flex-row items-center gap-2 p-2 mt-10">
          <Link href="/" asChild className="text-blue-400 text-xl">
            <StyledPressable className="active:opacity-30 flex flex-row gap-2 items-center">
              <FontAwesome name="home" size={24} color="#60a5fa" />
              <Text className="color-blue-400">Home</Text>
            </StyledPressable>
          </Link>
        </View>
        <Text className="text-white font-bold text-2xl mb-8">About</Text>
        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolorerum sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolorerum sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolorerum sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Lorem ipsum dolorerum sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </ScrollView>
    </Screen>
  );
}
