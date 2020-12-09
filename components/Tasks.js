import React, { Component } from 'react';
import { Text, View, FlatList, ScrollView, StyleSheet } from 'react-native';
import Task from './Task';

export default class Tasks extends Component {
	render() {
		return (
			<View>
				<Task />
			</View>
		);
	}
}
const styles = StyleSheet.create({});
