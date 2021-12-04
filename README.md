[![License](https://img.shields.io/apm/l/vim-mode?color=blue)](http://badges.mit-license.org)

<h1 align="center">C216-L1-1346</h1>


## ☕ Sobre o projeto
Implementação do teste prático de C216-L1 (2021/2).

---

# Preparação do Banco de Dados

**1.** Baixe e instale o banco de dados <a href="https://dev.mysql.com/downloads/mysql/"> MySQL Community Server </a>.

**2.** Baixe e instale o <a href="https://dev.mysql.com/downloads/workbench/">MySQL Workbench</a>.

**3.** Execute o MySQL Workbench, conecte-se à instância local e crie o schema 'C216-L1'. Para isto,clique com o botão direito na lista de schemas > ```Create Schema...``` >```Schema Name: C216-L1``` > ```Character Set: Default Charset``` > ```Collation: Default Collation``` > ```Apply``` > ```Apply``` > ```Close```.

**4.** Execute a seguinte query SQL para verificar que o schema foi criado com sucesso:

```SELECT * FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = 'C216-L1';```

Deve ser retornada uma linha com as informações referentes ao schema.

**5.** Crie a tabela que armazenará os dados do Teste Prático. Para isto, copie e execute o script abaixo:

```
CREATE TABLE `C216-L1`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `descricao` VARCHAR(45) NULL,
  `marca` VARCHAR(45) NULL,
  `preco` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
```

**6.** Expanda o schema ```C216-L1```, clique o botão direito em ```Tables```, clique em ```Refresh All```,clique com o botão direito na tabela recém criada, clique em ```Select Rows - Limit 1000``` everifique se a listagem ocorreu com sucesso (nenhuma linha deve ser retornada).

# Back End desenvolvido em Node

**1. Entre no pasta middleware**
```
cd C216-L1-1346\middleware
```

**2. Instale as dependências**
```
npm install
```

**3. Rodar o projeto**
```
node index.js
```

**4. Para executar os testes, é necessário abrir um novo terminal no mesmo diretório(\middleware), e rodar o comando abaixo:**
```
npx cypress open
```

Após isso, irá abrir o gerenciador do Cypress. Com isso, basta selecionar o arquivo testeApi.js e ele irá abrir a interface de testes no navegador.

# Front End desenvolvido em Vue.JS

**1. Entre na pasta frontend**
```
cd C216-L1-1346\frontend
```

**2. Instalar as dependências**
```
npm install
```

**3. Rodar o projeto**
```
npm run serve
```

Após rodar o projeto, irá gerar dois links. Basta clicar em algum, e ele irá abri-lo no navegador.

**Lints and fixes files**
```
npm run lint
```

## 👥 Autor

<table  style="text-align:center; border: none" >
  <tr>
    <td align="center"> 
      <a href="https://github.com/GabrielGSD" style="text-align:center;">
      <img style="border-radius: 20%;" src="https://github.com/GabrielGSD.png" width="120px;" alt="autor"/><br><strong> Gabriel Daniel </strong>
      </a>
    </td>
  </tr>
</table>

### Contato
[![Linkedin Badge](https://img.shields.io/badge/-Gabriel-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-souza-b1995b216/)](https://www.linkedin.com/in/gabriel-souza-b1995b216/)

---
## 📝 License
- **[MIT license](https://choosealicense.com/licenses/mit/)**
