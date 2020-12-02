import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class AddTasks extends Component {
	constructor(props) {
		super(props);
	}

	static navigationOptions = {
		title: 'AddTasks',
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>add task screen</Text>
			</View>
		);
	}
}
