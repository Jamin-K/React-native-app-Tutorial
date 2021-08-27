import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';

const path = 'C:\Users\developkim\testApp\장범준-고백.mp3';
let songState = 0; //0=정지

function MiniPlayer(){
  const [state, setState] = useState('play-sharp');

  function ClickPlayBtn(){
    if(songState == 0 ){
      songState=1;
      setState('pause-sharp');
      return alert("play");
    }
    else if(songState == 1){
      songState=0;
      setState('play-sharp')
      return alert("pause");
    }
    else{
      return alert("Error!");
    }
  
  };



  return(
    
    <View style = {styles.bottomContainer}>

      <View style = {styles.playDetail}>
        <Text style={{fontSize: 18, color: "#191919"}}>제목</Text>
        <Text style={{color: "#b5b5b5"}}>가수이름</Text>
      </View>

      <View style = {styles.playIcon}>
        <Icon size={35} name="play-skip-back-sharp" color="black" onPress={() => alert('back skip')}/>
        <View style= {{paddingLeft: 10,}}>
          <Icon size={35} name={state} color="black" onPress={() => ClickPlayBtn()}/>
        </View>

        <View style= {{paddingLeft: 10,}}>
          <Icon size={35} name="play-skip-forward-sharp" color="black" onPress={() => alert('foward skip')}/> 
        </View>
        
        
      </View>

    </View>

  );

}



const styles = StyleSheet.create({
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',

  },
  playIcon: {
    flexDirection: 'row',
    paddingLeft: 185,
  },

  playDetail: {
    paddingLeft: 15,
  }

});

export default MiniPlayer;
