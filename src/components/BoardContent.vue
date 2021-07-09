<template>
    <div class="container">

        <div style="width:600px">
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <th scope="col" style="width:100px;">번호</th>
                        <td>{{ item.no }}</td>
                    </tr> 
                    <tr>
                        <th scope="col">제목</th>
                        <td>{{ item.title }}</td>
                    </tr>                 
                    <tr>
                        <th scope="col">내용</th>
                        <td>{{ item.content }}</td>
                    </tr>                                     
                    <tr>
                        <th scope="col">작성자</th>
                        <td>{{ item.writer }}</td>
                    </tr>                                     
                    <tr>
                        <th scope="col">조회수</th>
                        <td>{{ item.hit }}</td>
                    </tr>                                     
                    <tr>
                        <th scope="col">날짜</th>
                        <td>{{ item.regdate }}</td>
                    </tr>                                                                             
                </tbody>
            </table>

            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <router-link to="/board" class="btn btn-outline-primary">목록으로</router-link>
                <input type="button" class="btn btn-outline-primary" value="수정" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                <input type="button" class="btn btn-outline-primary" value="삭제"  data-bs-toggle="modal" data-bs-target="#exampleModal1" />
                <input type="button" class="btn btn-outline-primary" value="이전글" />
                <input type="button" class="btn btn-outline-primary" value="다음글" />
            </div>

            
            
        </div>

        <!-- 수정하기 모달창 -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" class="form-control" />
                        <input type="text" class="form-control" />
                        <input type="text" class="form-control" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Save changes</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
       <!-- 삭제하기 모달창 -->
        <div class="modal" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>삭제 하시겠습니까?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">삭제</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BoardContent',
    methods:{

    },
    components : {

    },
    data : function() {
        return {
            no      : Number(this.$route.query.no),
            item    : '',
        }
    },
    mounted() {
        // express로 호출해서 게시물 1개의 내용 받기
        const result =  {no:3, title:'a', 
            content: 'b', writer:'c', hit:45, regdate:'20210707'};
        this.item = result;
    }
}
</script>

<style scoped>

</style>
