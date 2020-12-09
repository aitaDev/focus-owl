import React, { Component } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import TimerTwo from './TimerTwo';
import Tasks from './Tasks';

export default class Home extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Focus Owl',
			headerBackTitle: 'Cancel',
			headerRight: () => (
				<Icon
					name='plus-circle'
					type='font-awesome'
					color='#11FF9B'
					onPress={() => navigation.navigate('AddTasks')}
					size={32}
					style={{ marginRight: 10 }}
				/>
			),
		};
	};
	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1 }}>
				<TimerTwo />
				<Tasks />
			</View>
		);
	}
}
