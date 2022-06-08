import React from 'react'
import {text, Image, View} from 'react-native'
const CatComponent = (props) => {
  return (
    //<div>CatComponent</div>
    <view>

    <text> Hola soy un gato y mi nombre es{props.nombre} y mi raza es {props.raza}</text>
    <image source={{uri: props.foto}}
        style={{width: 200, height: 200}} ></image>
    </view>
  )
}

export default CatComponent