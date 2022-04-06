import styled from 'styled-components';

export const Container = styled.SafeAreaView`

    background-color: #3E3E3E;
    flex: 1;
    align-items: center;
    padding-top: 10px;

`;

export const ContainerFormatos = styled.View`

    width: 80%;
    height: 40px;
    flex-direction: row;
    background-color: #575656;
    border-radius: 8px;
    elevation: 6px;
    align-items: center;
    justify-content: center;

`;

export const BotaoFormato = styled.TouchableOpacity`

    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    margin-right: 6px;

`;

export const Imagem = styled.Image`

    width: 260px;
    height: 200px;
    margin-bottom: 5px;

`;

export const Inputs = styled.TextInput`

    width: 80%;
    height: 50px;
    background-color: #575656;
    border-radius: 8px;
    elevation: 6px;
    margin-bottom: 10px;
    padding-left: 15px;
    color: #C4C4C4;
    font-size: 18px;

`;

export const QtdResult = styled.View`

    width: 80%;
    flex-direction: row;
    height: 50px;
    align-items: center;
    margin-top: 5px;
    justify-content: space-between;
    padding-right: 20px;
`;

export const InputQtd = styled.TextInput`

    width: 40%;
    height: 50px;
    background-color: #575656;
    border-radius: 8px;
    elevation: 6px;
    margin-bottom: 10px;
    padding-left: 13px;
    color: #C4C4C4;
    font-size: 18px;

`;

export const Resultado = styled.Text`

    color: #C4C4C4;
    font-size: 26px;
    
`;

export const BotaoCalcular = styled.TouchableOpacity`

    width: 60%;
    height: 50px;
    background-color: #8B0000;
    border-radius: 8px;
    elevation: 6px;
    margin-bottom: 10px;
    font-size: 18px;
    margin-left: 18px;
    align-items: center;
    justify-content: center;

`;