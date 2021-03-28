import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { AddGoal } from './components/AddGoal';
import { GoalItem } from './components/GoalItem';

export default function App() {

  const [ goals, setGoals ] = useState([]);
  const [ openModal, setOpenModal ] = useState(false);

  return (
    <View style={ styles.container }>
      <View style={ styles.title }>
        <Text style={ styles.titleText }>Goals App</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={ () => setOpenModal(true) }
          style={ styles.addNewGoalButton }
        >
          <Text style={ styles.addNewGoalText }>Add New Goal</Text>
        </TouchableOpacity>
      </View>
      <View>
        <AddGoal
          visible={ openModal }
          setGoals={ setGoals }
          setOpenModal={ setOpenModal } />
      </View>
        {
          goals?.length > 0 ?
            <FlatList
              data={ goals }
              keyExtractor={(item) => item._id}
              renderItem={
                (itemData) => (
                  <GoalItem goal={ itemData.item } setGoals={ setGoals } />
                )
              }
            />
          :
          <View style={ styles.notFoundContainer }>
            <Text style={ styles.notFoundText }>You don't have any goals for today...</Text>
          </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    backgroundColor: '#233DD3',
    padding: 25,
    alignItems: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 25
  },
  notFoundContainer: {
    height: '50%',
    alignItems: 'center',
    marginTop: 35
  },
  notFoundText: {
    color: '#233DD3',
    fontSize: 18
  },
  addNewGoalButton: {
    backgroundColor: '#233DD3',
    padding: 15,
    margin: 10,
    alignItems: 'center'
  },
  addNewGoalText: {
    color: 'white'
  }
});
