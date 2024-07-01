/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
//primera pantalla que se va a abrir
import {
    StyleSheet, //componente que le da estilo a los componentes
    ScrollView,
    View,
    Text,
  } from 'react-native';
import React, {useEffect, useState} from 'react';
import { getGameList } from '../api';
import Card from '../components/Card/Card';
import Boton from '../components/Button/Boton'; 
import { addGame } from '../api/index';



const Home = ({navigation}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [gameList, setGameList] = useState([]);

  useEffect(() => {
    const fetchGameList = async () => {
      try {
        const newGameList = await getGameList();
        setGameList(newGameList);
      } catch (error) {
        console.error('Error fetching Pokemon list:', error);
      }
      setIsLoading(false);
    };
    fetchGameList();
  }, []);

    return (
        <View>
        <Text style={styles.h1}>OLIMPIADAS 2024</Text>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            contentContainerStyle={styles.scrollViewContainer}>
              <Boton
                text={"New Game"}
                onPress={() => addGame()}
              ></Boton>
            {gameList.length > 0 ? (
              gameList.map((game) => (
                <Card
                key={game.id}
                text= {game.title}
                onPress={()=>{
                  navigation.navigate('GameDetails', {
                    item: { 
                      title: game.title, 
                      description: game.description, 
                      players: game.players, 
                      categories: game.categories, 
                    }
                  })
                }}
               />
               
              ))
            ) : (
              <Text>No spots found.</Text>
            )}
          </ScrollView>
        )}
        </View>
      );
    };


    const styles = StyleSheet.create({
        container: {
          flex: 1,
        },
        h1: {
          fontSize: 30,
          fontWeight: '600',
          textAlign: 'center',
          margin: 20,
          color: 'black',
        },
        scrollViewContainer: {
          padding: 20,
        },
        pokemonName: {
          fontSize: 18,
        },
      });
export default Home;
