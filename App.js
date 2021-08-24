import React from 'react';
import MusicList from './MusicList';
import MiniPlayer from './MiniPlayer';
import{
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';


export default class App extends React.Component{
  render(){
    
    
    return(
      <SafeAreaView style = {styles.container}>
        <View style={styles.top}>
          <Text style = {{fontSize: 30, marginLeft: 10,}}>
            재생목록
          </Text>
        
          
          

        </View>

        <View style = {styles.musiclist}>

          {/*<ImageBackground
          source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          style={styles.bgImage}
          ></ImageBackground> */}

          <MusicList />
          
      
        </View>
       
       
        <View style = {styles.bottom}>
          <MiniPlayer/>       
    

        </View>
      </SafeAreaView>
    );
  } // render method
  

}//Main class

const styles = StyleSheet.create({
  //bgImage: {width: '50%', height: '50%'},
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  top: {
    flex: 1.5,
    backgroundColor: 'white',
    justifyContent: 'center',
  },

  musiclist: {
    flex: 7, 
    backgroundColor: 'white',
  },

  bottom: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },


});