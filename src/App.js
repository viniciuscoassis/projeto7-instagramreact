import Navbar from "./Navbar";
import Stories from "./Stories";
import Posts from "./Posts";
import Sidebar from "./Sidebar";


export default function App(){
return(
    <div>
        
    <Navbar/>
      <div class="corpo">

        <div class="esquerda">
          
          <Stories/>
          <Posts/>

      </div>

      <Sidebar/>

      <div class="fundo-mobile">
        <ion-icon name="home"></ion-icon>
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="add-circle-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
      </div>
      

    </div>

    </div>
)
}