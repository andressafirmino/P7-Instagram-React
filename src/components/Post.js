export default function Post(props) {
    return (
        <div>
            <div class="post" data-test= "post">
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
                    <img src={props.conteudo} alt="gato-telefone" data-teste="post-image"/>
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div onClick={salva}>
                            <ion-icon name="bookmark-outline"></ion-icon>
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