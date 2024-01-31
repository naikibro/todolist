import * as React from "react";
import { Text, StyleSheet, View, PanResponder } from "react-native";
import { Avatar, Button, Card, Checkbox } from "react-native-paper";

const Task = ({ task, onToggleTask, onSwipeLeft }) => {
  const [checked, setChecked] = React.useState(task.isDone);

  const handleToggle = () => {
    setChecked(!checked);
    onToggleTask(task.id, !checked);
  };

  const handleLeftSwipe = () => {
    onSwipeLeft(task.id);
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
        <Card.Actions style={styles.actions}>
          <Card.Title
            title={task.title}
            subtitle={task.completion}
            titleStyle={[
              styles.title,
              { color: checked ? "white" : "black" }, // Toggle text color
            ]}
          />
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
  actions: {
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
  },
});

export default Task;
