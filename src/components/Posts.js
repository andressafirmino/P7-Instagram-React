import Post from "./Post"

export default function Posts() {

    const post = [
        {img:'assets/img/meowed.svg', user:'meowed', cont:'assets/img/gato-telefone.svg', curt:'assets/img/adorable_animals.svg', curtPor:'adorable_animals', qtde:'outras 101.523 pessoas'},
        {img:'assets/img/barked.svg', user:'barked', cont:'assets/img/dog.svg', curt:'assets/img/respondeai.svg', curtPor:'respondeai', qtde:'outras 99.159 pessoas'},
        {img:'assets/img/meowed.svg', user:'meowed', cont:'assets/img/gato-telefone.svg', curt:'assets/img/adorable_animals.svg', curtPor:'adorable_animals', qtde:'outras 101.523 pessoas'}
    ]
    return (
        <div>
            <div class="posts">
                {post.map( pos => <Post imagem={pos.img} usuario={pos.user} conteudo={pos.cont} curtido={pos.curt} curtidoPor={pos.curtPor} qtdeCurtidas={pos.qtde}/>)}
            </div>
        </div>
    )
}