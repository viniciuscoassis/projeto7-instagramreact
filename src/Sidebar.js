function Sugestao(props){
    return (
   

<div class="sugestao">
              <div class="usuario">
                <img src= {props.img} />
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.razao}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
</div>

    )
}

function Usuario(props){
  return(

<div class="usuario">
            <img src={props.img} />
            <div class="texto">
              <strong>{props.name}</strong>
              {props.user}
            </div>
</div>

  )

}

const personagens =
[
  {name: "duma",reason: "Segue você", img:"./img/kk collection/duma hillside.png"},
  {name: "almoner",reason: "Segue você", img:"./img/kk collection/almoner ecru.png"},
  {name: "slurp ",reason: "Segue você", img:"./img/kk collection/slurp dafloor.png"},
  {name: "squids",reason: "Segue você", img:"./img/kk collection/squids moonshine.png"},
  {name: "boozie",reason: "Segue você", img:"./img/kk collection/boozie soggypants.png"},
  {name: "snooman",reason: "Segue você", img:"./img/kk collection/snooman snotkins.png"},
  {name: "storyboard",reason: "Segue você", img:"./img/kk collection/storyboard stevens.png"}
]

export default function Sidebar(){

    return (

<div class="sidebar">

          <Usuario img="./img/kk collection/squids moonshine.png" name="squids moonshine" user="squids_moon123"/>

          <div class="sugestoes">
            
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
              </div>

            <div>
          
        {personagens.map(lista => <Sugestao img={lista.img} razao= {lista.reason} nome= {lista.name}/> ) }

            </div>


          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2022 INSTAGRAM DO FACEBOOK
          </div>

</div>

</div>

    )

}