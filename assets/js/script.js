const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assuntos = document.querySelector("#assuntos")
const sanAndreas = document.querySelector("#san_andreas")
const tiro = document.getElementById("tiro")
const sniper = document.getElementById("sniper")
const mission = document.getElementById("mission_musiquinha")
const yay = document.getElementById("yay")
const errado = document.getElementById("errado")
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
const mapa = document.querySelector("#mapa")

gsap.registerEffect({
    name: "fadein",
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 1000 });
    },
    defaults: { duration: 2000 }, //defaults get applied to any "config" object passed to the effect
    extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
});

function validaNome() {
    tomaTiroVai()
    let txtNome = document.querySelector("#txtNome")
    let checkMark = document.querySelector("#checkmark1")
    let errado = document.querySelector("#error1")
    if (nome.value.length >= 3) {
        aeeBoa()
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        checkMark.style.display = "block"
        errado.style.display = "none"
        nome.style.borderColor = "green"
        nomeOk = true;
    } else {
        errouPo()
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
        checkMark.style.display = "none"
        errado.style.display = "block"
        nome.style.borderColor = "red"
        nomeOk = false;
    }
}

function validaEmail() {
    tomaTiroVai()
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail")
    let checkMark = document.querySelector("#checkmark2")
    let errado = document.querySelector("#error2")
    if (email.value.match(regex)) {
        aeeBoa()
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
        checkMark.style.display = "block"
        errado.style.display = "none"
        email.style.borderColor = "green"
        emailOk = true;
    } else {
        errouPo()
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
        checkMark.style.display = "none"
        errado.style.display = "block"
        email.style.borderColor = "red"
        emailOk = false;
    }
}

function validaAssunto() {
    tomaTiroVai()
    let txtAssunto = document.querySelector("#txtAssunto")
    let checkMark = document.querySelector("#checkmark3")
    let errado = document.querySelector("#error3")

    if (assuntos.value.length >= 100) {
        errouPo()
        txtAssunto.style.display = "block"
        txtAssunto.innerHTML = "Texto muito grande"
        txtAssunto.style.color = "red"
        checkMark.style.display = "none"
        errado.style.display = "block"
        assuntos.style.borderColor = "red"
        assuntoOk = false;
    } else {
        aeeBoa()
        txtAssunto.style.display = "none"
        checkMark.style.display = "block"
        errado.style.display = "none"
        checkMark.style.display = "none"
        assuntos.style.borderColor = "green"
        assuntoOk = true;
    }
}

function errouPo() {
    errado.volume = 0.8;
    errado.load()
    errado.play()
}

function aeeBoa() {
    yay.volume = 0.1;
    yay.load()
    yay.play()
}

function tomaTiroVai() {
    tiro.load();
    tiro.volume = 0.05;
    tiro.play();
}

function enviarJson(e) {

    e.preventDefault();

    if (nomeOk === true && emailOk === true && assuntoOk === true) {

        sanAndreas.style.zIndex = "100";

        gsap.effects.fadein(sanAndreas);

        sniper.play();
        sniper.volume = 0.2;

        mission.load();
        mission.play();
        mission.volume = 0.2;

        setTimeout(someSanAndreas, 5000);
    } else {
        errouPo()
        alert("tudo errado >=(")
    }
}

function someSanAndreas() {
    sanAndreas.style.opacity = "0";
    sanAndreas.style.zIndex = "-1";
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"
}

function mapaNormal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

