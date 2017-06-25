import React, { Component } from 'react';
import {
	Image,
	View,
	TextInput
} from 'react-native';

export default class Search extends Component {

	static navigationOptions = {
		tabBarIcon: () => {
			return <View style={{flex:1, flexDirection: 'row', justifyContent: 'flex-start', alignItems:'center'}}>
						<Image source={require('../img/search.png')} style={{width:30, height: 30}} />
					</View>
		}
	}

	constructor (props) {
		super(props)
		this.state = {
			city:  "Paris", 
		}
	}

	// componentDidMount() {

 //        navigator.geolocation.getCurrentPosition(
 //          (position) => {
 //            let initialPosition = JSON.stringify(position);
 //            this.setState({
 //                longitude: position.coords.longitude,
 //                latitude:  position.coords.latitude
 //            });
 //        },
 //        (error) => alert(JSON.stringify(error)),

 //        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

 //        );

 //        this.watchID = navigator.geolocation.watchPosition((position) => {
 //          let lastPosition = JSON.stringify(position);
 //          this.setState({lastPosition});
 //      });
 //    }

 //    componentWillUnmount() {
 //        navigator.geolocation.clearWatch(this.watchID);
 //    }

	


	submit(city) {	
		this.props.navigation.navigate('Main', {"city" : this.state.city })
	}

	render() {
		return(
			<View>
				<TextInput
					style={{height: 50, borderColor: '#fff',color: 'white',borderWidth: 1, borderRadius: 25, paddingHorizontal:30, marginTop:90}}
					placeholder="Chercher une ville"
					placeholderTextColor="#fff"
					multiline = {false}
					onChangeText={(text) => {
						this.setState({city: text})
					}}					
					onBlur={ ()=> this.submit() }
					onSubmitEditing={ () => this.submit() }
				/>
			</View>
		)
	}
}