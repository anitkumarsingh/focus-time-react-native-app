import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { sizes, spacing } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
	const [tempSubject, setTempSubject] = useState(null);

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
		padding: spacing.md,
		justifyContent: 'center'
	},
	title: {
		color:colors.white,
		fontWeight: 'bold',
		fontSize: sizes.lg
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
