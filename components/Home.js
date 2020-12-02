import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Tasks from './Tasks';

export default class Home extends Component {
	static navigationOptions = {
		title: 'Focus Owl',
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text style={{ fontSize: 24, textAlign: 'center' }}>Focus Owl</Text>
				<Button title='New Task' onPress={() => navigate('AddTasks')} />
				<Text>Pomodoro PlaceHolder</Text>
				<Tasks />
			</View>
		);
	}
}
