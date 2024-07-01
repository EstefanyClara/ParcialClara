/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

const Boton = (props) => {

  const {text, onPress }= props;

  return (
    <TouchableOpacity 
        style = {styles.buttonContainer}
        onPress={onPress} >
      <Text style= {styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}


export default Boton

const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: '#f4511e',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        width: 120,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    
    });