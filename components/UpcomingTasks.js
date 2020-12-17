import React, { Component } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// function RenderTasks(state) {
// 	const { task } = state;

// 	if (task) {
// 		return (
// 			<Card>
// 				<Text style={{ margin: 10 }}>{task.name}</Text>
// 			</Card>
// 		);
// 	}
// 	return <View />;
// }

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: '',
		};
	}

	componentDidMount() {
		AsyncStorage.getItem('task').then((task) => this.setState({ task }));
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text
					style={{
						marginTop: 30,
						marginLeft: 20,
						color: '#E5E5E5',
						fontSize: 24,
						fontWeight: '200',
					}}
				>
					Up Next
				</Text>
				<View
					style={{
						backgroundColor: '#1c1c1c',
						flex: 2,
						borderRadius: 25,
						margin: 20,
						padding: 20,
					}}
				>
					<Text
						style={{
							color: '#11FF9B',
							fontSize: 20,
							fontWeight: '400',
						}}
					>
						Work Economics Assignment
					</Text>
				</View>
			</View>
		);
	}
}
