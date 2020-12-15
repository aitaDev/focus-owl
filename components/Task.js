import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';
import * as tasks from '../shared/tasks';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RenderTasks(state) {
	const { item } = state;

	if (item) {
		return (
			<Card>
				<Text style={{ margin: 10 }}>{item.name}</Text>
			</Card>
		);
	}
	return <View />;
}

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
		};
	}
	componentDidMount() {
		this.getData();
	}

	getData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('tasks');
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			console.log(e);
		}
	};

	render() {
		return (
			<View
				style={{
					backgroundColor: '#1c1c1c',
					flex: 2,
					borderRadius: 25,
					margin: 20,
					padding: 20,
				}}
			>
				<FlatList
					data={tasks}
					renderItem={RenderTasks}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}
