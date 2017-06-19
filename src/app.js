import React, { Component } from 'react';
import {
  //AppRegistry,
  StyleSheet,
  //TouchableHighlight,
  //ScrollView,
  //RefreshControl,
  //Text,
  StatusBar,
  View
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import Search           from './components/Search.js';
import Main           from './components/Main.js';
//import Weather     		from './WeatherApi';
//import Swiper           from 'react-native-swiper';


const Nav = TabNavigator({
    Search : {screen : Search},
    Main: {screen : Main}
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        style: {
            backgroundColor: '#17182D',
          },
    }
})

class App extends Component {


    render() {
        return (

            <View style={styles.container} >
                <StatusBar hidden={true} />
                <View style={styles.header}>
                    <Nav />
                </View>
            </View> 
            
        );
    }
}
	// constructor(props) {
	//     super(props);
	//     this.state = {	
	//     	isRefreshing: false,
 //            longitude:    'unknown',
 //            latitude:     'unknown',
 //            renderIsDone: false,
	//     	weather:      null
	//     };
	//     this.Weather = new Weather;
 //        this.count   = 0;
 //        this.watchID = null;
 //        this.weather = null;
	// }

    
 //    componentDidMount() {

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

	// render() {this.count++
 //        console.log(this.count)
	//     return (
	//     		<ScrollView
	// 		        style={styles.scrollview}
	// 		        refreshControl={
	// 		          <RefreshControl
	// 		            refreshing={this.state.isRefreshing}
	// 		            onRefresh={() => this.onRefresh()}
	// 		            tintColor="#FFF"
	// 		            title="Wait..."
	// 		            titleColor="#fff"
	// 		            colors={['#ff0000', '#00ff00', '#0000ff']}
	// 		            progressBackgroundColor="#fff"
	// 		          />
	// 		        }>
	// 	    		<View style={styles.container} >
	// 		    		<StatusBar barStyle='light-content' backgroundColor="#242322" />
	// 		    		<View style={styles.header}>
 //                            {(this.weather === null && this.state.renderIsDone === false) ? this.loadWeather(this.state.latitude+','+this.state.longitude) : console.log('') }

	// 		    			<View style={styles.timerWrapper}>
 //                                {this.weather === null  ? this.renderLoading() : this.renderWeather()}
	// 		    			</View>
	// 		    		</View>
	// 		    	</View>	
	// 	    	</ScrollView>
	//     	);
	// }

	// onRefresh() {
	// 	this.setState({isRefreshing: true});

	// 	//this.renderWeather();

	//     setTimeout(() => {
	    	
	//       	this.setState({
	//         	isRefreshing: false,
	//       	});
	//     }, 2000);
	// }
    

	// loadWeather(location) {        
 //        if (this.state.latitude === 'unknown' || this.state.longitude === 'unknown') {
 //            this.weather = null;
 //        } else {
 //            let opt = {
 //                location: location, 
 //                woeid: "",
 //                unit: 'c',
 //                return: (weather) => {
 //                    this.weather = weather ;
 //                    this.render();
 //                }
 //            }
 //            this.Weather.simpleWeather(opt);
 //        }
		
	// }

 //    renderWeather() {
 //        console.log('time 1')
 //        setTimeout(() => {
 //            console.log('time 2')
 //            if (!this.state.renderIsDone) {
 //               this.setState({
 //                    renderIsDone: true
 //                }); 
 //            }
            
 //            //this.onRefresh();  
 //        }, 1);
 //        console.log('time 3')
 //        return (<View>
 //                        <Text style={[styles.text, styles.timer]} > 
 //                        {this.weather.city}
 //                        </Text>
 //                        <Text style={[styles.text, styles.timer]} > 
 //                        {this.weather.temp+"°C"}
 //                        </Text>
 //                    </View>)

 //    }

 //    renderLoading() {
 //        return (<Text style={[styles.text, styles.timer]} > 
 //                    Chargement
 //                </Text>)        
 //    }
//}

const styles = StyleSheet.create({
  	container: {
  		flex:            1, 
  		alignItems: 	'stretch',
  		padding:         10,
  		backgroundColor: '#17182D'
  	}, 
  	text: {
  		color: "#fff",
  		fontFamily:'Avenir'  		
  	},
  	header: {
  		flex: 1
  	},
  	scrollview: {
	    flex: 1,
	    backgroundColor: '#17182D'
	  },
  	footer: {
		flex: 1
  	},
  	timerWrapper: {
  		flex:           5,
  		justifyContent: 'center',
  		alignItems:     'center'
  	},
  	buttonWrapper: {
  		flex:           3,
  		flexDirection:  'row',
  		justifyContent: 'space-around',
  		alignItems:     'center'
  	},
  	timer: {
  		fontSize: 60
  	},
  	buttonLap: {
  		borderWidth:      1,
  		borderColor: 	 '#22DDF2',
  		height:          50,
  		width:           100,
  		borderRadius:    50,
  		justifyContent: 'center',
  		alignItems :     'center'
  	},
  	buttonStart: {
  		borderWidth:      1,
  		borderColor: 	 '#1CF20A',
  		height:          50,
  		width:           100,
  		borderRadius:    50,
  		justifyContent:  'center',
  		alignItems :     'center'
  	},
  	buttonStop: {
  		borderWidth:      1,
  		borderColor: 	 '#F23535',
  		height:          50,
  		width:           100,
  		borderRadius:    50,
  		justifyContent: 'center',
  		alignItems :    'center'
  	},
  	lap : {
  		justifyContent:   'space-around',
  		flexDirection:    'row',
  		borderWidth:      1,
  		borderColor: 	  '#fff',
  		borderRadius:     50,
  		padding: 		  10,
  		margin:           10
 
  	},
  	lapText: {
  		fontSize:         20,
  		color:    	      '#fff'
   	},
   	containerResult: {
   		backgroundColor: '#17182D',
   		flex:            1, 
  		alignItems: 	'center',
  		padding:         10
   	},
   	showTime: {
   		flex:1,
   		alignItems: 'center',
   		justifyContent: 'flex-end'
   	},
   	resultWrapper: {
		flexDirection: 'row', 
		flex: 7,
		alignItems: 'center'		
   	},
   	bar: {
   		flex:1,
   		borderWidth: 3,
   		borderColor: '#17182D'
   	},
   	preview: {
	    flex: 1,
	    justifyContent: 'flex-end',
	    alignItems: 'center'
  	},
  	textShowTime:{
  		fontSize:         25,
  		color:    	      '#fff'
  	},
  	capture: {
	    flex: 0,
	    backgroundColor: '#fff',
	    borderRadius: 5,
	    color: '#000',
	    padding: 10,
	    margin: 40
  	}
});



export default App;