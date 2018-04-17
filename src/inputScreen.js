import React from 'react';
import { Text, Image, TextInput, View, StyleSheet, FlatList, KeyboardAvoidingView, RefreshControl, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class inputScreen extends React.Component {
  constructor()
    {
        super();

        this.state = {
          nama: '',
          nis: '',
          alasan: '',
          keterangan: '',
          ActivityIndicator_Loading: false,

        }
    }

    SimpanData = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('https://dayuyogi.000webhostapp.com/API/sentData.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  nis : this.state.nis,
                  alasan : this.state.alasan,
                  keterangan : this.state.keterangan,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
              alert(responseJsonFromServer);
              this.setState({ ActivityIndicator_Loading : false});
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

  render() {
    return (
       <View style = { styles.containerMain }>
        
       <View style={styles.box1}>
         <Text style = {styles.TextHeader}>ABSENSI SISWA</Text>
       </View>
        <Image
          source={require('./1.jpg')}
          style={{width: 100, height: 100}}
        />

      <TextInput
        placeholder = "masukkan nama"
        style = { styles.TextInput }
        underlineColorAndroid = "transparent"
        onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

      <TextInput
        placeholder = "masukkan nis"
        style = { styles.TextInput }
        underlineColorAndroid = "transparent"
        keyboardType="numeric"
        onChangeText = {(TextInputText) => this.setState({ nis: TextInputText })} />

      <TextInput
        placeholder = "masukkan keterangan"
        style = { styles.TextInput }
        underlineColorAndroid = "transparent"
        keyboardType="text"
        onChangeText = {(TextInputText) => this.setState({ keterangan: TextInputText })} />

        <TextInput
        placeholder = "masukkan alasan"
        style = { styles.TextInput }
        underlineColorAndroid = "transparent"

        onChangeText = {(TextInputText) => this.setState({ alasan: TextInputText })} />

              <TouchableOpacity
                activeOpacity = { 0.5 }
                style = { styles.TouchableOpacityStyle }
                onPress = { this.SimpanData }>

                  <Text style = { styles.TextStyle }>Simpan</Text>

              </TouchableOpacity>
               {
                  this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }
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
  });