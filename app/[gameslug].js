import { Link, Stack, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { Screen } from "../components/Screen";
import { useEffect, useState } from "react";
import { getGameDetails } from "../lib/metacritic";
import { Score } from "../components/Score";

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#ffee00" },
          headerLeft: () => {},
          headerRight: () => {},
          headerTintColor: "black",
          headerTitle:
            gameslug.split("-").join(" ")[0].charAt(0).toUpperCase() +
            gameslug.split("-").join(" ").slice(1),
        }}
      />
      <View>
        {gameInfo === null ? (
          <ActivityIndicator color={"#fff"} size={"large"} />
        ) : (
          <ScrollView>
            <View className="flex flex-col justify-center items-center text-center">
              <Image
                className="mb-4 rounded"
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294, marginTop: 4 }}
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white font-bold text-2xl mb-8 mt-4">
                {gameInfo.title}
              </Text>
              <Text className="text-white text-base mb-8">
                {gameInfo.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
