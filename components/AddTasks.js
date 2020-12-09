import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default class AddTasks extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Add A Task',
		};
	};

	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 3 }}>
				<Text>add task screen</Text>
			</View>
		);
	}
}
