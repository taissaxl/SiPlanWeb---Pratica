<template>
  <div>
    <div class="row">
      <div class="col-md-8">
        <!-- Tabela de disciplinas adicionadas -->
        <div class="mt-3" style="width: 841px; height: 871px;">
          <h2 style="border-bottom: 1px solid #21252954;">Disciplinas</h2>
          <table class="table table-striped">
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
                <th></th> <!-- Coluna vazia para o botão de remover -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="(disciplina, index) in disciplinas" :key="index" style="height: 40px;">
                <td>{{ disciplina.nome }}</td>
                <td>{{ disciplina.codigo }}</td>
                <td>{{ disciplina.perfil }}</td>
                <td>{{ disciplina.cargaTeorica }}</td>
                <td>{{ disciplina.cargaPratica }}</td>
                <td>{{ disciplina.ead }}</td>
                <td>{{ disciplina.laboratorio }}</td>
                <td>{{ disciplina.departamento }}</td>
                <td><button @click="removerDisciplina(index)" class="btn btn-danger"><i class="fas fa-times"></i></button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4">
        <!-- Card para preenchimento de disciplinas -->
        <div class="card" style="width: 380px; height: 750px; margin-top: 65px;">
          <div class="card-body">
            <h4>Disciplina</h4>
            <div class="form-group">
              <label for="nome">Nome:</label>
              <input v-model="novaDisciplina.nome" type="text" class="form-control" id="nome">
            </div>
            <div class="form-group">
              <label for="codigo">Código:</label>
              <input v-model="novaDisciplina.codigo" type="text" class="form-control" id="codigo">
            </div>
            <div class="form-group">
              <label for="perfil">Perfil:</label>
              <select v-model="novaDisciplina.perfil" class="form-control" id="perfil">
                <option selected >Selecione...</option>
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
            <div class="form-group">
              <label for="cargaTeorica">Carga Teórica:</label>
              <input v-model="novaDisciplina.cargaTeorica" type="number" class="form-control" id="cargaTeorica" placeholder="0">
            </div>
            <div class="form-group">
              <label for="cargaPratica">Carga Prática:</label>
              <input v-model="novaDisciplina.cargaPratica" type="number" class="form-control" id="cargaPratica" placeholder="0">
            </div>
            <div class="form-group">
              <label for="ead">EAD:</label>
              <select v-model="novaDisciplina.ead" class="form-control" id="ead">
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            <div class="form-group">
              <label for="laboratorio">Laboratório:</label>
              <select v-model="novaDisciplina.laboratorio" class="form-control" id="laboratorio">
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
            <div class="form-group">
              <label for="departamento">Departamento:</label>
              <input v-model="novaDisciplina.departamento" type="text" class="form-control" id="departamento" placeholder="DCC">
            </div>
            <button @click="adicionarDisciplina" class="btn btn-success"><i class="fas fa-plus"></i>Adicionar</button>
            <div v-if="mensagemErro" class="alert alert-danger mt-3">{{ mensagemErro }}</div>
          </div>
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
      mensagemErro: ''
    };
  },
  methods: {
    adicionarDisciplina() {
      // Verifica se todos os campos obrigatórios estão preenchidos
      if (
        this.novaDisciplina.nome &&
        this.novaDisciplina.codigo &&
        this.novaDisciplina.perfil !== 'Selecione...' &&
        this.novaDisciplina.cargaTeorica !== 0 &&
        this.novaDisciplina.cargaPratica !== 0 &&
        this.novaDisciplina.departamento
      ) {
        // Verifica se já existe uma disciplina com os mesmos dados
        const duplicada = this.disciplinas.some(
          disciplina =>
            disciplina.nome === this.novaDisciplina.nome &&
            disciplina.codigo === this.novaDisciplina.codigo &&
            disciplina.perfil === this.novaDisciplina.perfil
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
          this.mensagemErro = 'Já existe uma disciplina com os mesmos dados.';
        }
      } else {
        this.mensagemErro = 'Preencha todos os campos obrigatórios.';
      }
    },
    removerDisciplina(index) {
      this.disciplinas.splice(index, 1);
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
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.table th {
  font-weight: bold;
  border: 1px solid #7a2326 !important;
}

/* Estilos para os botões de remover */
.btn-danger {
  height: 5px;
  width: 5px;
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  color: #fff;
  background-color: #c82333;
  border-color: #bd2130;
}

/* Estilos para os ícones dos botões */
.btn i {
  margin-right: 5px;
}

/* Estilos para o card */ 
.card, option, select {
  font-size: 12px;
}
</style>
