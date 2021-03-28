import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';

export const AddGoal = ({ setGoals, visible, setOpenModal }) => {

  const [ value, setValue ] = useState('');

  const handleOnChange = (text) => {
    setValue(text);
  }

  const handleOnSubmit = () => {
    if (value.length > 3) {
      setGoals((goals) => [...goals, {
        _id: Math.random().toString(),
        value
      }]);
      setValue('');
      setOpenModal(false);
    }
  }

  return (
    <Modal visible={ visible } animationType='slide'>
      <View style={ styles.inputContainer }>
        <TextInput
          style={ styles.input }
          onChangeText={ handleOnChange }
          value={ value }
        />
        <View style={ styles.groupButtons }>
          <TouchableOpacity onPress={ handleOnSubmit }>
            <View style={ styles.button }>
              <Text style={ styles.buttonText }>Add Goal</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => setOpenModal(false) }>
            <View style={ styles.closeModalButton }>
              <Text style={ styles.buttonText }>Close Modal</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    padding: 5,
    borderColor: '#233DD3',
    borderWidth: 1,
    margin: 10
  },
  button: {
    backgroundColor: '#233DD3',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  groupButtons: {
    flexDirection: 'row-reverse',
    justifyContent: 'center'
  },
  closeModalButton: {
    backgroundColor: '#E76DDB',
    padding: 15,
    margin: 10,
    borderRadius: 5
  }
});
