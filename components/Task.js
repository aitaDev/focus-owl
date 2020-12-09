import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class Task extends Component {

	render() {
		return (
			<View>
				<FlatList
				data={tasks}
				renderItem={renderTasks}
				keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}
