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
			<View>
				<Text style={styles.upNext}>Up Next</Text>
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
							color: 'white',
							fontSize: 24,
							fontWeight: '200',
						}}
					>
						{this.state.task}
					</Text>
					{/* <FlatList
					data={task}
					renderItem={RenderTasks}
					keyExtractor={(task) => task.taskId.toString()}
				/> */}
				</View>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	upNext: {
		marginTop: 30,
		marginLeft: 20,
		color: '#E5E5E5',
		fontSize: 24,
		fontWeight: '200',
	},
});
