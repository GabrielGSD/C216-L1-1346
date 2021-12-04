describe('testeApi', () => {
  var id;

  describe('Teste GORILLA GLUE', () => {
    it('POST', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:5000/produto/inserir',
        body: {
          nome: 'GORILLA GLUE',
          descricao: 'Os efeitos são relaxantes.',
          marca: 'Mary Juju',
          preco: 'R$ 70,00/g',
        },
      }).then((response) => {
        cy.log(response);
      });
    });

    it('GET', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:5000/produto/listar',
      }).then((response) => {
        id = response.body.find((item) => item.nome === 'GORILLA GLUE').id;
      });
    });

    it('GET_BY_ID', () => {
      cy.request({
        method: 'GET',
        url: `http://localhost:5000/produto/listar/${id}`,
      }).then((response) => {
        cy.log(response);
      });
    });

    it('PUT', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:5000/produto/atualizar',
        body: {
          id: id,
          nome: 'GORILLA GLUE',
          descricao: 'Uma das strains mais relaxantes',
          marca: 'Mary Juju Teste',
          preco: 'R$ 90,00/g',
        },
      }).then((response) => {
        console.log(response.status);
      });
    });

    it('DELETE', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:5000/produto/excluir',
        body: {
          id: id,
        },
      });
    });
  });


  describe('Teste PURPLE HAZE', () => {
    it('POST', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:5000/produto/inserir',
        body: {
          nome: 'PURPLE HAZE',
          descricao: 'Uma onda altamente energética.',
          marca: 'Mary Juju',
          preco: 'R$ 80,00/g',
        },
      }).then((response) => {
        cy.log(response);
      });
    });

    it('GET', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:5000/produto/listar',
      }).then((response) => {
        id = response.body.find((item) => item.nome === 'GORILLA GLUE').id;
      });
    });

    it('GET_BY_ID', () => {
      cy.request({
        method: 'GET',
        url: `http://localhost:5000/produto/listar/${id}`,
      }).then((response) => {
        cy.log(response);
      });
    });

    it('PUT', () => {
      cy.request({
        method: 'PUT',
        url: 'http://localhost:5000/produto/atualizar',
        body: {
          id: id,
          nome: 'PURPLE HAZE',
          descricao: 'Conhecida por estimular a atividade cerebral.',
          marca: 'Mary Juju Teste',
          preco: 'R$ 40,00/g',
        },
      }).then((response) => {
        console.log(response.status);
      });
    });

    it('DELETE', () => {
      cy.request({
        method: 'DELETE',
        url: 'http://localhost:5000/produto/excluir',
        body: {
          id: id,
        },
      });
    });
  });
});
