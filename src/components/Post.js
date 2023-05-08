import { useState } from "react";

export default function Post(props) {

    let [icone, setIcone] = useState(<ion-icon name="bookmark-outline"></ion-icon>);

    function salva() {

        if (icone = <ion-icon name="bookmark-outline"></ion-icon>) {
            let novoIcone = <ion-icon name="bookmark"></ion-icon>
            setIcone(novoIcone);
        } else if (icone = <ion-icon name="bookmark"></ion-icon>) {
            let novoIcone = <ion-icon name="bookmark-outline"></ion-icon>;
            setIcone(novoIcone);
        }

    }

    let [heart, setLike] = useState(<ion-icon name="heart-outline"></ion-icon>)

    function Like() {
        if (heart = <ion-icon name="heart-outline"></ion-icon>) {
            let newLike = <ion-icon name="heart"></ion-icon>
            setLike(newLike);
        }
    }
    return (
        <div>
            <div class="post" data-test="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imagem} alt="meowed" />
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.conteudo} alt="gato-telefone" data-teste="post-image" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div class="curt">
                            <div onClick={Like} data-test="like-post">{heart}</div>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div onClick={salva} data-test="save-post">
                            {icone}
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.curtido} alt="respondeai" />
                        <div class="texto">
                            Curtido por <strong>{props.curtidoPor}</strong> e <strong>{props.qtdeCurtidas}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}