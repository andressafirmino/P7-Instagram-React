import Suggestion from "./Suggestion"

export default function Suggestions() {

    
    const suggest = [
        {img: 'assets/img/bad.vibes.memes.svg', name: 'bad.vibes.memes', rz: 'Segue você' },
        {img: 'assets/img/chibirdart.svg', name: 'chibirdart', rz: 'Segue você' },
        {img: 'assets/img/razoesparaacreditar.svg', name: 'razoesparaacreditar', rz: 'Novo no Instagram' },
        {img: 'assets/img/adorable_animals.svg', name: 'adorable_animals', rz: 'Segue você' },
        {img: 'assets/img/smallcutecats.svg', name: 'smallcutecats', rz: 'Segue você' }
        ]
        
    return (
        <div>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {/* <Suggestion imagem='assets/img/bad.vibes.memes.svg' nome='bad.vibes.memes' razao='Segue você' />
                <Suggestion imagem='assets/img/chibirdart.svg' nome='chibirdart' razao='Segue você' />
                <Suggestion imagem='assets/img/razoesparaacreditar.svg' nome='razoesparaacreditar' razao='Novo no Instagram' />
                <Suggestion imagem='assets/img/adorable_animals.svg' nome='adorable_animals' razao='Segue você' />
                <Suggestion imagem='assets/img/smallcutecats.svg' nome='smallcutecats' razao='Segue você' /> */}


                {suggest.map(sugg => <Suggestion imagem={sugg.img} name={sugg.nome} razao={sugg.rz} />)}
            </div>
        </div>
    )

    // 
}