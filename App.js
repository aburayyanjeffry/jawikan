import React from 'react';
import { AppRegistry, StyleSheet,Text, TextInput, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {input: 'output text'};
  }

 

  render() {
    const handlePress = () => false
    return (
      
      <View style={styles.container}>
        <TextInput 
        style={styles.boxy}
        placeholder="input text"
        onSubmitEditing={({nativeEvent}) => this.setState({input: nativeEvent.text})} />
        <Text
        style={styles.boxy}>{this.state.input}</Text>
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#0000'
  },

  boxy: {
    width: 200, 
    borderColor: 'black', 
    borderWidth: 1,  
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

});


AppRegistry.registerComponent('Jawikan', () => App);