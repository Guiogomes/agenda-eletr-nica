const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');
const app = require('../api/app');
const todosController = require('../controllers/todosController');

const { expect } = chai;
chai.use(chaiHttp);

describe('Testando a aplicação', () => {
  let response;
  afterEach(() => {
    sinon.restore();
  })
  describe('Testando a criação de uma tarefa', () => {
    before(async () => {
      response = await chai.request(app)
        .post('/agenda')
        .send({
          Nome: 'comer',
          Data: '2020-01-01 18:00',
          Titulo: 'comer no restaurante',
        })
      sinon
        .stub(todosController, 'create')
        .resolves({
          id: 1,
          Nome: 'comer',
          Data: '2020-01-01 18:00',
          Titulo: 'comer no restaurante',
        });
    });

    after(() => {
      sinon.restore();
    });

    it('Deve criar uma tarefa', async () => {
      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('Nome');
      expect(response.body).to.have.property('Data');
      expect(response.body).to.have.property('Titulo');
    });
  })
  describe('Testando a leitura das tarefas', () => {
    before(async () => {
      response = await chai.request(app)
        .get('/agenda')        
      sinon
        .stub(todosController, 'read')
        .resolves([{
          id: 1,
          Nome: 'comer',
          Data: '2020-01-01 18:00',
          Titulo: 'comer no restaurante',
        }]);
    });

    after(() => {
      sinon.restore();
    });

    it('Deve ler todas as tarefas', async () => {
      expect(response).to.have.status(200);
      expect(response.body).to.be.an('array');
      expect(response.body[0]).to.have.property('id');
      expect(response.body[0]).to.have.property('Nome');
      expect(response.body[0]).to.have.property('Data');
      expect(response.body[0]).to.have.property('Titulo');
    });
  })
  describe('Testando a leitura de uma tarefa', () => {
    describe('Caso de sucesso', () => {
      before(async () => {
        await chai.request(app)
          .post('/agenda')
          .send({
            id: 1,
            Nome: 'comer',
            Data: '2020-01-01 18:00',
            Titulo: 'comer no restaurante',
          })
        response = await chai.request(app)
          .get('/agenda/1')        
        sinon
          .stub(todosController, 'readOne')
          .resolves({
            id: 1,
            Nome: 'comer',
            Data: '2020-01-01 18:00',
            Titulo: 'comer no restaurante',
          });
      });
  
      after(() => {
        sinon.restore();
      });
  
      it('Deve ler a tarefa especifica', async () => {
        expect(response).to.have.status(200);    
      });
    })

    describe('Caso de falha, passando um id que não existe', () => {
      before(async () => {
        response = await chai.request(app)
          .get('/agenda/100000')        
        sinon
          .stub(todosController, 'readOne')
          .rejects();
      });
  
      after(() => {
        sinon.restore();
      });

      it('Deve retornar um erro', async () => {
        expect(response).to.have.status(404);  
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('error');
      })
    });
  })
  describe('Testando a edição de uma tarefa', () => {
    describe('Caso de sucesso', () => {
      before(async () => {
        await chai.request(app)
          .post('/agenda')
          .send({
            id: 1,
            Nome: 'comer',
            Data: '2020-01-01 18:00',
            Titulo: 'comer no restaurante',
          })
        response = await chai.request(app)
          .put('/agenda/1')        
        sinon
          .stub(todosController, 'update')
          .resolves({
            id: 1,
            Nome: 'dormir',
            Data: '2020-01-01 18:00',
            Titulo: 'dormir em casa',
          });
      });
  
      after(() => {
        sinon.restore();
      });
  
      it('Deve ler a tarefa especifica', async () => {
        expect(response).to.have.status(200);    
      });
    })

    describe('Caso de falha, passando um id que não existe', () => {
      before(async () => {
        response = await chai.request(app)
          .get('/agenda/100000')        
        sinon
          .stub(todosController, 'update')
          .rejects();
      });
  
      after(() => {
        sinon.restore();
      });

      it('Deve retornar um erro', async () => {
        expect(response).to.have.status(404);  
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('error');
      })
    });
  })
  describe('Testando a edição de uma tarefa', () => {
    describe('Caso de sucesso', () => {
      before(async () => {
        await chai.request(app)
          .post('/agenda')
          .send({
            id: 1,
            Nome: 'comer',
            Data: '2020-01-01 18:00',
            Titulo: 'comer no restaurante',
          })
        response = await chai.request(app)
          .delete('/agenda/1')        
        sinon
          .stub(todosController, 'deleteTodo')
          .resolves({
            id: 1,
            Nome: 'dormir',
            Data: '2020-01-01 18:00',
            Titulo: 'dormir em casa',
          });
      });
  
      after(() => {
        sinon.restore();
      });
  
      it('Deve ler a tarefa especifica', async () => {
        expect(response).to.have.status(200);    
      });
    })

    describe('Caso de falha, passando um id que não existe', () => {
      before(async () => {
        response = await chai.request(app)
          .get('/agenda/100000')        
        sinon
          .stub(todosController, 'deleteTodo')
          .rejects();
      });
  
      after(() => {
        sinon.restore();
      });

      it('Deve retornar um erro', async () => {
        expect(response).to.have.status(404);  
        expect(response.body).to.be.an('object');
        expect(response.body).to.have.property('error');
      })
    });
  })
})