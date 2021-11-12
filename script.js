Vue.component('autor', {
    props:['nombre', 'edad'],
    mounted(){
        //Las props son accesibles desde this (proxy)
        //console.log(this.nombre);
        console.log(typeof this.edad);
    },
    template:`<div><h1>{{nombre}}</h1><button @click="cambiarProps">Cambiar Prop</button></div>`,
    methods:{
        cambiarProps(){
            this.nombre = this.nombre.toUpperCase();
        }
    }
});

const app = new Vue({
    el:'main',

    data:{
        autor:'Juan Andrés',
    },
});