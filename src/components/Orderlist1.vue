<template>
    <div class="container">
        items => [{ },{},{}]
        tmp => { no:1, name:'a', price:1230, cnt:34 },<hr />
        <table class="table table-bordered">
            <tr v-for="(tmp, idx) in items" v-bind:key="tmp.no">
                <td>
                    <div class="form-check">
                        <input class="form-check-input" v-model="chks" 
                            type="checkbox" v-bind:value="idx" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            {{tmp.no}}
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" v-model="chks1[idx]" 
                            type="checkbox" v-bind:value="idx" id="flexCheckDefault1">
                        <label class="form-check-label" for="flexCheckDefault1">
                            {{tmp.no}}
                        </label>
                    </div>
                </td>
                <td>{{tmp.name}}</td>
                <td>{{tmp.price}}</td>
                <td>{{tmp.cnt}}</td>
                <td>{{tmp.sum}}</td>
            </tr>
            <tr>
                <td>합계</td>    
                <td></td>
                <td>{{ addPrice }}</td>
                <td>{{ addCnt() }}</td>
                <td></td>
            </tr>    
        </table>    
    </div>
</template>

<script>
    export default {
        watch : {  //state변수의 상태가 바뀔때 자동으로 호출
            chks: {
                handler() {
                    //console.log(this.chks);
                    //초기화
                    for(let item of this.items){ 
                        item['sum'] = 0;
                    }
                    //체크한 항목에 대해서만 계산
                    for(let idx of this.chks){
                        this.items[idx].sum 
                            = this.items[idx].price * this.items[idx].cnt
                    }
                }
            },
            chks1 : { //chks1변수의 변화 감지
                deep : true,  //배열 내부의 변화를 감지 깊이 있는 변화
                handler(chkidx) {
                    console.log(chkidx);
                    for(let i=0;i<this.chks1.length;i++){
                        if(this.chks1[i] == true) {
                            this.items[i]['sum'] 
                                = this.items[i]['price'] * this.items[i]['cnt']
                        }
                        else {
                            this.items[i]['sum']=0;
                        }
                    }
                }
            }
        },
        computed : { //미리 계산이 필요한 항목
            addPrice() {
                console.log('3. computed');
                let sum = 0;
                for(let tmp of this.items) { //[{},{},{}]
                    sum = sum + tmp.price;
                    //1=0+1
                    //3=1+2
                    //6=3+3
                }
                return sum; //6
            }
        },

        methods : { // 함수 
            addCnt(){
                console.log('4. method');
                let sum = 0;
                for(let tmp of this.items) { //[{},{},{}]
                    sum = sum + tmp.cnt;
                }
                return sum;
            }
        },

        created() {
            console.log('2. created');
            const result = [
                { no:1, name:'a', price:1, cnt:34 },
                { no:2, name:'b', price:2, cnt:24 },
                { no:3, name:'c', price:3, cnt:67 },
            ];
            this.items = result;

            for(let i=0;i<this.items.length;i++){
                //{ no:1, name:'a', price:1, cnt:34, sum:0 }
                this.items[i]['sum'] = 0;
                //this.items[i].sum = 0;
                this.chks1[i] = false;
            }
        },
        mounted() {
            console.log('5. mounted');
        },        
        data() { //state 변수 설정
            console.log('1. data');
            return {
               items : [],
               chks : [], //체크박스 배열로 했을 경우 순서의 변화가 생김
               chks1 : [false, false, false]
            }
        },
    }
</script>

<style scoped>

</style>