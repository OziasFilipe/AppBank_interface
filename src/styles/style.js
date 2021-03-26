import styled from "styled-components/native";
import {View,Text, Image,Button} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';



export const Contained = styled.View`

flex:1;
justify-content:center;
align-items:center;
background-color:#470088;

`

export const Content = styled.View`

justify-content:center;
align-items:center;
text-align:center;

`
export const BotaoEntrar = styled.TouchableOpacity`

background-color:#1DAFDE;
width:330;
height:63;
border-radius:20;
margin-top:40; 
text-align:center;
`
export const BotaoEntrarText = styled.Text`

font-size:30;
color:white;
text-align:center;
top:10;

`

export const Texto = styled.Text`

font-size:30;
color:white;
padding-left:30;
padding-top:20;


`
export const Card = styled.View `
flex-direction:row;
align-items:center;
justify-content:center;
margin-left:23;
bottom:100;


`

export const Card_G = styled.View`

    background-color:red;
    height:142;
    width:339;
    border-radius:20;
    background-color:#18BB9C;
    text-align:center; 
    bottom:30;
   
`

export const Card_P = styled.View`

    height:43;
    width:102;
    background-color:#FF006F;
    margin-right:28;
    border-radius:10;
    
    
`

export const Botao = styled.TouchableOpacity`

background-color:#18BB9C;
width:339;
height:44 ;
border-radius:20;
margin-top:15;
text-align:center;
align-items:center;
justify-content:center;
`
export const TextoBotao = styled.Text`

color:white;
text-align:center;

`
export const TextLimite = styled.Text`

padding-left:30;
padding-top:10;
color:white;
font-size:15;


`