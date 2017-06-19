import React, { Component } from 'react';
import {
	Text,
	Image,
	View
} from 'react-native';

export default class Main extends Component {

	static navigationOptions = {
		tabBarIcon: () => {
			return <Image source={require('../img/menu.png')} style={{width:40, height: 10}} />
		}
	}

	render() {
		return(
			<View>
				<Text style={{color: 'red'}}>View Main</Text>
			</View>
		)	
	}
}