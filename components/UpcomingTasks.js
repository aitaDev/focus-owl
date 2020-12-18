import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class UpcomingTasks extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		tasksList: [],
	// 	};
	// }

	// componentDidMount() {
	// 	AsyncStorage.getItem('task').then((task) => this.setState({ task }));
	// }

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Text style={styles.title}>Up Next</Text>
				<FlatList
					data={this.props.tasksList.slice(1)}
					renderItem={({ item }) => {
						return (
							<View style={styles.bubble}>
								<Text style={styles.task}>{item.name}</Text>
							</View>
						);
					}}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		marginTop: 30,
		marginLeft: 20,
		color: '#E5E5E5',
		fontSize: 24,
		fontWeight: '200',
	},
	bubble: {
		backgroundColor: '#1c1c1c',
		flex: 2,
		borderRadius: 25,
		margin: 20,
		padding: 20,
	},
	task: {
		color: '#11FF9B',
		fontSize: 20,
		fontWeight: '400',
	},
});
