import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useTodoStore } from '../store';

export const TodoModal = ({ visible, onClose, selectTodo }) => {
  const createNewTodo = useTodoStore((state) => state.createNewTodo);
  const updateTogo = useTodoStore((state) => state.updateTogo);
  const todos = useTodoStore((state) => state.todos);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = async () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Please fill in the fields');
    } else if (selectTodo) {
      await updateTogo({ ...selectTodo, title, description });
      clear();
    } else {
      const todo = {
        id: todos.length,
        title,
        description,
      };

      await createNewTodo(todo);
      clear();
    }
  };

  const clear = () => {
    onClose();
    setTitle('');
    setDescription('');
  };

  useEffect(() => {
    if (selectTodo) {
      setTitle(selectTodo.title);
      setDescription(selectTodo.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [selectTodo]);

  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <Text style={styles.titleText}>CREATE NEW TODO</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.inputTitle}
          placeholder="Title"
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={styles.inputDescription}
          placeholder="Description"
        />

        <View style={styles.btnsContainer}>
          <TouchableOpacity style={styles.btnClose} onPress={onClose}>
            <Text style={styles.btnCloseText}>Close</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnClose} onPress={handleSave}>
            <Text style={styles.btnCloseText}>
              {selectTodo ? 'Update' : 'Save'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002766',
    gap: 20,
  },
  btnsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white',
  },
  inputTitle: {
    width: 300,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  inputDescription: {
    width: 300,
    height: 80,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  btnClose: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  btnCloseText: {
    color: '#002766',
    fontSize: 18,
    fontWeight: '600',
  },
});
