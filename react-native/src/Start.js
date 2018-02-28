/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  WebView,
  Button,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';


export default class Start extends Component<{}> {
  static navigationOptions = {
        header: null
    }
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isReady:false,
      email:'',
      name:'',
      amount:0,
      card_no:'',
      exp:'',
      cvv:'',
      exp_m:'',
      exp_y:'',
    }
  }

   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handleName = (text) => {
      this.setState({ name: text })
   }
   handleAmount = (text) => {
      this.setState({ amount: text })
   }
   handleCardNumber = (text)=> {
      this.setState({ card_no: text })
   }
   handleExpiry = (text)=> {
      if(text.length== 2 && this.state.exp.length <2){
        text = text.concat('/') 
      }
      this.setState({ exp: text })
      if(text.length==5){
        let a = text.slice(0,2)
        let b = text.slice(3)
        this.setState({ exp_m: a })
        this.setState({ exp_y: b })
      }
   }
   handleCvv = (text) => {
      this.setState({ cvv: text })
   }



  handleRequest=()=> {

    var details = {
    'card[name]':this.state.name,
    'card[number]':this.state.card_no,
    'card[exp_month]':this.state.exp_m,
    'card[exp_year]':this.state.exp_y,
    'card[cvc]':this.state.cvv
  };

  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  return fetch('https://api.stripe.com/v1/tokens', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer pk_test_OgtpYLyOzrBnlokVVbc4rlhG'
    },
    body: formBody
  })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.id,
        }, function() {
            
        });
        this.props.navigation.navigate('MainView',
            {
                itemId:this.state.dataSource,
                amount:(this.state.amount),
                email:this.state.email
            });
      })
      .catch((error) => {
        console.error(error);
      });
    }
  render() {
    return (

      <View style={styles.container}>
           <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               keyboardType = "email-address"
               onChangeText = {this.handleEmail}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "words"
               onChangeText = {this.handleName}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Amount"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               keyboardType = "numeric"
              
               onChangeText = {this.handleAmount}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Card Number"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               keyboardType = "numeric"
               maxLength = {16}
              
               onChangeText = {this.handleCardNumber}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Expiry(MM/YY)"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               value={this.state.exp}
               maxLength = {5}
               keyboardType = "numeric"
               onChangeText = {this.handleExpiry}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "CVV"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               maxLength = {3}
               keyboardType = "numeric"
              
               onChangeText = {this.handleCvv}
               />
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {this.handleRequest}>
                <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
       </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
  },
  input: {
      margin: 15,
      height: 40,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft:10
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white'
   }
});
