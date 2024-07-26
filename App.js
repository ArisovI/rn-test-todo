import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TodoModal } from "./components/TodoModal";

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [selectTodo, setSelectTodo] = useState(null);

  const handleEditTodo = (todo) => {
    setSelectTodo(todo);
    setIsModal(true);
  };

  const handleIsModal = () => {
    setSelectTodo(null);
    setIsModal(true);
  };

  return (
    <View style={styles.container}>
      <Header />
      <Todos edit={handleEditTodo} />
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() => handleIsModal(true)}
      >
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>

      <TodoModal
        visible={isModal}
        onClose={() => setIsModal(false)}
        selectTodo={selectTodo}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: "#002766",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnText: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
  },
});
