import React, { useState } from 'react';
import Sound from 'react-native-sound';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const path = 'C:\Users\developkim\testApp\장범준-고백.mp3';
let songState = 0; //0=정지

function App() {
  const musicData = [
    {
      title: '고백',
      artist: '장범준',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '좋은날',
      artist: '아이유',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: 'FAKE LOVE',
      artist: '방탄소년단',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '비와 당신',
      artist: '이무진',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
    {
      title: '해바라기',
      artist: 'SG워너비',
      picture: 'https://facebook.github.io/react-native/img/tiny_logo.png'
    },
  ];


  const [state, setState] = useState('play-sharp');
  const [titleState, setTitle] = useState("제목");
  const [artistState, setArtist] = useState("가수");
  function ClickPlayBtn() {
    if (songState == 0) {
      songState = 1;
      setState('pause-sharp');
      return alert("play");
    }
    else if (songState == 1) {
      songState = 0;
      setState('play-sharp')
      return alert("pause");
    }
    else {
      return alert("Error!");
    }

  };

  function clickList(item){
    setTitle(item.title);
    setArtist(item.artist);

  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={{ fontSize: 30, marginLeft: 10, }}>
          재생목록
          </Text>



      </View>

      <View style={styles.mid}>

        <FlatList style={styles.playList}
          data={musicData}
          renderItem={({ item, i }) => (

            <View style={styles.midContainer} key={i}>


              <ImageBackground
                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                style={styles.bgImage}
              ></ImageBackground>
              {/*<TouchableOpacity onPress={()=> alert('click')}>*/}
              <TouchableOpacity onPress={() => clickList(item)}>


                <View style={styles.itemSong}>
                  <Text stlye={styles.itemTitle}>{item.title}</Text>
                  <Text stlye={styles.itemArtist}>{item.artist}</Text>
                </View>
              </TouchableOpacity>


            </View>

          )}
        />


      </View>


      <View style={styles.bottom}>

        <View style={styles.bottomContainer}>

          <View style={styles.playDetail}>
          <Text style={{ fontSize: 18, color: "#191919" }}>{titleState}</Text>
          <Text style={{ color: "#b5b5b5" }}>{artistState}</Text>
          </View>

          <View style={styles.playIcon}>
            <Icon size={35} name="play-skip-back-sharp" color="black" onPress={() => alert('back skip')} />
            <View style={{ paddingLeft: 10, }}>
              <Icon size={35} name={state} color="black" onPress={() => ClickPlayBtn()} />
            </View>

            <View style={{ paddingLeft: 10, }}>
              <Icon size={35} name="play-skip-forward-sharp" color="black" onPress={() => alert('foward skip')} />
            </View>


          </View>

        </View>


      </View>
    </SafeAreaView>
  );
}



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

  mid: {
    flex: 7,
    backgroundColor: 'white',
  },

  bottom: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  playList: {
    flexDirection: 'column',
  },

  midContainer: {
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
  },
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

export default App;