

export default function Story(props) {
    return (
        <div>
            <div class="story">
                <div class="imagem">
                    <img src={props.imagem} alt="9gag" />
                </div>
                <div class="usuario">
                    {props.usuario}
                </div>
            </div>
        </div>
    )
}