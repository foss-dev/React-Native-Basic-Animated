import React, { Component } from 'react';
import { View, StyleSheet, Platform, Animated, ScrollView, } from 'react-native';
import { List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';


const HEADER_MIN_HEIGHT = 0;
const HEADER_MAX_HEIGHT = 300;

const data = [
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=26'}
    },
    {
        title:"Rihanna Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=27'}
    },
    {
        title:"Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=29'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=30'}
    },
    {
        title:"Rihanna Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=26'}
    },
    {
        title:"Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=27'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=27'}
    },
    {
        title:"Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    },
    {
        title:"Rihanna Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=26'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=27'}
    },
    {
        title:"Rihanna Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    },
    {
        title:"Rihanna Diamond",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=27'}
    },
    {
        title:"Needed Me",
        body : "Rihanna - baby, this is what you came for lightning strikes every time she moves and every body's watching her . . . ",
        time: "3:43 pm",
        image : {uri: 'https://i.pravatar.cc/150?img=28'}
    }
]

export default class AnimatedList extends Component {

  constructor() {
    super();

    this.scrollYAnimatedValue = new Animated.Value(0);
  }



  renderItem(item,index)
  {
      return (
      <ListItem key={index} avatar onPress={()=>{}}>
      <Left>
          <Thumbnail source={item.image} />
      </Left>
      <Body>
          <Text style={styles.avatarText}>{item.title}</Text>
          <Text style={styles.avatarText} note>{item.body}</Text>
      </Body>
      <Right>
          <Text style={styles.avatarText} note>{item.time}</Text>
      </Right>
      </ListItem>);
  }



  render() {

    const headerHeight = this.scrollYAnimatedValue.interpolate(
      {
        inputRange: [(HEADER_MIN_HEIGHT - HEADER_MAX_HEIGHT), (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
        outputRange: [HEADER_MAX_HEIGHT+ (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT), HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
      });

    return (
      <View style={styles.container} >
        <Animated.Image 
        source={{url:"https://c1.staticflickr.com/7/6209/6126637255_23896dca42.jpg"}} 
        style={[styles.animatedHeaderContainer, { height: headerHeight }]} 
        />
        <ScrollView
          contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT }}
          scrollEventThrottle={()=>{}}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scrollYAnimatedValue } } }]
          )}>
          {
           <List style={{width:'100%'}}>
            {data.map((item,index)=>{
                return this.renderItem(item,index);
            })}
            </List>
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
    animatedHeaderContainer: {
      position: 'absolute',
      left: 0,
      right: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerText: {
      color: 'white',
      fontSize: 22
    },
    item: {
      backgroundColor: '#fff',
      borderBottomWidth:2,
      borderColor:"#eee",
      height: 45,
      justifyContent: 'center',
      alignItems: 'center'
    },
    itemText: {
      color: 'black',
      fontSize: 16
    }
    
  });
