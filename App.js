import React, { useState } from 'react';
import {View, FlatList, Text, Alert} from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/Listitem";
import Form from "./components/Form";

export default function App() {
	const [listOfItems, setListOfItems] = useState([
		{text: 'Купить молока', key: '1'},
		{text: 'Помыть машину', key: '2'},
		{text: 'Купить картошку', key: '3'},
		{text: 'Купить слона', key: '4'},
	])

	const addHandler = (text) => {
		if (text.trim().length < 5)
			Alert.alert('Warning', 'Write more than five simbols!');
		else {
			setListOfItems((list) => {
				return [
					{text: text, key: Math.random().toString(36).substring(7)},
					...list
				]
			});
		}
	}

	const deleteHandler = (key) => {
		setListOfItems((list) => {
			return list.filter(listOfItems => listOfItems.key != key)
		});
	}

	return (
		<View>
			<Header/>
			<Form addHandler={addHandler} />
			<View>
				<FlatList data={listOfItems} renderItem={({ item }) => (
					<ListItem el={item} deleteHandler={deleteHandler} />
				)} />
			</View>
		</View>
	);
}
