<template>
    <div class="container">
        <h4>게시판 목록</h4>
        <hr />
        
        <div class="d-flex justify-content-end">
            <div class="d-flex" style="width:300px">
                <input type="text" class="form-control" placeholder="검색어 입력 "/>
                <div style="margin-left:5px">
                    <input type="button" class="btn btn-success" value="검색" />
                </div>
            </div>    
        </div>
        
        <table class="table">
            <thead>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>날짜</th>
                </tr>        
            </thead>
            <tbody>
                <tr v-for="item in items" v-bind:key="item.no">
                    <td>{{item.no}}</td>
                    <td>
                        <router-link v-bind:to="{path:'/boardcontent',query:{no:item.no}}">
                        {{item.title}}
                        </router-link>
                        </td>
                    <td>{{item.writer}}</td>
                    <td>{{item.hit}}</td>
                    <td>{{item.regdate}}</td>
                </tr>    
            </tbody>    
        </table>
        <div class="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
</nav>

        </div>
    
    </div>
</template>


<script>
export default {
    name: 'Board',
    data : function() {
        return {
            items : null,
        }
    },
    mounted() {
            // express에서 값을 받아서 result에 보관
        const result = [
            {no:1, title:'aa1', writer:'bb1', hit:14, regdate:'20210709'},
            {no:2, title:'aa2', writer:'bb2', hit:24, regdate:'20210709'},
            {no:3, title:'aa3', writer:'bb3', hit:34, regdate:'20210709'},

        ];
        //받은 값을 items로 복사
        this.items = result;
    }
};
</script>

<style scoped>

</style>