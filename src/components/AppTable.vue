<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <!-- Tabela de disciplinas adicionadas -->
        <div class="mt-3" style="width: 841px; height: 871px;">
          <h2 style="border-bottom: 1px solid #21252954;">Disciplinas</h2>
          <table class="table table-bordered table-striped">
            <thead>
              <tr style="background-color: #ec6b6f; color: white;">
                <th>Perfil</th>
                <th>Código</th>
                <th>Nome</th>
                <th>Carga Teórica</th>
                <th>Carga Prática</th>
                <th>EAD</th>
                <th>Laboratório</th>
                <th>Departamento</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(disciplina, index) in disciplinas" :key="index" style="height: 40px;">
                <td>{{ disciplina.perfil }}</td>
                <td>{{ disciplina.codigo }}</td>
                <td>{{ disciplina.nome }}</td>
                <td>{{ disciplina.cargaTeorica }}</td>
                <td>{{ disciplina.cargaPratica }}</td>
                <td>{{ disciplina.ead }}</td>
                <td>{{ disciplina.laboratorio }}</td>
                <td>{{ disciplina.departamento }}</td>
                <td>
                  <button @click="confirmarRemocao(index)" class="btn btn-danger"><img src="./../assets/icone-fermer-et-x-gris.png" alt="Remove Button" style="width: 20px; height: 20px;"></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4">
        <!-- Card para preenchimento de disciplinas -->
        <div class="card card-disciplinas">
          <div class="card-body">
            <h4 class="card-title">Disciplina</h4>
            <div class="form-group">
              <label for="nome">Nome:</label>
              <input v-model="novaDisciplina.nome" type="text" class="form-control" id="nome">
            </div>
            <div class="form-group">
              <label for="codigo">Código:</label>
              <input v-model="novaDisciplina.codigo" type="text" class="form-control" id="codigo">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="perfil">Perfil:</label>
                <select v-model="novaDisciplina.perfil" class="form-control" id="perfil">
                  <option selected>Selecione...</option>
                  <option value="Arq/So">Arq/So</option>
                  <option value="Avançado">Avançado</option>
                  <option value="Banco de Dados">Banco de Dados</option>
                  <option value="Básico">Básico</option>
                  <option value="Cg">Cg</option>
                  <option value="Es">Es</option>
                  <option value="Ead">Ead</option>
                  <option value="Hum/Empr">Hum/Empr</option>
                  <option value="Ice">Ice</option>
                  <option value="Ia/Ic">Ia/Ic</option>
                  <option value="Mac">Mac</option>
                  <option value="Multi">Multi</option>
                  <option value="Num/Oc">Num/Oc</option>
                  <option value="Pui">Pui</option>
                  <option value="Redes">Redes</option>
                  <option value="Si">Si</option>
                  <option value="Teo">Teo</option>
                  <option value="Teste">Teste</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="cargaTeorica">Carga Teórica:</label>
                <input v-model="novaDisciplina.cargaTeorica" type="number" class="form-control" id="cargaTeorica" placeholder="0">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="cargaPratica">Carga Prática:</label>
                <input v-model="novaDisciplina.cargaPratica" type="number" class="form-control" id="cargaPratica" placeholder="0">
              </div>
              <div class="form-group col-md-6">
                <label for="ead">EAD:</label>
                <select v-model="novaDisciplina.ead" class="form-control" id="ead">
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="laboratorio">Laboratório:</label>
                <select v-model="novaDisciplina.laboratorio" class="form-control" id="laboratorio">
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="departamento">Departamento:</label>
                <input v-model="novaDisciplina.departamento" type="text" class="form-control" id="departamento" placeholder="DCC">
              </div>
            </div>
            <button @click="adicionarDisciplina" class="btn btn-success"><i class="fas fa-plus"></i>+</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal de confirmação de remoção -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h5>Confirmar Remoção</h5>
        <p>Deseja remover a disciplina?</p>
        <div class="modal-buttons">
          <button class="btn btn-success" @click="removerDisciplinaConfirmado">Sim</button>
          <button class="btn btn-danger" @click="cancelarRemocao">Não</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novaDisciplina: {
        nome: '',
        codigo: '',
        perfil: 'Selecione...',
        cargaTeorica: 0,
        cargaPratica: 0,
        ead: 'Não',
        laboratorio: 'Não',
        departamento: ''
      },
      disciplinas: [],
      mensagemErro: '',
      showModal: false,
      indexRemocao: null
    };
  },
  methods: {
    adicionarDisciplina() {
      // Verifica se todos os campos obrigatórios estão preenchidos
      if (
        this.novaDisciplina.nome &&
        this.novaDisciplina.codigo &&
        this.novaDisciplina.perfil !== 'Selecione...' &&
        this.novaDisciplina.cargaTeorica >= 0 &&
        this.novaDisciplina.cargaPratica >= 0 &&
        this.novaDisciplina.departamento
      ) {
        // Verifica se já existe uma disciplina com o mesmo código
        const duplicada = this.disciplinas.some(
          disciplina =>
            disciplina.codigo === this.novaDisciplina.codigo
        );

        if (!duplicada) {
          // Verifica se as cargas teórica e prática são números
          if (
            !isNaN(this.novaDisciplina.cargaTeorica) &&
            !isNaN(this.novaDisciplina.cargaPratica)
          ) {
            const disciplina = Object.assign({}, this.novaDisciplina);
            this.disciplinas.push(disciplina);
            this.limparCampos();
            this.mensagemErro = ''; // Limpa mensagem de erro
          } else {
            this.mensagemErro =
              'As cargas teórica e prática devem ser números.';
          }
        } else {
          this.mensagemErro = 'Já existe uma disciplina com o mesmo código.';
        }
      } else {
        this.mensagemErro = 'Preencha todos os campos obrigatórios.';
      }
    },
    confirmarRemocao(index) {
      this.indexRemocao = index;
      this.showModal = true;
    },
    removerDisciplina() {
      this.disciplinas.splice(this.indexRemocao, 1);
      this.showModal = false;
    },
    limparCampos() {
      this.novaDisciplina.nome = '';
      this.novaDisciplina.codigo = '';
      this.novaDisciplina.perfil = 'Selecione...';
      this.novaDisciplina.cargaTeorica = 0;
      this.novaDisciplina.cargaPratica = 0;
      this.novaDisciplina.ead = 'Não';
      this.novaDisciplina.laboratorio = 'Não';
      this.novaDisciplina.departamento = '';
    },
    cancelarRemocao() {
      this.showModal = false;
      this.indexRemocao = null;
    },
    removerDisciplinaConfirmado() {
      if (this.indexRemocao !== null) {
        this.removerDisciplina(this.indexRemocao);
      }
      this.cancelarRemocao();
    }
  }
};
</script>

<style scoped>
/* Estilos para a tabela */
.table {
  width: 100%;
  overflow-y: scroll;
  border-collapse: collapse;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
}

.table th, .table td {
  padding: 2px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.table th {
  font-weight: bold;
  border: 1px solid #7a2326 !important;
}

/* Estilos para os botões de remover */
.btn-danger {
  padding: 0;
  background-color: transparent;
  border: none;
}

.btn:hover {
  color: #7a2326;
}

.table tbody tr:hover {
  background-color: #d5cfcf;
}

.card-disciplinas {
  width: 350px;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 65px;
  line-height: 0.5;
  font-size: 13px;
  margin-left: 200px;
}

.card-disciplinas .card-body {
  padding: 20px;
}

.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group input,
.form-group select {
  width: 100%;
  height: 70%;
  font-size: 13px;
}

button.btn-success .btn {
  display: block;
  width: 5%;
  margin-top: 10px;
}

/* Estilos para o modal de confirmação de remoção */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  width: 350px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.modal-buttons .btn-success {
  background-color: #7a2326dd;
  border-color: #7a2326dd;
}

.modal-buttons .btn-danger {
  background-color: #333333a5;
  border-color: #333333a5;
  width: 50px;
}
</style>
