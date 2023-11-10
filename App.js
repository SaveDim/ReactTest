import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import Header from "./components/Header";
import ListItem from "./components/Listitem";
import Form from "./components/Form";

export default function App() {
	const [listOfItems, setListOfItems] = useState([
		{text: 'Купить молока', index: 1},
		{text: 'Помыть машину', index: 2},
		{text: 'Купить картошку', index: 3},
		{text: 'Купить слона', index: 4},
	])

	const addHandler = (text) => {
		setListOfItems((list) => {
			return [
				{ text: text, index: 5 },
				...list
			]
		})
	}

	return (
		<View>
			<Header/>
			<Form addHandler={addHandler} />
			<View>
				<FlatList data={listOfItems} renderItem={({ item }) => (
					<ListItem el={item} />
				)} />
			</View>
		</View>
	);
}
// const styles = StyleSheet.create({
//
// });