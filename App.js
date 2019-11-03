import React, {Component} from 'react';  
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';  
  




export default class App extends Component {  


	constructor(props) {
		super(props);
		this.state = {		//initializes dinamic states
			speedValue: 15,
			x: '0%',		//  coordinates for square
			y: '0%',
			visible: false	// square showed or hidden
		};

	}


	/* Just one function to increase and decrease speed through the sign */
    modifySpeed = (sign) => this.setState({	
    								speedValue: (this.state.speedValue + sign*0.5 )		//the sign increases or decreases the speed
    							})  


    // gets random number from 0 to 2 in order to choose the detections coordinates in the objects array
    _GenerateRandomNumber = () => {
	 
		var randomNumber = Math.floor(Math.random() * 3);
		return(randomNumber) 
	}


	// stores coordinates from detections objects array through 0 to 2 random number
	setCoordinates = (det) => {

		var index = this._GenerateRandomNumber();		// get random index
	
		this.setState({			// stores in dinamic states
			x: det.detections[index].top,
			y: det.detections[index].left
		})
	}



	// toggles on/off square
	toggleSquares = () => {

		this.setState({	
				visible: !this.state.visible	//invert visible
		});
	}	





    render() {  

    	let pic = {
    		uri: 'https://gitlab.com/nacho.carnicero/mobile-internship-exercice/raw/master/assets/pylon.jpg'
    		};

    	// detections objects array
    	var det = {"detections": [{ "top": "50%", "left": "50%" }, { "top": "25%", "left": "30%" }, { "top": "60%", "left": "10%" }]};



        return (  


	    	<ImageBackground source={pic} style={{width: '100%', height: '100%'}}> 


			{ /* View containing all elements in the bottom bar */	 }
            <View style={styles.speedBar}> 	 

	            <View style={styles.container}>
			        <View style={styles.buttonContainer}>	
			          <Button 										 /* speed decreasing button */ 
			            onPress={this.modifySpeed.bind(this, -1)} 	 /* -1 to change the sign in the function and decrease the speed */  
			            title="-speed"
			          />
			        </View>
			    </View>            	 
                

                { /* View for Speed text and its dinamic value */ }
                <View styles={styles.speedContainer}>

	                <Text style={styles.speedText}> Speed </Text>

	                { /* speedValue changes dinamically because it is a state */ }		
	                <Text style={styles.speedText}> {this.state.speedValue} </Text> 	
              	</View>


	            <View style={styles.container}>
			        <View style={styles.buttonContainer}>	
			          <Button 										 /* speed increasing button */ 
			            onPress={this.modifySpeed.bind(this, +1)}	/* same function of decreasing speed*/
			            title="+speed"
			          />
			        </View>
		        </View>
				
		        { /* white line in order to separate speed and fetching areas */ }
		        <View style={{ 
					    backgroundColor: "white",
					    width: 4,
					    height: 65}}
					/>


				<View style={styles.container}>
				    <View style={styles.buttonContainer}>
			          <Button 										/* Fetch button */
			          onPress={this.setCoordinates.bind(this, det)}	/* on press, set the coordinates for square */		
			            title="Fetch"
			          />
			        </View>

			        <View style={styles.buttonContainer}>	
			          <Button 							 /* Toggle On/Off button that shows or hides the square */
			          onPress={this.toggleSquares}		 /* on press, toggle visibility state */	
			            title="On/Off"
			          />
			        </View>
			    </View>


			    { /* square which is showed or hidden by visible state */ }
				<View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} > 

        			{ this.state.visible  ? ( 		 /* if visible than View, else null */ 
					<View
					  style={{
					  	position: 'absolute',
					    top: this.state.x,
					    left: this.state.y,
					    borderWidth: 4,
					    borderColor: "red",
					    backgroundColor: "transparent",
					    width: 50,
					    height: 50
					  }}
					></View>				) : null }
					
				</View>

						
		    </View>

			</ImageBackground>

        );  
    }  
}


const styles = StyleSheet.create({
	container: {
	    margin: 1,
	    flexDirection: 'row',
	    justifyContent: 'space-between'
	},
	buttonContainer: {
	    margin: 20,
	    width: 100
	},
	speedBar: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	speedContainer: {
	  	flex:1,
	  	flexDirection: 'column',
	  	justifyContent: 'flex-end',
	  	alignItems: 'center'
	},
	speedText: {
	  	color: 'white',
	  	fontWeight: 'bold',
	  	fontSize: 25 
	},
});