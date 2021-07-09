<template>
    <div class="container">      
        <table class="table">
            <tbody>
                <tr v-for="(item, idx) in items" v-bind:key="item.no">
                    <td>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="chks" v-bind:value="idx" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                {{item.no}}
                            </label>
                        </div>    
                    </td>
                    <td>{{item.title}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.cnt}}</td>
                </tr>
                <tr>
                    <td colspan="2">합계</td>
                    <td>{{ sumPrice1() }}</td>
                    <td>{{ sumCnt }}</td>
                </tr>
            </tbody>    
        </table>
    </div>
</template>

<script>
export default {
    name: 'OrderList',
    data : function() {
        return {
            items : [
                {no:1, title:'aa1', price:14, cnt:1},
                {no:2, title:'aa2', price:456, cnt:2},
                {no:3, title:'aa3', price:890, cnt:4},
            ],
            chks : [],
        }
    },
    computed : {
        sumCnt() { //데이터를 읽어서 미리 계산해놓기
            let sum = 0; //초기값
            for(let i=0;i<this.items.length;i++){ //3번 반복
                sum = sum + this.items[i].cnt;
            }
            return sum;     
        }
    },
    methods : { // 이벤트에 의해서 호출 경우로
        //v-on:click=""
        sumPrice() {
            let sum = 0; //초기값
            // [ { ...  price:1},{... price:2},{ ... price:3}]
            for(let i=0;i<this.items.length;i++){ //3번 반복
                sum = sum + this.items[i].price; //14 + 456 + 890
            }
            return sum;//6
        },
        sumPrice1() {
            let sum = 0;
            for(let i=0; i<this.chks.length; i++){ //1 3
                const chkidx = this.chks[i]; // 8 26
                sum = sum + this.items[ chkidx ].price;
            }
            return sum;
        },
        sumPrice3() {
            let sum = 0;
            for(let i=0; i<this.chks.length; i++){ //1 3
                const chkidx = this.chks[i]; // 8 26
                sum = sum +( this.items[ chkidx ].price * this.items[ chkidx ].price );
            }
            return sum;
        }
    
    },
      
    
    mounted() {
        const result = [
            {no:1, title:'aa1', price:14, cnt:1},
            {no:2, title:'aa2', price:456, cnt:2},
            {no:3, title:'aa3', price:890, cnt:4},
        ];
        this.items = result;
    }
}
</script>


<style scoped>

</style>
