<p align='center'>

 <img width='200px' src='https://user-images.githubusercontent.com/97065934/216607224-6ab5475c-adfd-440d-ba94-400e4ca8d15a.png' />

</p>

<h1 align='center'>
  CheckList BovControl 
</h1>

# A empresa

[BovControl](https://platform.bovcontrol.com/)

Somos uma plataforma de tecnologias que permitem interações digitais, reorganizando a cadeia de valor da pecuária a fim de erradicar a fome e impulsionar a neutralidade climática, alimentando 1 bilhão de pessoas/dia e compensando 50 milhões de toneladas de carbono por ano até 2025.

# O Projeto

<p>A ideia era desenvolver um aplicativo para que o fazendeiro pudesse criar e atualizar checklists para acompanhamento da saúde e produção de leite do gado.</p>
<p>Foi disponibilizada uma api para busca, criação e manutenção de checklists existentes, através de métodos HTTP.</p>

# Tecnologia empregada

<p>
O projeto foi criado em React Native com EXPO (https://expo.dev/).
</p>

Páginas:
- Home (com listagem dos checklists existentes)
- HealtCheck (retorna o estado de saúde do gado)
- NewChecList (cria um novo checklist)
- CheckListUpdate (atualiza dados de um checklist existente)

Recursos utilizados:
- React navigation bottom-tabs + stack (https://reactnavigation.org/)
- Axios (https://www.npmjs.com/package/react-native-axios)
- Native base (https://nativebase.io/)
- React native SVG (https://docs.expo.dev/versions/latest/sdk/svg/)
- UUID (https://www.npmjs.com/package/react-native-uuid)
- Styled Components (https://styled-components.com/)
- StyleSheet
- contextApi, useState, useCallback, useFoccusEffect, useEffect

# Rodar o projeto

- Pre running (Android | Ios)
  - run `npm install`
- IOS:
  - run `npx pod-install && npx react-native run-ios`
- Android:   
  - run `npx react-native run-android`
  
  # Screen Record
  

https://user-images.githubusercontent.com/97065934/216635177-0713ced9-cf13-4ee8-876c-7b1ab0c676ed.mp4

# Desenvolvedor

Rafael Arantes 
[Linkedin](https://www.linkedin.com/in/rafael-arantes-06a6325b/)

<img width='200px' src='https://github.com/365rafael.png' />
