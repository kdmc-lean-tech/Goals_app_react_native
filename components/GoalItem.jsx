import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

export const GoalItem = ({ goal, setGoals }) => {
  
  const handleRemoveGoal = (goalId) => {
    setGoals(goals => goals.filter((goal) => goal._id !== goalId));
  }

  return (
    <TouchableOpacity
      style={ styles.itemContainer }
      onLongPress={ () => handleRemoveGoal(goal._id) }
    >
      <Text style={ styles.itemText }>{ goal.value }</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderWidth: 1,
    width: '95%',
    margin: 10,
    borderColor: '#233DD3',
    alignItems: 'center',
    borderRadius: 5
  },
  itemText: {
    color: '#233DD3',
    fontSize: 20
  }
});
