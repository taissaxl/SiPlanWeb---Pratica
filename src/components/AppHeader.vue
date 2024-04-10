<template>
<header class="container">
    <nav class="navbar navbar-expand">
    <a href="#" class="link navbar-brand mr-auto" id="header-logo">
        <img src="./../assets/94-946164_graduation-week-graduation-cap-icon-white.png" alt="Graduation Cap Logo" class="img d-inline-block align-top" id="logo"> SiPlanWeb
    </a>

    <disciplinas/>
    <turmasCursos/>

    <div class="page-selection">
        <div>
            <h3 @click="goToPage('/turmascursos')">Turmas-Cursos</h3>
            <h3 @click="goToPage('/disciplinas')">Disciplinas</h3>
        </div>
    </div>

    <div class="links mr-2">
        <div class="selection">
        <h3 class="selection-title">Plano atual</h3>
        <select name="plano" id="select-plano" class="form-control" @change="$emit('select-plano', $event.target.value)">
            <option style="display: none;">Plano atual</option>
            <option value="" selected>Selecionar</option>
            <option value="plano2024">2024 - 2024</option>
            <option value="plano2023">2023 - 2023</option>
            <option value="plano2022">2022 - 2022</option>
            <option value="plano2021">2021 - 2021</option>
        </select>
        </div>

        <div class="buttons">
        <a href="#" class="btn mr-5">
            <img src="./../assets/sync.png" class="icon">
            Sincronizar Drive
        </a>
        <a href="#" class="btn mr-5">
            <img src="./../assets/user.png" class="icon">
            Usuário
        </a>
        <a href="#" class="btn mr-5">
            <img src="./../assets/download.png" class="icon">
            Download
        </a>
        <a href="#" class="btn mr-5">
            <img src="./../assets/logout.png" class="icon">
            Logout
        </a>
        </div>
    </div>
    </nav>
</header>
</template>

<script>
import disciplinas from './../components/AppTable.vue'
import turmasCursos from './../components/AppTurmasCursos.vue'

export default {
    methods: {
        goToPage(page) {
            this.$router.push(page);
        }
    },
    components: {
        disciplinas,
        turmasCursos
    }
}
</script>

<style scoped>
header {
    padding: 0;
    height: 60px;
    min-width: 100%;
    font-size: 100%;
    overflow: visible; 
    align-content: center;
    margin: 0px 0px 0px 0px;
    background-color: #af1e23;
    border: solid transparent;
    position: relative; 
    z-index: 1; 
}

.container {
    width: 100%;
}

#logo {
    width: 25px;
    height: 22px;
    margin-left: 50px;
    padding: 2px;
}

.link {
    color: #fff;
    font-size: 17px;
    display: inline-flex;
    align-items: center;
}

.links {
    display: inline-flex;
}

.links a {
    color: #fff;
    font-size: 10px;
    /* padding: 5px; */
}

.links a:focus {
    outline: none !important;
    box-shadow: none !important;
}

.icon {
    width: 10px;
    height: 10px;
}

.sidebar-1 {
    color: #fff;
    width: 100px;
    padding: 20px;
    margin-left: 50px;
}
.selection {
    display: inline-flex;
}

.plano {
    background-color: #6c1316;
    width: 100%;
    height: 15px;
    margin: 0;
    padding: 0;
    font-size: 5px;
}

.selection-title {
    color: #fff;
    font-size: 10px;
    width: 100%;
    margin-top: 8px;
}

#select-plano {
    width: 100%;
}

.buttons {
    margin-left: 50px;
}

.links-pages {
color: #6c1316;
}
</style>
