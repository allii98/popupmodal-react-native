import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalisopen : false
    };
  }

  render() {
    return (
       <View style={{flex: 1}}>
          <Modal isVisible={this.state.modalisopen}>
            <View style={{
               backgroundColor:'#ffffff',
               borderRadius: 10
               }}>
               <View style={{
                 justifyContent: 'center',
                 alignItems: 'center',
                 backgroundColor: '#900',
                 paddingVertical: 20,
                 borderTopRightRadius: 10,
                 borderTopLeftRadius: 10
               }}>
                 
              <Icon name="exclamation-triangle" size={50} color="#ffffff" />
               </View>
               <Text style={{textAlign:'center', fontWeight:'bold', fontSize:22, marginTop: 15}}>Warning!</Text>
               <Text style={{textAlign:'center'}}>Ada error</Text>
               <TouchableOpacity style={{
                 backgroundColor: '#900',
                 marginTop: 20,
                 paddingVertical:10,
                 borderBottomRightRadius: 10,
                 borderBottomLeftRadius: 10
               }} onPress={() => this.setState({modalisopen:false})}>
                  <Text style={{textAlign:'center', color: '#ffffff'}}>Close</Text>
               </TouchableOpacity>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => this.setState({modalisopen:true})}>
            <Text>Show modal</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
