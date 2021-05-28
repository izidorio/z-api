## Exemplo de integração Whatsapp com NodeJs
Esse projeto possui exemplos de como se integrar com whatsapp utilizando o Z-API.

# Como rodar

1 - Instalar dependencias
```shell
npm install
```

2 - Configurar API e TELEFONE PADRÃO no arquivo .env
Caso não tenha sua API, Crie sua conta em https://z-api.io e conecte sua instância a uma conta whatsapp para pegar a API.
```shell
INSTANCE_API=https://api.z-api.io/instances/<id-istancia>/token/<token>/send-messages
NUMBER_DEFAULT=5521999999999
```

3 - Executar
```shell
npm start
```