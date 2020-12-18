import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { Text, Icon } from 'react-native-elements';

export default class TimerTwo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			run: false,
			showMsg: false,
		};
	}

	handlePause() {
		this.setState((prevState) => ({
			run: !prevState.run,
			showMsg: !prevState.showMsg,
		}));
		this.state.run ? Alert.alert('Paused', 'Tap again to resume') : null;
	}

	render() {
		return (
			<View style={{ backgroundColor: 'black', alignItems: 'center' }}>
				<View
					style={{
						marginTop: 30,
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: 30,
						width: 200,
						height: 200,
						borderRadius: 200 / 2,
						backgroundColor: '#11FF9B',
						alignItems: 'center',
						justifyContent: 'center',
						shadowColor: '#BED604',
						shadowOpacity: 0.5,
						shadowRadius: 20,
						elevation: 1,
						zIndex: 0,
						fontWeight: '200',
					}}
				>
					<Text>
						<CountDown
							until={1500}
							onFinish={() => alert('Finished!')}
							onPress={() => {
								this.handlePause();
							}}
							running={this.state.run}
							size={45}
							digitStyle={{
								marginTop: 10,
								marginLeft: -15,
								marginRight: -15,
							}}
							timeToShow={['M', 'S']}
							timeLabels={{ m: null, s: null }}
							showSeparator
						/>
					</Text>
					<View style={{ zIndex: 1, marginTop: -50 }}>
						<Icon
							iconStyle={{
								marginTop: 20,
								color: 'black',
								fontSize: 40,
							}}
							name={!this.state.run ? 'play-circle-o' : 'pause-circle-o'}
							type='font-awesome'
							onPress={() => {
								this.handlePause();
							}}
						/>
					</View>
				</View>
			</View>
		);
	}
}
