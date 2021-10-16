import React, { useState } from 'react';
import { Focus } from './src/features/Focus';
import { StyleSheet, View, Text } from 'react-native';

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
		backgroundColor: '#252250'
	}
});

export default App;
