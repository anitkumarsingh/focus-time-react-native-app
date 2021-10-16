import React, { useState } from 'react';
import { Focus } from './src/features/focus/Focus';
import { StyleSheet, View, Text } from 'react-native';
import { colors } from './src/utils/colors';

const App = () => {
	const [focusSubject, setFocusSubject] = useState(null);
	return (
		<View style={styles.container}>
			{focusSubject ? (
				<Text>Here is where I am going to build a timer</Text>
			) : (
				<Focus addSubject={setFocusSubject} />
			)}
			<Text style={{ color: '#fff' }}>{focusSubject}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.darkBlue
	}
});

export default App;
