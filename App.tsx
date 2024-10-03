import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  ScrollView,
  SafeAreaView
} from "react-native";
import { getLatestGames } from "./lib/metacritic";
import {useState, useEffect} from "react";
import  Constants from "expo-constants";

export default function App() {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);
 
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{uri: game.image}}
          style={styles.image}/>
          <Text style={styles.title}>{game.title}</Text>
          <Text style={styles.description}>{game.description}</Text>
          <Text style={styles.score}>{game.score}</Text>
        </View>
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingTop: Constants.statusBarHeight,
    padding:12
  },
  card:{
    gap:10,
  },
  image:{
    width:107,
    height:147,
    borderRadius:10
  },
  title:{
    color:"white",
    fontSize:18
  },
  description:{
    color:"white",
    fontSize:12
  },
  score:{
    color:"green",
    fontSize:24,
  }
});
