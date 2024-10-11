import { View, ActivityIndicator, FlatList,Pressable, Text } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import {styled} from "nativewind";
import { Screen } from "./Screen";

export interface IGame {
  title: string;
  description: string;
  image: string;
  score: number;
  slug: string;
}

const StyledPressable = styled(Pressable)

export default function Main() {
  const [games, setGames] = useState<IGame[]>([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    // <View
    //   className="bg-black p-2"
    //   // style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    // >
      <Screen>
      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
      </Screen>
    // </View>
  );
}
