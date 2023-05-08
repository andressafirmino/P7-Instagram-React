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
                <img src={img} onClick={trocarImg} data-test="profile-image" alt="imagem de perfil" />
                <div class="texto">
                    <span>
                        <strong data-test="name">{nick}</strong>
                        <ion-icon onClick={perguntarNome} data-test="edit-name" name="pencil"></ion-icon>
                    </span>
                </div>
            </div>
        </div>
    )
}