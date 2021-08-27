import React from 'react';
import MiniPlayer from './MiniPlayer';

import{
} from 'react-native';

export default function PlayList(){ //함수형 컴포넌트
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
    

      <MiniPlayer name ="테스트"/>

    
  );
    }

    
    