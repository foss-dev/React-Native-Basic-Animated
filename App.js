//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Animated,StatusBar,SafeAreaView,Easing } from 'react-native';

// create a component
class App extends Component {

  componentDidMount()
  {
    this.startAnimation();
  }


  state={
    animation : new Animated.Value(0),
  };

  startAnimation = () =>{
    Animated.loop(Animated.timing(this.state.animation,{
      duration:2000,
      toValue:1,
      easing:Easing.linear
    })).start();
  }

render(){

  const interpol = this.state.animation.interpolate({
    inputRange : [0,1],
    outputRange : ['0deg','360deg'],
  });

  const animatedStyle={
    transform :[{
      rotate:interpol,
    }]
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
        <Animated.Image
        style={[styles.spinner,animatedStyle]}
        source={require("./images/pervane.png")}
        resizeMode="contain"
        />
        <Animated.Image
        style={styles.bar}
        source={require("./images/cubuk.png")}
        resizeMode={"contain"}
        />
       </View>

      </SafeAreaView>
    </>
  );
};

}


const styles= StyleSheet.create({
  container:{
    flex:1,
  },
  box:{
    flex:1,
    alignSelf:'center',
    justifyContent:'center'
  },
  spinner:{
    width:250,
    height:280,
    zIndex:2,
  },
  bar:{
  width:55,
  height:400,
  alignSelf:'center',
  marginTop:-120,
  zIndex:1,
  }

})


export default App;

