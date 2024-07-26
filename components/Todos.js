import { FlatList, StyleSheet, View } from "react-native";
import { useTodoStore } from "../store";
import { Todo } from "./Todo";

export const Todos = ({ edit }) => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} edit={edit} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
