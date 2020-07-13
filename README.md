# Higia Robots

![higia_logo](https://i.ibb.co/C9gNHxz/higia-logo.png)

Este projeto foi construido usando as seguintes tecnologias:


[Desktop App](https://github.com/lleonesouza/higia-robots/tree/master/desktop_app) (Driver):
[Typescript](https://www.typescriptlang.org/) + [Electron](https://www.electronjs.org/) + [React](https://reactjs.org/)

[NodeMCU](https://github.com/lleonesouza/higia-robots/tree/master/nodemcu) microcontroller:
[Lua](https://www.lua.org/)

[Server](https://github.com/lleonesouza/higia-robots/tree/master/server) :
[Typescript](https://www.typescriptlang.org/) + [Express](https://expressjs.com/) + [MongoDb](https://www.mongodb.com/) (hosted on mongolab)


Atualmente estamos utilizando esta arquitetura combinado com os protocolos MQTT e HTTPS para comunicaço.

![architecture](https://i.ibb.co/g3zs1yx/project-f.png)


## How it's Works

Start the Driver

![higia_desktop](https://i.ibb.co/j3TZHwp/desktop-app.png)

O app desktop para tornar a Internet das Coisas facil e ajudar a atualizar o robo. 

![cleaner_one_1](https://i.ibb.co/PZZx1Ct/Robotn3.png)

O robo CleanerOne combina NodeMCU com o poder das luzes UV-C para destruir particulas no chao. Desta maneira pode-se reduzir o numero de contaminaçes por covid-19 e ajudar as pessoas em sua nova rotina.

Este e o esquema para seguir na montagem do robo CleanerOne.

![cleaner_wires](https://i.ibb.co/WHyHHjK/imagem-node-mcu.png)

O robo trabalha com ou sem wifi. Existem dois modos: 

Autonomous mode: neste modo o robo dirige sozinho pelo ambiente. 

Manual mode: connectado ao wifi e com o driver instalado, voce pode começar o modo manual: 

![higia_desktop_1](https://i.ibb.co/SsP2QVs/Screenshot-222.png)


Quando fechar a conexao ou o controle, o modo autonomo ficara ativo novamente

Eventualmente o codigo do robo pode ser atualizado, nos informaremos isso atraves do Driver em Electron

Para atualizar o codigo, basta abrir o driver, plugar o usb no robo e no pc, e atualizar o robo, facil!

![updating_robot](https://i.ibb.co/kyvJZ4w/nodemcu-on.png)

Nosso website com a pagina para download do driver e a compra do robo estara disponivel em breve!

Para mais detalhes deste projeto, assista o [video](https://youtu.be/DxRXdzf1Ugg).

[![Watch the video](https://i.ibb.co/jJg6NP2/iot-video.png)](https://youtu.be/DxRXdzf1Ugg)

https://youtu.be/DxRXdzf1Ugg


Alguns research links:

https://medicalxpress.com/news/2020-05-uvc-lamps-virus.html

https://jornal.usp.br/ciencias/ciencias-exatas-e-da-terra/usp-entrega-a-hospital-rodos-com-radiacao-ultra-violeta-para-descontaminacao/

https://www.sciencedirect.com/science/article/pii/S1045105605000199

https://www.nature.com/articles/s41598-018-21058-w

https://g1.globo.com/sc/santa-catarina/noticia/2020/05/06/apos-reabertura-do-comercio-casos-de-coronavirus-triplicam-em-sc.ghtml

https://agenciabrasil.ebc.com.br/economia/noticia/2020-06/segunda-onda-da-covid-19-pode-levar-pib-do-brasil-cair-91

