import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import * as tasks from '../shared/taskList';

function renderTasks() {
	return (
		
	)
}


export default class Tasks extends Component {
	render() {
		return (
			<ScrollView>
				<FlatList
					data={tasks}
					renderItem={renderTasks}
					keyExtractor={(item) => item.id.toString()}
				/>
			</ScrollView>
		);
	}
}
