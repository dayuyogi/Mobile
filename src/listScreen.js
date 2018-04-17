
import React from 'react';
import { Text, Image, TextInput, View, StyleSheet, FlatList, KeyboardAvoidingView, RefreshControl, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class listScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
}

  componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'https://dayuyogi.000webhostapp.com/API/getData.php';
       //this.setState({ loading: true });
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false, 

          });
        }
      );
    });
  }
  _keyExtractor = (item, index) => item.nis;
    render() {
      return (
  <View style={ styles.containerMain }>
  <View style={styles.box1}>
  <Text style={styles.TextHeader}>DAFTAR ABSENSI</Text>
        </View>

            <FlatList
              data={this.state.data}
              renderItem={({item}) =>
                <View style={styles.ListItem}>
                  <Text>nama : {item.nama}</Text>
                  <Text>nis :{item.nis}</Text>
                  <Text>keterangan : {item.keterangan}</Text>
                  <Text>alasan : {item.alasan}</Text>

                </View>
          }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.componentDidMount.bind(this)}
            />
          }
          />
     </View>

      );
    }
  }


const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20
    },

    TextInput: {
      textAlign: 'center',
      height: 40,
      backgroundColor : "#fff",
      borderWidth: 1,
      borderColor: '#81C784',
      borderRadius: 10,
      marginBottom: 15,
      width: '95%'
    },

    TouchableOpacityStyle: {
      paddingTop:10,
      paddingBottom:10,
      backgroundColor:'#43A047',
      marginBottom: 30,
      width: '75%',
      borderRadius: 10
    },

    TextStyle: {
       color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    TextHeader: {
        fontSize: 30,
        color: '#66BB6A',
        fontWeight: 'bold'
    },
    box1: {
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
      //  backgroundColor:'#EC407A',
        marginBottom: 10,
    },
    ListItem: {
          backgroundColor:'#81C784',
          marginTop: 5,
          flex: 1,
          width: 300,
          height: 100,
          borderRadius: 7,
      },
  });
