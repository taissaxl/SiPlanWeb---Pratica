<template>
    <header class="container">

        <nav class="navbar navbar-expand">

            <a href="#" class="link navbar-brand mr-auto">
                <img src="./../assets/94-946164_graduation-week-graduation-cap-icon-white.png" alt="Graduation Cap Logo" class="img d-inline-block align-top" id="logo"> SiPlanWeb
            </a>

            <div>
                <b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
                <b-sidebar id="sidebar-1" title="Sidebar" shadow>
                <div class="px-3 py-2">
                    <p>
                        Teste
                    </p>
                </div>
                </b-sidebar>
            </div>

            <div class="links mr-2">
                
                <a href="#" class="btn mr-5">Plano atual</a>
                <select name="plano" id="select-plano" class="form-control" @change="$emit('select-plano', $event.target.value)">
                        <option value="plano2024" selected>2024 - 2024</option>
                        <option value="plano2023">2023 - 2023</option>
                        <option value="plano2022">2022 - 2022</option>
                        <option value="plano2021">2021 - 2021</option>
                </select>
                
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

        </nav>

    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    background-color: #af1e23;
    height: 100px;
    overflow: hidden;
    border: solid transparent;
}

.container {
    width: 100%;
}

#logo {
    width: 25px;
    height: 25px;
}

.link {
    color: #fff;
    font-size: 20px;
}

.links {
    display: inline-flex;
}

.links a {
    color: #fff;
    font-size: 15px;
}

.links a:focus {
    outline: none !important;
    box-shadow: none !important;
}

.icon {
    width: 15px;
    height: 15px;
}

.sidebar-1 {
    color: #fff;
}
</style>