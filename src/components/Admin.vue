<template>
    <div class="container">
        <div class="row">
            <div class="col-3" style="border-right: 1px solid #cccccc;">   
                <p style="cursor:pointer;" v-on:click="changeMenu(1)">메뉴1</p>
                <p style="cursor:pointer;" v-on:click="changeMenu(2)">메뉴2</p>
                <p style="cursor:pointer;" v-on:click="changeMenu(3)">메뉴3</p>
            </div>
            <div class="col-9">
                <component v-bind:is="currentMenu"></component>
            </div>    
        </div>
    </div>
</template>

<script>
    import Menu1 from './Menu1.vue';
    import Menu2 from './Menu2.vue';
    import Menu3 from './Menu3.vue';
    export default {
        components:{
            'menu1' : Menu1,
            'menu2' : Menu2,
            'menu3' : Menu3,
        },
        
        data() {
            return {
                currentMenu : 'menu1',
                menus : [ null,'menu1','menu2','menu3']
            }
        },
        methods:{
            changeMenu(num) {
                this.currentMenu = this.menus[num];
            }
        }
    }
</script>

<style scoped>

</style>