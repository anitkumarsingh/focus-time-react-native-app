import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
	const [tempSubject, setTempSubject] = useState(null);
	console.log('focus comp', tempSubject);
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>What would you like to focus on ?</Text>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onSubmitEditing={({ nativeEvent }) => {
						setTempSubject(nativeEvent.text);
					}}
				/>
				<RoundedButton title='+' size={50} onPress={() => addSubject(tempSubject)} />
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
	inputContainer: {
		paddingTop: 20,
		flexDirection: 'row',
		alignItems: 'center'
	},
	input: {
		flex: 1,
		marginRight: 10
	}
});
