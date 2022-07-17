function Storie(props){
    return (
        
<div class="story">
              <div class="imagem">
                <img src={props.img}  />
              </div>
              <div class="usuario">
              {props.user}
              </div>
</div>

    )
}

const personagens =
[
  {user: "almoner", img:"./img/kk collection/almoner ecru.png"},
  {user: "bean", img:"./img/kk collection/bean ghostbuster.png"},
  {user: "chewberry", img:"./img/kk collection/chewberry.png"},
  {user: "soje samrato", img:"./img/kk collection/soje samrato.png"},
  {user: "liouba", img:"./img/kk collection/liouba sergeeva.png"},
  {user: "monalisa", img:"./img/kk collection/monalisa.png"},
  {user: "monibee", img:"./img/kk collection/monibee udburn.png"},
  {user: "slurp", img:"./img/kk collection/slurp dafloor.png"},
]

export default function Stories(){
    return (

<div class="stories">

      {personagens.map(lista => <Storie user={lista.user} img={lista.img} /> )}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        
</div>  
    )
}