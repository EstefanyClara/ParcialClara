/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Boton from '../components/Button/Boton'; 
import { deleteGame } from '../api/index';


const GameDetails = ({route, navigation}) => {    
    const info = route.params.item;


          return (
            <View style={styles.container}>
                <Text style={styles.title}>{info.title} </Text>
                <Text style={styles.details}>Description: {info.description}</Text>
                <Text style={styles.details}>Players: {info.players}</Text>
                <Text style={styles.details}>Category: {info.categories}</Text>
                <Boton
                    text={"Eliminar"}
                    onPress={() => deleteGame(info.id)}
                  ></Boton>
            </View>
          );
        };
        
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          },
          title: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'black',
            textTransform: 'capitalize',
          },
          details: {
            fontSize: 20,
            color: 'black',
            textTransform: 'capitalize',
            justifyContent: 'center',
            alignItems: 'center',
          },
        });
        
        export default GameDetails;
        
            

            
        
    
    
