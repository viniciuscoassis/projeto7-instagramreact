
function Post(props){
    return (

<div>

<div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src={props.userImg} />
                  {props.userName}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src={props.postImg} />
              </div>

              <div class="fundo">
                <div class="acoes">
                  <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                  </div>
                  <div>
                    <ion-icon name="bookmark-outline"></ion-icon>
                  </div>
                </div>

                <div class="curtidas">
                  <img src={props.likedByImg} />
                  <div class="texto">
                    Curtido por <strong>{props.likedBy}</strong> e <strong>outras {props.likes} pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

</div>

    );
    }

export default function Posts(){
    return (

<div>

<Post userImg="./img/kk collection/bartok brewski.png" userName="bartok brewski" postImg="./img/kk collection/bartok brewski.png" likedBy="liouba sergeeva" likedByImg="./img/kk collection/liouba sergeeva.png" likes = "101.523"/>
<Post userImg="./img/kk collection/liouba sergeeva.png" userName="liouba sergeeva" postImg="./img/kk collection/liouba sergeeva.png" likedBy="bartok brewski" likedByImg="./img/kk collection/bartok brewski.png" likes = "99.159"/>
<Post userImg="./img/kk collection/bartok brewski.png" userName="bartok brewski" postImg="./img/kk collection/bartok brewski.png" likedBy="liouba sergeeva" likedByImg="./img/kk collection/liouba sergeeva.png" likes = "2"/>

</div>

    )
    }

