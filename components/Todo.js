import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Delete from 'react-native-vector-icons/MaterialIcons';
import Pencil from 'react-native-vector-icons/Entypo';

import Check from 'react-native-vector-icons/MaterialIcons';
import { useTodoStore } from '../store';

export const Todo = ({ todo, edit }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <ScrollView style={stlyes.container}>
      <View style={stlyes.leftContainer}>
        <View>
          <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
            <Check
              name={todo.complete ? 'check-box' : 'check-box-outline-blank'}
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View style={stlyes.textsContainer}>
          <Text style={stlyes.title}>Title: {todo.title}</Text>
          <Text style={stlyes.description}>
            Description: {todo.description}
          </Text>
        </View>
      </View>
      <View style={stlyes.btnsContainer}>
        <TouchableOpacity
          style={stlyes.btnDelete}
          onPress={() => removeTodo(todo.id)}
        >
          <Delete name="delete" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={stlyes.btnUpdate} onPress={() => edit(todo)}>
          <Pencil name="pencil" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const stlyes = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'column',
    backgroundColor: '#002766',
    borderRadius: 10,
    padding: 20,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    gap: 10,
  },
  textsContainer: {
    flexDirection: 'column',
    gap: 3,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
  description: {
    color: 'white',
  },
  btnsContainer: {
    flexDirection: 'row',
    gap: 5,
    marginTop: 20,
  },
  btnDelete: {
    padding: 10,
    paddingHorizontal: 12,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  btnUpdate: {
    padding: 10,
    paddingHorizontal: 12,
    backgroundColor: 'green',
    borderRadius: 5,
  },
});
