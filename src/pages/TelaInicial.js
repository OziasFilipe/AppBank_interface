import React from 'react';
import {View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Texto,Contained,Content,Card,Card_G,Card_P,Botao,TextoBotao,TextLimite}  from '../styles/style'

export default function TelaInicial(){
    return(
        <Contained>
           <Content>
               <View style = {{height:60,width:60,borderRadius:100,backgroundColor:'white',bottom:130,right:160}}></View>
              <Card>
                  <Card_P></Card_P>
                  <Card_P></Card_P>
                  <Card_P></Card_P>
              </Card>

              <Card_G>
                 <Texto>SALDO: R$00,00</Texto>
                 <TextLimite>Saldo Limite: R$100,00</TextLimite>
              </Card_G>

                <View style = {{top:60}}>
                    <Botao ><TextoBotao  >EMPRESTIMO</TextoBotao></Botao>
                    <Botao ><TextoBotao>NEGOCIO</TextoBotao></Botao>
                </View>
           </Content>
        </Contained>
    );
}