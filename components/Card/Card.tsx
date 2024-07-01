/* eslint-disable prettier/prettier */
import React, {ReactNode} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Boton from '../Button/Boton';
import { deleteGame } from '../../api';


const Card = (props) => {
  const {text, onPress }= props

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  text: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    textTransform: 'capitalize',
  }
});

export default Card;