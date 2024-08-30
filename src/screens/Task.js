import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView, TextInput, Keyboard, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity onPress={() => props.onComplete(props.index)}>
          <MaterialIcons
            name={props.completed ? 'check-box' : 'check-box-outline-blank'}
            size={24}
            color={props.completed ? '#364ef0' : '#C0C0C0'}
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={[styles.itemText, props.completed && styles.completedText]}>
            {props.text}
          </Text>
          <Text style={styles.timestamp}>{props.timestamp}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => props.onDelete(props.index)}>
        <MaterialIcons
          name="delete"
          size={24}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
}

export default function App({ navigation }) {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      const now = new Date();
      const timestamp = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
      setTaskItems([...taskItems, { text: task, completed: false, addedAt: Date.now(), timestamp }]);
      setTask('');
    } else {
      Alert.alert('Error', 'Please enter a task');
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  }

  const deleteTask = (index) => {
    setTaskItems(items => items.filter((_, i) => i !== index));
  }

  // Remove completed tasks after 24 hours
  const cleanUpTasks = () => {
    const now = Date.now();
    setTaskItems(items => items.filter(item => !item.completed || (now - item.addedAt < 24 * 60 * 60 * 1000)));
  }

  React.useEffect(() => {
    const intervalId = setInterval(cleanUpTasks, 60 * 60 * 1000); // Check every hour
    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="arrow-back" size={40} color="white" />
        </TouchableOpacity>
        <Text style={styles.headder}>Add Your Task</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        {/* Today's Tasks */}
        <View style={styles.tasksWrapper}>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <Task
                  key={index}
                  text={item.text}
                  completed={item.completed}
                  index={index}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                  timestamp={item.timestamp}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>

      {/* Write a task */}
      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write your task'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  header: {
    backgroundColor: '#364ef0',
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginTop: -30,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 40,
    marginTop: 30,
  },
  headder: {
  fontSize:22,
  fontWeight:'bold',
  color:'white',
  marginTop:50,
  marginLeft:-70,
  },
  submitButton: {
    backgroundColor: '#364ef0',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    marginBottom: -30,
    marginLeft: 0,
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    marginBottom: -25,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#C0C0C0',
  },
  timestamp: {
    fontSize: 12,
    color: '#C0C0C0',
    marginTop: 5,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
