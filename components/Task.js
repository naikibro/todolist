import * as React from "react";
import { Text, StyleSheet, View, PanResponder, TextInput } from "react-native";
import { Button, Card, Checkbox } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

const Task = ({ task, onToggleTask, onSwipeLeft }) => {
  const [checked, setChecked] = React.useState(task.isDone);
  const [editing, setEditing] = React.useState(false);
  const [title, setTitle] = React.useState(task.title);

  const handleToggle = () => {
    setChecked(!checked);
    onToggleTask(task.id, !checked);
  };

  const handleLeftSwipe = () => {
    onSwipeLeft(task.id);
  };

  const handleUpdate = () => {
    setEditing(true);
  };

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const handleTitleSubmit = () => {
    task.title = title;
    setEditing(false);
  };

  // Create the PanResponder unconditionally
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderRelease: (e, gestureState) => {
      if (checked && gestureState.dx < -50) {
        handleLeftSwipe();
      }
    },
  });

  return (
    <View style={styles.container}>
      <Card
        {...(checked ? panResponder.panHandlers : {})}
        style={[
          styles.card,
          {
            backgroundColor: checked ? "green" : "#fff",
            opacity: checked ? 0.4 : 1,
          },
        ]}
      >
        {editing ? (
          <TextInput
            style={styles.editInput}
            value={title}
            onChangeText={handleTitleChange}
            onSubmitEditing={handleTitleSubmit}
            onBlur={handleTitleSubmit}
            autoFocus
          />
        ) : (
          <Card.Actions style={styles.actions}>
            <Card.Title
              title={task.title}
              subtitle={task.completion}
              titleStyle={[
                styles.title,
                { color: checked ? "white" : "black" },
              ]}
            />
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={handleToggle}
            />
          </Card.Actions>
        )}
      </Card>
      <View style={{ marginRight: 10 }}>
        <Button
          mode="outlined"
          buttonColor="white"
          textColor="black"
          onPress={handleUpdate}
        >
          <Ionicons name="pencil-outline" size={22} color="black" />
        </Button>
      </View>
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
  actions: {
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
  },
  editInput: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default Task;
