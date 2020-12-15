import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
			taskId: '',
			taskTime: '',
			tasks: [],
		};
	}

	// componentDMount() {
	// 	this.setState({ tasks: this.getData });
	// }
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Add a task...',
		};
	};

	getData = async () => {
		try {
			const jsonValue = await AsyncStorage.getItem('tasks');
			console.log(jsonValue);
			return jsonValue != null ? JSON.parse(jsonValue) : null;
		} catch (e) {
			console.log(e);
		}
	};

	addTaskToTasks() {
		const task = {
			task: this.state.task,
			taskId: this.state.tasks.length,
			taskTime: Date.now(),
		};
		this.setState((prevState) => ({ tasks: [...prevState.tasks, task] }));
		this.storeTask();
	}

	storeTask = async () => {
		try {
			const jsonValue = JSON.stringify(this.state.tasks);
			await AsyncStorage.setItem('tasks', jsonValue);
			navigationOptions.navigation.navigate('Home');
		} catch (e) {
			console.log(e);
		}
	};

	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 3 }}>
				<Text>add task screen</Text>
				<View>
					<Input
						value={this.state.task}
						onChangeText={(val) => this.setState({ task: val })}
						style={{ color: '#11FF9B' }}
					/>
					<Button
						title='Add Task'
						color='#11FF9B'
						onPress={() => this.addTaskToTasks()}
					/>
					<Button
						title='getData'
						color='#11FF9B'
						onPress={() => this.getData()}
					/>
				</View>
			</View>
		);
	}
}
