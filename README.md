# **API rest SOLID Freelancer**
## **Escopo do produto**
O projeto Freelancer consiste em um sistema web que tem como intuito ajudar as pessoas a encontrarem profissionais freelancers para desenvolver uma solução de que precisão. Como também a auxiliar o profissional freelancer a encontrar novos clientes. Todas as funcionalidades do Sistema foram pensadas e elaboradas para proporcionar facilidade e comodidade aos usuários da plataforma.

O Sistema tem como objetivo listar os serviços oferecidos pelos profissionais e efetuar o gerenciamento destes. Possibilitando ao profissional o controle dos mesmos. O cliente poderá também consultar, adiquirir e avaliar serviços. O Sistema garante o total controle dos registros de solicitações, transações e avaliações. 

Os usuários do sistema são o Profissional Freelancer, o Cliente e o Administrador. Todos possuem acesso ao Sistema e a seu respectivo espaço. Além disso, o Sistema conta com uma tela inicial que permite ao público navegar de modo simples através de filtros entre categorias e serviços.

No backend foi desenvolvida uma API Rest utilizando os princípios do SOLID com TYPESCRIPT, NODEJS, EXPRESSJS e banco de dados MONGODB. Estou utilizando também o Docker. Integração com o Amazom S3, Emailtrap e com a plataforma de pagamentos Stripe. Documentação utilizando o Swagger e o Jest nos testes unitários.
<br/>
<br/>
O Front-End foi desenvolvido utilizando o REACTJS em TYPESCRIPT com layout responsivo, Material UI, Styled-components e reduxjs/toolkit. E está disponível para consulta no link abaixo:

```
https://github.com/danielbarbozadasilva/freelancer-service-frontend
```
<br/>


## **Instalação com Docker**
Clone o repositório na pasta de sua preferência.
```
git clone https://github.com/danielbarbozadasilva/freelancer-service-backend-solid
```

Abra a pasta do repositório clonado, e crie um arquivo ".env", exemplo:
```
PORT=3011
NODE_ENV=production

MONGO_USER=user01
MONGO_PASS=pFh7Ed2am1
MONGO_HOST=localhost:27017
MONGO_DB_NAME=freelancer-api
MONGO_INITDB_DATABASE=freelancer-api

JWT_SECRET=exemplo
JWT_REFRESH_SECRET=exemplo
JWT_VALID_TIME=exemplo

URL=http://localhost:3000
IMAGE_PATH=http://localhost:3011/static/
EMAIL=exemplo@gmail.com

STRIPE=exemplo

NODEMAILER_HOST=exemplo
NODEMAILER_PORT=exemplo
NODEMAILER_USER=exemplo
NODEMAILER_PASS=exemplo

AWS_ACCESS_KEY_ID=exemplo
AWS_SECRET_ACCESS_KEY=exemplo
AWS_BUCKET=exemplo
AWS_BUCKET_REGION=exemplo

```
Abra a pasta do repositório clonado, e crie um arquivo ".env.test", exemplo:
```
PORT=3011
NODE_ENV=development

MONGO_USER=user01
MONGO_PASS=pFh7Ed2am1
MONGO_HOST=localhost:27017
MONGO_DB_NAME=freelancer-api
MONGO_INITDB_DATABASE=freelancer-api

JWT_SECRET=exemplo
JWT_REFRESH_SECRET=exemplo
JWT_VALID_TIME=exemplo

URL=http://localhost:3000
IMAGE_PATH=http://localhost:3011/static/
EMAIL=exemplo

STRIPE=exemplo

NODEMAILER_HOST=exemplo
NODEMAILER_PORT=exemplo
NODEMAILER_USER=exemplo
NODEMAILER_PASS=exemplo

AWS_ACCESS_KEY_ID=exemplo
AWS_SECRET_ACCESS_KEY=exemplo
AWS_BUCKET=exemplo
AWS_BUCKET_REGION=exemplo
```

Abra a pasta do repositório clonado, e instale as dependências do projeto através do comando:
```
npm install
```

Logo após o término da instalação. Instale o Docker e o docker compose através do link: 
```
https://docs.docker.com/desktop/windows/install/
```
Com o Docker instalado, abra o terminal na pasta do projeto e execute o seguinte comando:
```
docker-compose up
``` 

Observação: ao subir o container, o Docker executará automaticamente a migração dos 'seeders'. Que estão localizados na pasta docker-entrypoint-initdb.d -> mongo-init.sh

Execute o comando para rodar o projeto:
```
npm run dev
```

Execute o comando para rodar os testes unitários:
```
npm run test:unit
```


Com o projeto rodando, abra a documentação do Swagger:
```
http://localhost:3011/api-docs/
```

Com o projeto rodando, abra a documentação do Postman na pasta do projeto:
```
docs -> API-FREELANCE.postman_collection.json
```
<br/>
<br/>


## **Requisitos funcionais**
<br/>

RF001 – O sistema deve controlar a autenticação dos usuários.

RF002 – O sistema deve manter cadastro de usuários.

RF003 – O sistema deve manter solicitações.

RF004 – O sistema deve alterar o status de solicitações.

RF005 – O sistema deve enviar e-mail confirmando a mudança de status na etapa da aquisição do serviço.

RF006 – O sistema deve enviar e-mail confirmando o registro do usuário.

RF007 – O sistema deve alterar o status do usuário.

RF008 – O sistema deve filtrar os serviços.

RF009 – O sistema deve manter usuários.

RF010 – O sistema deve manter serviços.

RF011 – O sistema deve manter categorias.

RF012 – O sistema deve controlar avaliação de serviços.

RF013 – O sistema deve controlar a aquisição de serviços.

RF014 – O sistema deve exibir os serviços por categoria.

RF015 – O sistema deve listar os serviços por ordem alfabética ou ordem de preço.

<br/>
<br/>

## **Requisitos não funcionais**
<br/>

| Identificação | Classificação | Descrição |
| --- | --- | --- |
|RNF001   |Implementação     | O back-end do sistema deve ser desenvolvido em TYPESCRIPT utilizando o NODEJS e EXPRESSJS.    |
|RNF002   |Implementação     | A API do sistema deve ser desenvolvida utilizando os principios do SOLID.    |
|RNF003   |Usabilidade     | O sistema deve integrar-se com a plataforma STRIPE.    |
|RNF004   |Implementação     | O front-end do sistema deve ser desenvolvido em REACTJS.    |
|RNF005   |Implementação     | O banco de dados a ser utilizado é o MONGODB.     |
|RNF006   |Implementação     | O sistema deve funcionar em Sistemas Operacionais Windows e Linux.    |
|  |  |  |

<br/>
<br/>

## **Regras de negócio**
<br/>

| Identificação | Classificação | Descrição |
| --- | --- | --- |
|RN001   |Controle de acesso     |Os acessos permitidos ao sistema serão: Administrador, Freelancer e Cliente. O usuário anônimo terá acesso apenas ao portal do site.    |
|RN002   |Recuperação de senha    | Para recuperar a senha, o Cliente deverá informar o token recebido por e-mail.     |
|RN003   |Controle de veracidade      | Para que um serviço possa ser adquirido, este deverá estar cadastrado no sistema.   |
|RN004   |Limite de ação     | Somente o Administrador terá permissão para incluir e alterar as categorias no sistema.    |
|RN005   |Limite de ação     | Somente o Freelancer terá permissão para incluir e alterar os seus serviços no sistema.   |
|RN006   |Limite de ação     | Somente o Cliente poderá solicitar serviços no sistema.   |
|RN007   |Limite de ação     | O Cliente poderá visualizar apenas os dados da sua conta. Tais como: pedidos e mensagens.  |
|RN008   |Limite de ação     | Apenas o Administrador poderá visualizar informações, solicitações e histórico de pedidos de todos os usuários    |
|  |  |  |

<br/>
<br/>

> ## Licença
- Licença GPLv3
<br/>
<br/>

> ## Metodologias e Padrões
* RESTful
* SOLID
* Conventional commits
* GitFlow
* Error handler

<br/>
<br/>
<br/>

> ## Bibliotecas e Ferramentas
* Amazom S3
* Docker
* MailTrap
* Multer
* Stripe
* Jest
* Nodemailer
* Mongoose
* Swagger
* Git
* Crypto
* Path
* Joi
* Nodemon
* JsonWebToken
* Express
* Eslint
* Prettier
<br/>
<br/>
<br/>

> ## **Telas**
<br/>

## **Swagger**
<img src="./docs/prints/59.jpg" alt=""/>

## **Portal - Tela Inicial**
<br/>
<img src="./docs/prints/1.jpg" alt=""/>
<img src="./docs/prints/2.jpg" alt=""/>
<img src="./docs/prints/3.jpg" alt=""/>
<img src="./docs/prints/5.jpg" alt=""/>
<img src="./docs/prints/6.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de cadastro**
Todos os formulários do sistema contam com validação em tempo real.
<br/>
<br/>
<img src="./docs/prints/7.jpeg" alt=""/>
<br/>
<br/>
<img src="./docs/prints/77.jpeg" alt=""/>
<br/>
<br/>
Ao finalizar o preeenchimento das informações o usuário deverá clicar no botão "Cadastrar". Um e-mail será disparado para o usuário.
<br/>
<br/>
<img src="./docs/prints/777.jpg" alt=""/>
<br/>
<br/>

## **Portal - Tela de login**
Logar como cliente.
<br/>
<br/>
<img src="./docs/prints/8.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Login efetuado**
<br/>
<img src="./docs/prints/9.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Categorias**
Selecionar categoria: "Escrever conteúdo".
<br/>
<br/>
<img src="./docs/prints/10.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>


## **Portal - Categoria: "Escrever conteúdo"**
Selecionar serviço: "Marketing Digital".
<br/>
<br/>
<img src="./docs/prints/11.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Serviço: "Marketing Digital"**
Clicar no botão "Confirmar".
<br/>
<br/>
<img src="./docs/prints/12.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Serviço: "Marketing Digital" - Modal de descrição do serviço**
Informar a descrição do serviço, e clicar no botão "Confirmar".
<br/>
<br/>
<img src="./docs/prints/13.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de Pagamento**
Informar dados de pagamento.
<br/>
<br/>
<img src="./docs/prints/14.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de Pagamento - Sucesso**
Pagamento efetuado com sucesso.
<br/>
<br/>
<img src="./docs/prints/15.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **E-mail - Transação efetuada com sucesso**
Pagamento efetuado com sucesso.
<br/>
<br/>
<img src="./docs/prints/151.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Fazer login como cliente**
Entrar no modal, e selecionar a opção "Pedidos".
<br/>
<br/>
<img src="./docs/prints/16.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela pedidos**
São listados os pedidos feitos pelo cliente, com as informações do Freelancer, serviço contratado e dados da transação.
<br/>
<br/>
<img src="./docs/prints/17.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela pedidos - Detalhes**
Ao clicar no botão "Detalhes" são exibidas informações adicionais da transação.
<br/>
<br/>
<img src="./docs/prints/18.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela pedidos - Chat**
Ao clicar no botão "Chat" é iniciado um chat entre o Freelancer e o Cliente. No exemplo abaixo estou enviando uma mensagem.
<br/>
<br/>
<img src="./docs/prints/19.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de Login**
Vou realizar o login como Freelancer.
<br/>
<br/>
<img src="./docs/prints/20.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Principal**
Vou abrir o modal e selecionar a opção "Mensagens".
<br/>
<br/>
<img src="./docs/prints/21.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Mensagens**
Podemos visualizar as mensagens recebidas. Assim como marcar a mensagem como lida. Em últimas mensagens vou clicar para abri-la.
<br/>
<br/>
<img src="./docs/prints/22.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Mensagens**
O chat abri e podemos visualizar as mensagens recebidas. Assim como responde-las.
<br/>
<br/>
<img src="./docs/prints/23.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Pedidos**
Vou clicar no modal e selecionar a opção "Pedidos". São listados todos os pedidos contendo informações do cliente e detalhes da transação. O usuário Freelancer também pode iniciar um chat com o cliente.
<br/>
<br/>
<img src="./docs/prints/24.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Serviços**
Vou clicar no modal e selecionar a opção "Serviços". São listados todos os serviços prestados pelo Freelancer.
<br/>
<br/>
<img src="./docs/prints/25.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Serviços - Adicionar**
Para adicionar um serviço basta clicar no botão "Adicionar serviço". E realizar as devidas alterações. Para concluir basta clicar no botão "Cadastrar".
<br/>
<br/>
<img src="./docs/prints/26.jpg" alt=""/>
<br/>
<br/>
<img src="./docs/prints/27.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>


## **Portal - Tela Serviços - Editar**
Agora para editar um serviço, basta clicar no ícone no formato de um "lápis". E realizar as devidas alterações. Para concluir basta clicar no botão "Salvar".
<br/>
<br/>
<img src="./docs/prints/29.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela Serviços - Excluir**
Agora para excluir um serviço, basta clicar no ícone no formato de uma "lixeira". E clicar no botão "Confirmar".
<br/>
<br/>
<img src="./docs/prints/30.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Portal - Tela de Login**
Vou realizar login como administrador do sistema.
<br/>
<br/>
<img src="./docs/prints/32.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Usuários**
Nesta tela são listados todos os usuários do Sistema.
<br/>
<br/>
<img src="./docs/prints/33.jpeg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Usuários - Editar**
Para editar um usuário basta clicar no ícone no formato de um "lápis". Realizar as devidas alterações e clicar no botão "Atualizar".
<br/>
<br/>
<img src="./docs/prints/34.jpg" alt=""/>
<br/>
<br/>
<img src="./docs/prints/35.jpg" alt=""/>
<br/>
<br/>


## **Dashboard Admin - Tela Usuários - Excluir**
Agora para excluir um serviço, basta clicar no ícone no formato de uma "lixeira". E clicar no botão "Confirmar".
<br/>
<br/>
<img src="./docs/prints/37.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Usuários**
O administrador também pode utilizar a barra de pesquisa para procurar um usuário específico.
<br/>
<br/>
<img src="./docs/prints/39.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Usuários**
O administrador também poderá aplicar filtro nas colunas.
<br/>
<br/>
<img src="./docs/prints/40.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Usuários**
O administrador também poderá imprimir ou fazer o download em CSV.
<br/>
<br/>
<img src="./docs/prints/41.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Pedidos**
O administrador tem acesso a lista de todos os pedidos, podendo buscar por um pedido especifico.
<br/>
<br/>
<img src="./docs/prints/42.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Pedidos**
O administrador poderá visualizar o cliente que está envolvido na transação.
<br/>
<br/>
<img src="./docs/prints/43.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Pedidos**
O administrador poderá visualizar o freelancer que está envolvido na transação.
<br/>
<br/>
<img src="./docs/prints/44.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela Pedidos**
O administrador poderá visualizar o serviço que está envolvido na transação.
<br/>
<br/>
<img src="./docs/prints/45.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela categorias**
O administrador poderá gerenciar todas as categorias.
<br/>
<br/>
<img src="./docs/prints/46.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela categorias**
O administrador tem acesso a lista de todos as categorias, podendo buscar por uma categoria especifica.
<br/>
<br/>
<img src="./docs/prints/47.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela categorias - Serviços**
No icone no formato de "três pontos" o administrador pode consultar os serviços ligados aquela categoria.
<br/>
<br/>
<img src="./docs/prints/48.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela categorias - Cadastrar**
Para cadastrar uma categoria basta clicar no botão "Novo". Preencher os dados e clicar no botão "Cadastrar".
<br/>
<br/>
<img src="./docs/prints/481.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela categorias - Editar**
Para editar uma categoria basta clicar no ícone no formato de um "lápis". Realizar as devidas alterações e clicar no botão "Atualizar".
<br/>
<br/>
<img src="./docs/prints/49.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela categorias - Excluir**
Para excluir uma categoria basta clicar no ícone no formato de uma "lixeira". E logo após, clicar no botão confirmar.
<br/>
<br/>
<img src="./docs/prints/51.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela serviços**
Na tela de serviços são listados todos os serviços cadastrados no sistema.
<br/>
<br/>
<img src="./docs/prints/53.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela serviços - Cliente**
O administrador pode visualizar os clientes que solicitaram o serviço.
<br/>
<br/>
<img src="./docs/prints/54.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela serviços - Serviço**
O administrador pode visualizar informações do freelancer que presta o serviço.
<br/>
<br/>
<img src="./docs/prints/55.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela serviços - Pedido**
O administrador pode visualizar os pedidos atrelados aquele serviço e o seu respectivo "status".
<br/>
<br/>
<img src="./docs/prints/56.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>

## **Dashboard Admin - Tela serviços - Avaliação**
O administrador pode visualizar as avaliações atrelados aquele serviço.
<br/>
<br/>
<img src="./docs/prints/57.jpg" alt=""/>
<br/>
<br/>
<br/>
<br/>
