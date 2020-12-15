import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default class TimerTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			run: false,
		};
	}

	handlePause() {
		this.setState((prevState) => ({
			run: !prevState.run,
		}));
		this.state.run ? Alert.alert('Paused', 'Tap again to resume') : null;
	}

	render() {
		return (
			<View style={{ backgroundColor: 'black', flex: 1, alignItems: 'center' }}>
				<View
					style={{
						marginTop: 30,
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Text
						style={{
							color: 'black',
							fontSize: 50,
						}}
					>
						<CountDown
							until={1500}
							onFinish={() => alert('Finished!')}
							onPress={() => {
								this.handlePause();
							}}
							running={this.state.run}
							size={45}
							digitStyle={{
								backgroundColor: '#11FF9B',
								borderWidth: 0,
								borderRadius: 25,
							}}
							timeToShow={['M', 'S']}
							timeLabels={{ m: null, s: null }}
						/>
					</Text>
				</View>
			</View>
		);
	}
}
