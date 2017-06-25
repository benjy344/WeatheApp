import React, { Component } from 'react'
import {
	ListView, 
	FlatList,
	Text
} from 'react-native'
import Row from './Row'

export default class ListDay extends Component {

	static propTypes = {
		list: React.PropTypes.array
	}

	constructor (props) {
		super(props)
		
		
	}

	render() {
		
		let array = this.props.list.splice(5, 6, 7, 8, 9)
		//console.log(array)

		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

		
		return(
			
			<FlatList
				horizontal={true}
				style= {{flex:3, flexDirection:'row'}}
		        data = { array }//ds.cloneWithRows( array ) }
		        keyExtractor={ (item, index) => index }
		        renderItem={ (row) => <Row day={row} />}

		      />
			)	
		
	}
}