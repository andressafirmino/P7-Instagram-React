import Suggestion from "./Suggestion"

export default function Suggestions() {
    return (
        <div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <Suggestion imagem='assets/img/bad.vibes.memes.svg' nome='bad.vibes.memes' razao='Segue você' />
                <Suggestion imagem='assets/img/chibirdart.svg' nome='chibirdart' razao='Segue você' />
                <Suggestion imagem='assets/img/razoesparaacreditar.svg' nome='razoesparaacreditar' razao='Novo no Instagram' />
                <Suggestion imagem='assets/img/adorable_animals.svg' nome='adorable_animals' razao='Segue você' />
                <Suggestion imagem='assets/img/smallcutecats.svg' nome='smallcutecats' razao='Segue você' />
            </div>
        </div>
    )
}