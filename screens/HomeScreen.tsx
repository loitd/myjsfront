import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity, View, Text, TextInput, ScrollView, SafeAreaView, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

// <span>Photo by <a href="https://unsplash.com/@linusmimietz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Linus Mimietz</a> on <a href="https://unsplash.com/s/photos/technology?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

const fakedata = [
    {
        id: 1,
        title: "Travelling to Dalat",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. "
    },
    {
        id: 2,
        title: "Travelling to Las Vegas",
        description: "Vegas ipsum dolor sit amet, consectetur adipisicing elit."
    },

]

const Item = ({title, description}) => (
    <View style={{ alignItems: "center", justifyContent: "center", width: 200 }}>
        <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
        <Text style={{fontSize: 30}}>{title}</Text>
        <Text>{description}</Text>
    </View>
);

export default function HomeScreen() {
  
    const [focus, setFocus] = React.useState(false);
    const txStyle = focus ? styles.textinputfocus : styles.textinput;

    const renderItem = ({item}) => (
        <Item title={item.title} description={item.description}/>
    );

  return (
    <ImageBackground 
        source={require('../assets/images/bg.jpg')}
        style={{
            flex: 1, 
            flexDirection: "column", 
            resizeMode: "cover", 
            paddingHorizontal: 20, 
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
            <Text style={{fontSize:30, color:"white", fontFamily:"open-sans", backgroundColor:null}}>Hello</Text>
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
            <Text style={{fontSize:18, color:"white", fontFamily:"open-sans", backgroundColor:null}}>Recommended</Text>
            <Text style={{fontSize:13, color:"lightgray", fontFamily:"open-sans", backgroundColor:null}}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            </Text>
        </View>

        <SafeAreaView style={{
            backgroundColor: "white",
            marginTop: 15
        }}>
            <FlatList 
                horizontal
                data = {fakedata}
                renderItem = {renderItem}
                keyExtractor = {item=>item.id}
            />
        </SafeAreaView>
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
