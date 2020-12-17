import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Icon, Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AddTasks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
		};
	}

	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Add a task...',
		};
	};

	addTaskToTasks() {
		const newTask = {
			task: this.state.task,
			// taskId: this.state.tasks.length,
			// taskTime: new Date().toLocaleTimeString('en-US'),
		};
		this.setState((prevState) => ({ task: [...prevState.task, newTask] }));

		AsyncStorage.setItem('task', this.state.task);
		console.log(this.state.task);
		this.props.navigation.navigate('Home');
	}

	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1 }}>
				<View
					style={{
						flex: 1,
						alignContent: 'center',
						justifyContent: 'center',
						borderBottomColor: 'black',
					}}
				>
					<Input
						inputContainerStyle={{ borderBottomWidth: 0 }}
						value={this.state.task}
						onChangeText={(val) => this.setState({ task: val })}
						style={{
							backgroundColor: '#1c1c1c',
							borderRadius: 25,
							margin: 20,
							padding: 20,
							color: '#11FF9B',
						}}
					/>
					<Button
						title='Add Task'
						color='#11FF9B'
						onPress={() => this.addTaskToTasks()}
					/>
				</View>
			</View>
		);
	}
}
