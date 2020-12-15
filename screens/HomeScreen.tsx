import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

export default function HomeScreen() {
  return (
    <ImageBackground 
        source={require('../assets/images/bg.jpg')}
        style={{width: "100%", height:"100%"}}
    >
        <View style={{ 
            flexDirection: "row",
            marginTop: 40,
            alignItems: "center",
            paddingHorizontal: 40,
            backgroundColor: "red"
        }}>
            <TouchableOpacity>
                <Ionicons name="basketball-outline" color="white" size={30} style={{width:20}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{width:"100%", alignItems:"flex-end"}}>
                <Ionicons name="person-circle-outline" color="white" size={30} />
            </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
