import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default function App() {
	return (
		<SafeAreaView>
			<View style={styles.box}>
				<Text style={styles.text}>Hello!</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	box: {
		width: 100,
		height: 100,
		backgroundColor: '#eb4034',
		borderRadius: 50,
		margin: 30,
		borderWidth: 6,
		borderColor: '#b52e24'
	},
	text: {
		textAlign: 'center',
		lineHeight: 90,
		color: '#fff',
		fontWeight: 'bold'
	}
});