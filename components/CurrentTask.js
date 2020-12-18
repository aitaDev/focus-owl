import React, { Component } from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';

export default class CurrentTask extends Component {
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
				<Text style={styles.title}>Current Task</Text>
				<FlatList
					data={this.props.tasksList.slice(0, 1)}
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
