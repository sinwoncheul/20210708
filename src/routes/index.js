import { createRouter, createWebHistory} from "vue-router";

// 컴포넌트 가져오기
import HelloWorld from '@/components/HelloWorld';
import About from '@/components/About';
import Main from '@/components/Main';
import Board from '@/components/Board';
import BoardContent from '@/components/BoardContent';
import Shop from '@/components/Shop';
import Orderlist from '@/components/Orderlist';


// 주소 설정
const routes= [
    { path:"/", name:"HelloWorld", component:HelloWorld },
    { path:"/about", name:"About", component:About },
    { path:"/main", name:"Main", component:Main },
    { path:"/board", name:"Board", component:Board },
    { path:"/boardcontent", name:"BoardContent", component:BoardContent },
    { path:"/shop", name:"Shop", component:Shop },
    { path:"/orderlist", name:"Orderlist", component:Orderlist },
 
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;

