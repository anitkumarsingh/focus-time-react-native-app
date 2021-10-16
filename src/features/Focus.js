import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

export const Focus = () => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>What would you like to focus on ?</Text>
			<View style={styles.textInput}>
				<TextInput />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	titleContainer: {
		flex: 0.5,
		padding: 16,
		justifyContent: 'center'
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 24
	},
	textInput: {
		paddingTop: 20
	}
});
