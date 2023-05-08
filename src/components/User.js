import { useState } from "react";

export default function User() {

    let [nick, setNick] = useState ('catanacomics');

    function perguntarNome() {
        let novoNick = prompt("Para qual nome deseja alterar?");
        if (!novoNick) {
            nick = nick;
        } else {

        setNick(novoNick);
        } 

    }

    let [img, setImg] = useState("assets/img/catanacomics.svg");
    function trocarImg() {
        let novaImg = prompt("Para qual imagem deseja alterar?");
        if (!novaImg) {
            img = img;
        } else {
            setImg(novaImg);
        }

    }
    return (
        <div>
            <div class="usuario">
                <div onClick={trocarImg} data-test="profile-image"><img src={img} alt="imagem de perfil" /></div>
                <div class="texto">
                    <span>
                        <div data-test="name"><strong>{nick}</strong></div>
                        <div onClick={perguntarNome} data-test="edit-name"><ion-icon name="pencil"></ion-icon></div>
                    </span>
                </div>
            </div>
        </div>
    )
}