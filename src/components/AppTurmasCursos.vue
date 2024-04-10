<template>
  <div></div>
</template>

<script>
export default {

}
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
