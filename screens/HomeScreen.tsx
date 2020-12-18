import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, TextInput, ScrollView, SafeAreaView, FlatList, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

// <span>Photo by <a href="https://unsplash.com/@jenrielzany?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Zany Jadraque</a> on <a href="https://unsplash.com/s/photos/gaming?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

const fakedata = [
    {
        id: 1,
        title: "Travelling to Dalat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
        imgurl: require("../assets/images/map.png")
    },
    {
        id: 2,
        title: "Travelling to Las Vegas",
        description: "Vegas ipsum dolor sit amet, consectetur adipisicing elit.",
        imgurl: require("../assets/images/map2.png")
    },
    {
        id: 3,
        title: "Travelling to Kuala Lumpua",
        description: "Kuala Lumpua ipsum dolor sit amet, consectetur adipisicing elit.",
        imgurl: require("../assets/images/map3.png")
    },
    {
        id: 4,
        title: "Travelling to Moscow",
        description: "Moscow ipsum dolor sit amet, consectetur adipisicing elit.",
        imgurl: require("../assets/images/map4.png")
    },
    {
        id: 5,
        title: "Coding this screen",
        description: "Bombay ipsum dolor sit amet, consectetur adipisicing elit.",
        imgurl: require("../assets/images/map5.png")
    },

]

const Item = ({title, description, imgurl}) => (
    <View>
    <Image source={imgurl} style={{
            width:128, 
            height:128,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "lightgray",
            marginBottom: 15
        }} />
    <Text style={{fontSize: 14, color:"black", fontFamily:"open-sans-bold"}}>{title}</Text>
    <Text style={{color:"black", fontSize:12, fontFamily:"open-sans-italic"}}>{description}</Text>
    </View>
);

export default function HomeScreen({navigation:{navigate}}) {
  
    const [focus, setFocus] = React.useState(false);
    const txStyle = focus ? styles.textinputfocus : styles.textinput;

    const renderItem = ({item}) => (
        <TouchableOpacity style={{ 
            alignItems: "center", 
            // justifyContent: "center", 
            width: 140, 
            marginHorizontal: 10,
            backgroundColor: "white",
            borderRadius: 10,
            padding: 5
        }} onPress={()=>navigate('NotFound')} >
            <Item title={item.title} description={item.description} imgurl={item.imgurl} />
        </TouchableOpacity>
    );

  return (
    <ScrollView>
    <ImageBackground 
        source={require('../assets/images/bg.jpg')}
        style={{
            flex: 1, 
            flexDirection: "column", 
            resizeMode: "cover", 
            paddingHorizontal: 15, 
            paddingTop: 40,
        }}
    >
        <View style={{ 
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: null
        }}>
            <TouchableOpacity style={{width: "50%", backgroundColor: null}}>
                <Ionicons name="basketball-outline" color="white" size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={{width:"50%", alignItems:"flex-end", backgroundColor: null}}>
                <Ionicons name="person-circle-outline" color="white" size={30} />
            </TouchableOpacity>
        </View>

        <View style={{marginTop:15}}>
            <Text style={styles.h1}>Hello, Tran</Text>
        </View>

        <View style={{ 
            flexDirection:"row", 
            marginTop:15, 
            // backgroundColor: "red",
            alignItems: "center",
        }}>
            <Ionicons name="search-outline" color="white" size={20} style={{
                // backgroundColor: "black",
                width: 30,
                marginRight: -30,
                paddingLeft: 10,
            }}/>
            <TextInput 
                style={txStyle} 
                placeholder="Type something to search" 
                placeholderTextColor="lightgray"
                onFocus={()=>setFocus(true)}
                onBlur={()=>setFocus(false)}
            />
        </View>
        
        <SafeAreaView style={{}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
            marginTop: 30,
            // paddingHorizontal: 20,
            // height: 60,
            // backgroundColor: "yellow",
        }}>
            <View style={[{backgroundColor: "red"}, styles.slidingItemView]}>
                <TouchableOpacity>
                    <Ionicons name="airplane-outline" color="white" size={30} style={{}} />
                </TouchableOpacity>
            </View>
            
            <View style={[{backgroundColor: "purple"}, styles.slidingItemView]}>
                <TouchableOpacity>
                    <Ionicons name="analytics-outline" color="white" size={30} style={{}} />
                </TouchableOpacity>
            </View>
            
            <View style={[{backgroundColor: "orange"}, styles.slidingItemView]}>
                <TouchableOpacity>
                    <Ionicons name="barcode-outline" color="white" size={30} style={{}} />
                </TouchableOpacity>
            </View>
            
            <View style={[{backgroundColor: "blue"}, styles.slidingItemView]}>
                <TouchableOpacity>
                <Ionicons name="bicycle-outline" color="white" size={30} style={{}} />
                </TouchableOpacity>
            </View>
            
            <View style={[{backgroundColor: "green"}, styles.slidingItemView]}>
                <TouchableOpacity>
                <Ionicons name="book-outline" color="white" size={30} style={{}} />
                </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>

        <View style={{marginTop:15}}>
            <Text style={styles.h2}>Recommended</Text>
            <Text style={{fontSize:13, color:"lightgray", fontFamily:"open-sans", backgroundColor:null}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </Text>
        </View>

        <SafeAreaView style={{
            // backgroundColor: "white",
            marginTop: 15
        }}>
            <FlatList 
                horizontal
                data = {fakedata}
                renderItem = {renderItem}
                keyExtractor = {item=>item.id}
            />
        </SafeAreaView>

        {/* MUSIC PLAYER */}
        <SafeAreaView style={{
            backgroundColor:"white",
            flexDirection: "row",
            // flex: 1,
            height: 80,
            borderRadius: 10,
            marginVertical: 15,
            padding: 15
        }}>
            <View style={{
                alignItems: "flex-start", //align is for horizontal (if colum)
                justifyContent: "center", //justify is for vertical (if colum)
                flex: 0.5,
                flexDirection: "column",
                // backgroundColor: "purple"
            }}>
                <Text style={[styles.h2, {color: "purple", }]}>Queen</Text>
                <Text style={{
                    color: "gray",
                    fontSize: 16,
                }}>You wanna rock</Text>
            </View>

            <View style={{ 
                // backgroundColor: "red",
                alignItems: "center", //align is for vertial (if row)
                justifyContent: "flex-end", //justify is for horizontal (if row)
                flexDirection: "row",
                flex: 0.5,
            }}>
                <TouchableOpacity style={{marginHorizontal: 3}}>
                    <Ionicons name="play-outline" size={24} color="#2d2d2d" style={{}}></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 3}}>
                    <Ionicons name="pause" size={24} color="#2d2d2d"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 3}}>
                    <Ionicons name="heart-outline" size={24} color="#2d2d2d"></Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 3}}>
                    <Ionicons name="repeat-sharp" size={24} color="#2d2d2d"></Ionicons>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        {/* END OF MUSIC PLAYER */}

    </ImageBackground>
    </ScrollView>
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
  h1: {
      fontSize:20, 
      color:"white", 
      fontFamily:"open-sans-bold", 
      backgroundColor:null
  },
  h2: {
    fontSize:16, 
    color:"white", 
    fontFamily:"open-sans-bold", 
    backgroundColor:null
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textinput: {
    width: "100%",
    height:40,
    borderColor:"lightgray", 
    borderWidth:1,
    // marginLeft: 30,
    paddingLeft:40,
    borderRadius:20,
    // backgroundColor:"yellow"
  },
  textinputfocus: {
    width: "100%",
    height:40,
    borderColor:"white", 
    borderWidth:1,
    // marginLeft: -35,
    paddingLeft:40,
    borderRadius:20,
    color: "white",
  },
  slidingItemView: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 60,
    marginRight: 20,
  }
});
