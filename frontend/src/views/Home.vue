<template>
  <div class="home" data-app>
    <h1 class="title">C216 - Produtos</h1>

    <v-btn
      class="mx-2 btnAdd" 
      fab
      dark
      color="indigo"
      @click="clearInputs(); dialog = true; editar = false;"
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn>

    <div class="box">
      <div class="boxScroll">
        <div 
          v-for="i in this.arrProdutos"
          :key="i.id"
        >
          <div class="card">
            <h1 class="name">{{i.nome}}</h1>
            <h2 class="brand">{{i.marca}}</h2>
            <h2 class="brand">{{i.preco}}</h2>
            <button class="btnMore" @click="dialog = true; editar = true; verMais(i.id)">Ver mais...</button>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title> Produto </v-card-title>
        <div style="padding: 20px 0">
          <v-row style="max-width: 80%; margin: .7rem auto;">
            <label class="label" for="nome">Nome</label>
            <input v-model="produto.nome" class="input" type="text" id="nome">
          </v-row>

          <v-row style="max-width: 80%; margin: .7rem auto;">
            <label class="label" for="marca">Marca</label>
            <input v-model="produto.marca" class="input" type="text" id="marca">
          </v-row>

          <v-row style="max-width: 80%; margin: .7rem auto;">
            <label class="label" for="desc">Descrição</label>
            <input v-model="produto.descricao" class="input" type="text" id="desc">
          </v-row>

          <v-row style="max-width: 80%; margin: .7rem auto;">
            <label class="label" for="preco">Preço</label>
            <input v-model="produto.preco" class="input" type="text" id="preco">
          </v-row>
        </div>

        <v-row class="btnCard">
          <v-btn class="btnSave" @click="salvar">Salvar</v-btn>
          <v-btn v-show="editar" class="btnEdit" style="margin-left: 30px" @click="DeletarProduto()">Deletar</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
</style>

<script>
import Produto from '../service/produto'

export default {
  name: "Home",
  data() {
    return {
      dialog: false,
      editar: false,
      arrProdutos: {},
      produto: {id: '', nome: '', marca: '', descricao: '', preco: ''},
    };
  },
  mounted() {
    this.listarProdutos()
  },
  methods: {
    clearInputs() {
      this.produto = {
        id: '',
        nome: '', 
        marca: '', 
        descricao: '', 
        preco: ''
      }
    },
    salvar() {
      !this.editar ? this.cadastrarProduto() : this.editarProduto()
    },
    cadastrarProduto(){
      Produto.cadastrarProduto(this.produto)
        .then(resposta => {
          console.log(resposta, 'Adicionado')
          this.listarProdutos()
          this.dialog = false
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    editarProduto(){   
      Produto.editarProduto(this.produto)
        .then(() => {
          console.log('Editado')
          this.listarProdutos()
          this.dialog = false
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    DeletarProduto(){   
      Produto.deletarProduto(this.produto.id)
        .then(() => {
          console.log('Deletado')
          this.listarProdutos()
          this.dialog = false
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    verMais(i){
      Produto.listarProduto(i)
        .then(resposta => {
          var prd = resposta.data[0];
          this.produto.id = prd.id; 
          this.produto.nome = prd.nome; 
          this.produto.marca = prd.marca; 
          this.produto.descricao = prd.descricao; 
          this.produto.preco = prd.preco; 
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    listarProdutos() {
      Produto.listarProdutos()
        .then(resposta => {
          this.arrProdutos = resposta.data
          console.log(resposta.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
  }
};
</script>
