import React, { Component } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import TimerTwo from './TimerTwo';
import CurrentTask from './CurrentTask';
import UpcomingTasks from './UpcomingTasks';

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
					style={{ marginRight: 10, fontWeight: '200' }}
					iconStyle={{ fontWeight: '200' }}
				/>
			),
		};
	};
	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1 }}>
				<TimerTwo />
				<ScrollView>
					<CurrentTask />
					<UpcomingTasks />
				</ScrollView>
			</View>
		);
	}
}
