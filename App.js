import React,{useState, useEffect, useRef} from 'react';

import {

  Container,
  ContainerFormatos,
  BotaoFormato,
  Imagem,
  Inputs,
  QtdResult,
  InputQtd, 
  Resultado,
  BotaoCalcular,

} from './style.js';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Picker} from '@react-native-picker/picker';

export default function App(){

  const [selectedValue, setSelectedValue] = useState("Selecione o Metal");
  const [image, setImage] = useState(require('./assets/BQP.png'));
  const [formatos, setFormatos] = useState('');
  const [lado, setLado] = useState('');
  const [comp, setComp] = useState('');
  const [qtd, setQtd] = useState('');
  const [alt, setAlt] = useState('');
  const [espessura, setEspessura] = useState('');
  const [resultado, setResultado] = useState('00.00');
  const [txtCondicional, setTxtCondicional] = useState('Lado - (mm)');

  const refInputComp = useRef(null);
  const refInputQtd = useRef(null)

  useEffect(()=>{
    if(selectedValue === 'Bronze'){
      defineParametros(require('./assets/BRM.png'),'Redondo', 'Diâmetro - (mm)')
    } else(
      defineParametros(require('./assets/BRM.png'),'Redondo', 'Diâmetro - (mm)')
    )
  },[selectedValue])

  function calculo(){
    if(lado != '' && comp != '' && qtd != ''){

      lado.replace(/,/g, '.');
      alt.replace(/,/g, '.');
      espessura.replace(/,/g, '.');
      comp.replace(/,/g, '.');
      qtd.replace(/,/g, '.');

      if(selectedValue === 'Alumínio'){
        if(formatos === 'Quadrado'){
          setResultado((((((lado*lado)*0.0027)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Redondo'){
          setResultado((((((lado*lado)*0.002119)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Sextavado'){
          setResultado(((((lado*lado)*0.002119)/1000)*comp)*qtd).toFixed(2);
        }
        if(formatos === 'Retangular' && alt != ''){
          setResultado((((((lado * alt) * 0.0027)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRedondo'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.002126) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboQuadrado'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.0027) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRetangular'){
          setResultado(((((((alt*lado)-((alt-2*espessura)*(lado-2*espessura)))*0.0027)/1000)*comp)*qtd).toFixed(2));
        }
      }
      if(selectedValue === 'Aço'){
        if(formatos === 'Quadrado'){
          setResultado((((((lado*lado)*0.00787)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Redondo'){
          setResultado(((((((lado*lado)*3.1416*7.87)/4000)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Sextavado'){
          setResultado(((((((lado*lado)*3*7.87)/3460)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Retangular' && alt != ''){
          setResultado((((((lado * alt) * 0.00787)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRedondo'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.00787) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboQuadrado'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.00787) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRetangular'){
          setResultado(((((((alt*lado)-((alt-2*espessura)*(lado-2*espessura)))*0.00787)/1000)*comp)*qtd).toFixed(2));
        }
      }
      if(selectedValue === 'Bronze'){
          if(formatos === 'Redondo'){
            setResultado(((((((parseFloat(lado)+1.58)*(parseFloat(lado)+1.58)) * 0.003534) / 500)* comp) * qtd).toFixed(2));
          }
          if(formatos === 'Bucha'){
            setResultado((((((((parseFloat(lado)+1.58)*(parseFloat(lado)+1.58))-((parseFloat(espessura)-1.58)*(parseFloat(espessura)-1.58))) * 0.003534) / 500)*comp)*qtd).toFixed(2));
            
          }
      }
      if(selectedValue === 'Inox'){
        if(formatos === 'Quadrado'){
          setResultado((((((lado*lado)*0.00787)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Redondo'){
          setResultado(((((((lado*lado)*3.1416*7.87)/4000)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Sextavado'){
          setResultado(((((((lado*lado)*3*7.87)/3460)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Retangular' && alt != ''){
          setResultado((((((lado * alt) * 0.00787)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRedondo'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.00787) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboQuadrado'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.00787) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRetangular'){
          setResultado(((((((alt*lado)-((alt-2*espessura)*(lado-2*espessura)))*0.00787)/1000)*comp)*qtd).toFixed(2));
        }
      }
      if(selectedValue === 'Latão'){
        if(formatos === 'Quadrado'){
          setResultado((((((lado*lado)*0.0085)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Redondo'){
          setResultado((((((lado*lado)*0.00676)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Sextavado'){
          setResultado((((((lado*lado)*0.007364)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'Retangular' && alt != ''){
          setResultado((((((lado * alt) * 0.0085)/1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRedondo'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.006676) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboQuadrado'){
          setResultado(((((((lado*lado) - ((lado - (espessura*2))*(lado - (espessura*2)))) * 0.0085) / 1000)*comp)*qtd).toFixed(2));
        }
        if(formatos === 'TuboRetangular'){
          setResultado(((((((alt*lado)-((alt-2*espessura)*(lado-2*espessura)))*0.0085)/1000)*comp)*qtd).toFixed(2));
        }
      }   
      
      if(selectedValue === 'Selecione o Metal'){
        alert('Selecione o metal!')
        return
      }
        
      }else{
        setResultado('00.00')
        alert('Preencha todos os campos');
        return
      }
    }
    
    function defineParametros(img, form, txt){
      setImage(img);
      setFormatos(form);
      setResultado('00.00');
      refInputComp.current.clear();
      refInputQtd.current.clear();
      setTxtCondicional(txt);
    }
  return(

    <Container>
        { selectedValue === 'Bronze' ? (
          <ContainerFormatos>
            <BotaoFormato onPress={() => {defineParametros(require('./assets/BRM.png'),'Redondo', 'Diâmetro - (mm)')}}> 
              <Icon name='circle' size={30} color='#C4C4C4'/>
            </BotaoFormato>
            <BotaoFormato onPress={()=>{defineParametros(require('./assets/BUP.png'),'Bucha', 'Diâmetro Externo - (mm) ')}}>
              <Icon name='circle-outline' size={30} color='#C4C4C4'/>
            </BotaoFormato>
          </ContainerFormatos>):(
            <ContainerFormatos>
              <BotaoFormato onPress={()=>{defineParametros(require('./assets/BQP.png'), 'Quadrado', 'Lado - (mm)')}}>
                <Icon name='square' size={30} color='#C4C4C4'/>
              </BotaoFormato>
              <BotaoFormato onPress={() => {defineParametros(require('./assets/BRM.png'),'Redondo', 'Diâmetro - (mm)')}}> 
                <Icon name='circle' size={30} color='#C4C4C4'/>
              </BotaoFormato>
              <BotaoFormato onPress={() => {defineParametros(require('./assets/BSP.png'),'Sextavado', 'Diâmetro - (mm)')}}>
                <Icon name='hexagon' size={30} color='#C4C4C4'/>
              </BotaoFormato>
              <BotaoFormato onPress={()=>{defineParametros(require('./assets/BCP.png'),'Retangular', 'Largura - (mm)')}}>
                <Icon name='rectangle' size={30} color='#C4C4C4'/>
              </BotaoFormato>
              <BotaoFormato onPress={()=>{defineParametros(require('./assets/TQ.png'),'TuboQuadrado', 'Lado - (mm)')}}>
                <Icon name='square-outline' size={30} color='#C4C4C4'/>
              </BotaoFormato>
              <BotaoFormato onPress={()=>{defineParametros(require('./assets/TR.png'),'TuboRedondo', 'Diâmetro - (mm) ')}}>
                <Icon name='circle-outline' size={30} color='#C4C4C4'/>
              </BotaoFormato>
              <BotaoFormato onPress={()=>{defineParametros(require('./assets/TRET.png'),'TuboRetangular', 'Largura / L1 - (mm)')}}>
                <Icon name='rectangle-outline' size={30} color='#C4C4C4'/>
              </BotaoFormato>
            </ContainerFormatos>
          )
        }
      <Imagem source={image}/>
      <View style={{width:'80%', height: 50, borderRadius: 6, backgroundColor: '#575656', marginBottom: 15, elevation: 6, padding: 7, justifyContent: 'center'}}>
        <Picker
          selectedValue={selectedValue}
          style={{ 
            height:20,
            color: '#C4C4C4',
            backgroundColor: '#575656',
          }}
          dropdownIconColor='#C4C4C4'
          
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          <Picker.Item label='Selecione o Metal' value='Selecione o Metal' />
          <Picker.Item label='Alumínio' value='Alumínio'/>
          <Picker.Item label='Aço' value='Aço'/>
          <Picker.Item label='Bronze' value='Bronze'/>
          <Picker.Item label='Inox' value='Inox'/>
          <Picker.Item label='Latão' value='Latão'/>
        </Picker>
      </View>
      <Inputs 
        placeholder={txtCondicional}
        placeholderTextColor= '#C4C4C4'
        onChangeText={(text) => {setLado(text)}}
        keyboardType='numeric'
      />

      {formatos === 'TuboRetangular' ? (
        <View style={{width:'100%', marginLeft: '20%'}}>
          <Inputs 
            placeholder = 'Altura / L2 - (mm)'
            placeholderTextColor='#C4C4C4'
            onChangeText={(text) => {setAlt(text)}}
            keyboardType='numeric'
          />
          <Inputs 
            placeholder='Espessura da parede - (mm)'
            placeholderTextColor='#C4C4C4'
            onChangeText={(text) => {setEspessura(text)}}
            keyboardType='numeric'
          />
        </View>):
        (<View></View>)}

      { formatos === 'Bucha' ? (
        <Inputs 
          placeholder='Diâmetro Interno - (mm)'
          placeholderTextColor='#C4C4C4'
          onChangeText={(text) => {setEspessura(text)}}
          keyboardType='numeric'
        />
      ): (<View></View>)}

      {formatos === 'Retangular' ? (
        <Inputs 
          placeholder='Espessura - (mm)'
          placeholderTextColor='#C4C4C4'
          onChangeText={(text) => {setAlt(text)}}
          keyboardType='numeric'
        />
      ): (<View></View>)}
    
      {formatos === 'TuboQuadrado' || formatos === 'TuboRedondo' ? (
        <Inputs 
          placeholder='Espessura da parede - (mm)' 
          placeholderTextColor='#C4C4C4'
          onChangeText={(text) => {setEspessura(text)}}
          keyboardType='numeric'
        />
        ) : (<View></View>)}


      <Inputs 
        placeholder='Comprimento - (mm)'
        placeholderTextColor= '#C4C4C4'
        onChangeText={(text) => setComp(text)}
        ref={refInputComp}
        keyboardType='numeric'
        
      />
      <QtdResult>
        <InputQtd 
          placeholder='Quantidade'
          placeholderTextColor= '#C4C4C4'
          onChangeText={(text) => setQtd(text)}
          keyboardType='numeric'
          ref={refInputQtd}
          
        />
        <BotaoCalcular onPress={calculo}>
          <Text style={{color: '#C4C4C4', fontSize: 18}}>Calcular</Text>
        </BotaoCalcular>
        
      </QtdResult>
      <Resultado>Peso: {resultado} KG</Resultado>
    </Container>
  )
}