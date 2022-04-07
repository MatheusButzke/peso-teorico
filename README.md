
# Calculadora de Peso Teórico
Calculadora de peso teórico de metais 



![Telas do Aplicativo](https://i.imgur.com/NkHb4TI.jpg)


## 💻 Projeto

Desenvolver um aplicativo para calcular o peso teórico de peças de metais ferrosos e não ferrosos, como alumínio, aço, bronze e outros. Para a construção deste projeto foi utilizado React-Native. Os cálculos foram desenvolvidos através do peso específico de cada material, dando como resultado o peso de uma ou mais peças nas medidas e quantidades informadas pelo usuário.

## ⚙️ Funcionalidades

- [x]  **Formato:** Desenvolver tabela de opções de formatos de material para que o usuário possa escolher qual deseja calcular (Cada formato = 1 botão)
- [x]  **Imagem Condicional:** Através de renderização condicional, mostrar na tela imagem referente ao formato selecionado pelo usuário.
- [x]  **Picker Material:** Picker para o usuário escolher qual o material que deseja calcular o peso.
- [x]  **Inputs Medidas:** Inputs para o usuário informar as dimensões do material que ele deseja calcular o peso, este campo também é condicional e mostra na tela a quantidade de inputs necessária para calcular o peso de determinada peça de acordo com seu formato.
- [x]  **Calcular Peso:** Após o usuário fornecer todas as informações necessária para o cálculo, executa o cálculo e retorna o peso referente a peça.
- [x]  **Informação Incompleta:** Caso falte alguma informação para a execução do cálculo, é gerado um alerta avisando o usuário e o cálculo não acontece.


## 📚 Conceitos Abordados

- Uso de flex-box para alinhar itens ao centro da tela.
- Uso de renderização condicional para adicionar e remover itens da tela.
- Uso de React Hooks (UseState, useEffect e UseRef).
- Uso de Styled-Components para fazer a estilização dos componentes.
- Uso da biblioteca react-native-picker para input de escolha de material.
- Uso de replace para substituir vírgulas por pontos, evitando erro no cálculo.
- Uso da biblioteca react-native-vector-icons para utilizar ícones.

## 🚀 Tecnologias

-  [React-Native](https://reactnative.dev/)
-  [Styled-Components](https://www.styled-components.com/)
-  [React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons)
-  [React-Native-Picker](https://github.com/react-native-picker/picker)
-  [JavaScript](https://www.javascript.com/)