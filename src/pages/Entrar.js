import {View,Text, Image,Button, Alert} from 'react-native';
import React from 'react'
import OlhoFigure from '../image/olhoFigure.png'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

//Styled Component 
import {Texto,Contained,Content,BotaoEntrar,BotaoEntrarText}  from '../styles/style'

export default function Teste(){
    return(
      <Contained>
        <Content>
            <View>
                <Image source = {OlhoFigure} style = {{height:400,width:400}}/>
            </View>
            <View>
              <BotaoEntrar>
                <BotaoEntrarText>ENTRAR</BotaoEntrarText>
              </BotaoEntrar>
            
            </View>
        </Content>
      </Contained>
    );
  }


  

  