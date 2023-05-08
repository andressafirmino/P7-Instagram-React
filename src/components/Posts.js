import Post from "./Post"

export default function Posts() {
    return (
        <div>
            <div class="posts">
                <Post imagem='assets/img/meowed.svg' usuario='meowed' conteudo='assets/img/gato-telefone.svg' curtido='assets/img/respondeai.svg' curtidoPor='respondeai' qtdeCurtida='outras 101.523 pessoas'/>
                <Post imagem='assets/img/barked.svg' usuario='barked' conteudo='assets/img/dog.svg' curtido='assets/img/respondeai.svg' curtidoPor='respondeai' qtdeCurtida='outras 99.159 pessoas'/>
                <Post imagem='assets/img/meowed.svg' usuario='meowed' conteudo='assets/img/gato-telefone.svg' curtido='assets/img/adorable_animals.svg' curtidoPor='adorable_animals' qtdeCurtida='outras 101.523 pessoas'/>
            </div>
        </div>
    )
}