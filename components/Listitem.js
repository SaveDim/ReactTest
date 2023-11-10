import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
	return (
        <TouchableOpacity onLongPress={() =>
            Alert.alert('Delete', 'Do you really want to delete this task?', [
      {
        text: 'Cancel',
      },
      {text: 'OK', onPress: () => deleteHandler(el.key)},
    ])}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
	)};

const styles = StyleSheet.create({
            text: {
                padding: 20,
                textAlign: 'center',
                borderRadius: 5,
                backgroundColor: '#fafafa',
                borderWidth: 1,
                marginTop: 20,
                width: '60%',
                marginLeft: '20%'

            }});
