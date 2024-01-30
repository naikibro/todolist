import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Avatar, Button, Card, Checkbox } from "react-native-paper";

const Task = ({ task, onToggleTask }) => {
  const [checked, setChecked] = React.useState(task.isDone);

  const handleToggle = () => {
    setChecked(!checked);
    onToggleTask(task.id, !checked);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={task.title}
          subtitle={task.completion}
          titleStyle={styles.title}
        />
        <Card.Actions>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={handleToggle}
          />
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
  },
  card: {
    marginHorizontal: 10,
    flex: 1,
  },
  title: {
    fontWeight: "bold",
  },
});

export default Task;
