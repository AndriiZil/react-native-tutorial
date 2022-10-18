import { useState } from 'react';
import {
  View,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startModelIsVisible() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(
      (currentCourseGoals) => [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() } // for FlatList
      ]
    );
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => currentCourseGoals.filter(goal => goal.key !== id));
  }

  return (
    <View style={styles.container}>
      <Button
        title='Add New Goal'
        color='#5e0acc'
        onPress={startModelIsVisible}
      />
      <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({item}) => {
            return <GoalItem
              item={item}
              onDelete={deleteGoalHandler}
            />
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  }
});
