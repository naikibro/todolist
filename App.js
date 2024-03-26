import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import Task from "./components/Task";
import { TextInput, Drawer, Button as PaperButton } from "react-native-paper";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(3);
  const [text, setText] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [tasks, setTasks] = useState([
    { title: "Faire un café ☕", id: 1, isDone: false },
    { title: "Boire de l'eau 🍺", id: 2, isDone: false },
  ]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const readTasks = () => {
    return tasks.map((task) => (
      <Task key={task.id} task={task} onSwipeLeft={() => deleteTask(task.id)} />
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleInput = (textInput) => {
    let newTask = { title: textInput, id: count, isDone: false };
    setCount(count + 1);
    createTask(newTask);
    setText("");
    toggleDrawer();
    console.log(newTask);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <ImageBackground
      source={require("./assets/bg.jpg")}
      style={styles.background}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.h1}>To-do list</Text>
          {readTasks()}
        </View>
      </ScrollView>

      <Drawer.Section
        style={[
          styles.drawerSection,
          {
            height: isDrawerOpen ? "auto" : 0,
            opacity: isDrawerOpen ? 0.8 : 0.2,
          },
        ]}
      >
        <TextInput
          label="Add a new task"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="outlined"
          style={styles.textInput}
        />
        <Button
          title="Create task"
          type="buttonPrimary"
          onPress={() => handleInput(text)}
        />
      </Drawer.Section>
      <PaperButton
        icon={isDrawerOpen ? "chevron-down" : "chevron-up"}
        onPress={toggleDrawer}
        style={styles.toggleButton}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  h1: {
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 40,
  },
  section: {
    width: "100%",
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    position: "absolute",
    bottom: 0,
  },
  drawerSection: {
    overflow: "hidden",
    backgroundColor: "#fff",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: "center",
    padding: 20,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  textInput: {
    marginTop: 20,
    width: "90%",
  },
  toggleButton: {
    zIndex: 2,
    top: 0,
  },
});
