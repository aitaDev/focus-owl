import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import Task from './Task';

export default class Tasks extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = { task: '' };
	}

	handleChange(e) {
		this.setState({ temperature: e.target.value });
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
					Current Tasks
				</Text>
				<View
					style={{
						backgroundColor: '#1c1c1c',
						flex: 2,
						borderRadius: 25,
						margin: 20,
						padding: 20,
					}}
				></View>
				<Task />
			</View>
		);
	}
}
