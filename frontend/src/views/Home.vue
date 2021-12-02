<template>
  <div class="home" data-app>
    <h1 class="title">C216 - Produtos</h1>

    <v-btn
      class="mx-2 btnAdd" 
      fab
      dark
      color="indigo"
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
            <button class="btnMore" @click="dialog = true; openModal(i.id)">Ver mais...</button>
          </div>
        </div>
      </div>
    </div>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title> Dialog 2 </v-card-title>
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
      arrProdutos: {},
      produto: {nome: '', marca: '', descricao: '', preco: ''},
    };
  },
  mounted() {
    this.listarProdutos()
  },
  methods: {
    cadastrarProduto(){
      Produto.cadastrarProduto(this.produto)
        .then(resposta => {
          console.log(...resposta.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    openModal(i){
      Produto.listarProduto(i)
        .then(resposta => {
          console.log(...resposta.data)
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
