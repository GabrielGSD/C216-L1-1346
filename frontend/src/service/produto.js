import {http} from './config'

export default {
    
    cadastrarProduto:(produto) => {
        return http.post('inserir', produto)
    },

    listarProdutos:() => {
        return http.get('listar')
    },

    listarProduto:(id) => {
        return http.get('listar/' + id)
    }, 

    editarProduto:(produto) => {
        return http.put('atualizar', produto)
    },

    deletarProduto:(produtoId) => {
        return http.delete('excluir', { data: { id: produtoId } })
    },
}