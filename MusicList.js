import React from 'react';
import MiniPlayer from './MiniPlayer';
import{
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function MusicList(){ //함수형 컴포넌트
  const musicList = [
    {
      title: '고백',
      artist: '장범준',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '좋은날',
      artist: '아이유',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: 'FAKE LOVE',
      artist: '방탄소년단',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '비와 당신',
      artist: '이무진',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture:'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
  ];

  return(
    

      <FlatList style = {styles.playList}
        data = {musicList}
        renderItem={({item, i}) => (

        <View style = {styles.container} key={i}>
        
        
          <ImageBackground
          source={{uri:'https://facebook.github.io/react-native/img/tiny_logo.png'}}
          style={styles.bgImage}
          ></ImageBackground>
          <TouchableOpacity onPress={()=> alert('click')}>

        <View style = {styles.itemSong}>
          <Text stlye={styles.itemTitle}>{item.title}</Text>
          <Text stlye={styles.itemArtist}>{item.artist}</Text>
        </View>
        </TouchableOpacity>
      </View>
      
    )}
    />

    
  );
    }

    const styles = StyleSheet.create({
      playList: {
        flexDirection: 'column',
      },

      container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 12,
      marginHorizontal: 12,
      paddingVertical: 12,
      paddingHorizontal: 14,
      height: 86,
      shadowColor: '#f1f2f3',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 1,
      shadowRadius: 18.95,
      elevation: 1,
      zIndex: 1,
      backgroundColor: 'white',
      borderRadius: 12,
      borderColor: '#F2F3F4',
      borderWidth: 1,
    },

    itemTitle: {
      fontSize: 20,

    },

    itemArtist: {
      fontSize: 16,
    },

    bgImage: {
      width: 60, 
      height: 60,
      resizeMode: 'cover',
      //flex: 1,
    },

    itemSong: {
      padding: 10,
    }
    });

    