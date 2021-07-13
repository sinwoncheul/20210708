<template>
    <div class="container">
         <table class="table table-bordered">
            <tr v-for="tmp in items" v-bind:key="tmp.no">
                <td>{{tmp.no}}</td>
                <td>{{tmp.name}}</td>
                <td>{{tmp.price}}</td>
                <td>
                    <select v-model="tmp.opt">
                        <option v-for="num in tmp.cnt" v-bind:key="num">
                            {{num}}
                        </option>
                          
                    </select>
                </td>
                <td>{{tmp.sum}}</td>
            </tr>   
        </table>
    </div>
</template>

<script>
    export default {
        data() { //1개
            return{
                items: [], //4
                // opt : [],
                // sum : [],
            }
        },
        watch : {  //[ {   fddf},{  fefe},{  fefe} ]
            items: {
                deep: true,
                handler() {
                    for(let i=0;i<this.items.length;i++){
                        this.items[i]['sum'] =
                            this.items[i]['price'] * this.items[i]['opt'];
                    }
                }
            }
        },
        created() { //1개
          const result = [
                { no:1, name:'a', price:1, cnt:34 },
                { no:2, name:'b', price:2, cnt:24 },
                { no:3, name:'c', price:3, cnt:14 },
            ];
            this.items = result; 
            
            // { no:3, name:'c', price:3, cnt:14 ,opt:1, sum:1 },
            for(let i=0;i<this.items.length;i++) {
                this.items[i]['opt'] = 1;
                this.items[i]['sum'] = 
                    this.items[i]['price'] * this.items[i]['opt']; 
            }
        },
        mounted() { //1개

        },
        computed : { //N개

        },
        methods() {

        },
    }
</script>

<style scoped>

</style>