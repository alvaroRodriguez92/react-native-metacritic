import { Image, StyleSheet, Text, View, Animated, Pressable } from "react-native";
import  {IGame} from "./Main";
import { useEffect, useRef } from "react";
import { Score } from "./Score";
import { Link } from "expo-router";
import {styled} from "nativewind";

const StyledPressable = styled(Pressable);

export function GameCard({game}:{game:IGame}) {
    return (
      <Link asChild href={`/${game.slug}`}>
        <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500 rounded-xl">
        <View key={game.slug} className="flex-row gap-4">
          <Image source={{uri: game.image}}
          style={styles.image}/>
          <View className="flex-shrink">
          <Text className="mb-1" style={styles.title}>{game.title}</Text>
          <Score score={game.score} maxScore={100}/>
          <Text className="mt-2 flex-shrink-0" style={styles.description}>{game.description.slice(0,100)}...</Text>
          </View>
        </View>
        </StyledPressable>
        </Link>
    )
}

export function AnimatedGameCard({game,index}:{game:IGame, index:number}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 500,
            useNativeDriver: true
        }).start();
    },[opacity,index])

    return (
        <Animated.View style={{opacity}}>
            <GameCard game={game}/>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card:{
      gap:10,
      marginBottom:20
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