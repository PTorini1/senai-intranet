const PacoteOffice = {
    "Nome":"PACOTE OFFICE",
    "Descrição":"O curso de aperfeiçoamento profissional Pacote Office tem por objetivo desenvolver competências relacionadas ao uso do Word, do PowerPoint e do Excel Básico.",
    "Imagem":"images/Cursos/1.jpg"
}

const cursos = [PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice,PacoteOffice]

let rowFic = document.getElementById("FIC")
let rowFic2 = document.getElementById("FIC2")

for(let x = 0; x < cursos.length; x++){
    let div1 = document.createElement("div")
    div1.className = "col-md-4 text-center"

    if(x<=8){
        rowFic.appendChild(div1)
    }else{
        rowFic2.appendChild(div1)
    } 
    let div2 = document.createElement("div")
    div2.className = "menu-wrap"
    
    let div3 = document.createElement("div")
    div3.className = "text"
    
    let H3 = document.createElement("h3")
    
    let link1 = document.createElement("a")
    link1.className = "menu-img img mb-4"
    
    let link2 = document.createElement("a")
    link2.className = "btn btn-red btn-outline-red mb-5"
    link2.textContent = "Grade"
    
    let p1 = document.createElement("p")
    p1.style = "text-align: justify;"
    
    let p2 = document.createElement("p")
    p2.className = "price"
    p2.textContent = "Presencial"
    div1.appendChild(div2)
    div2.appendChild(link1)
    link1.style = `background-image: url(${cursos[x].Imagem});`
    div2.appendChild(div3)
    div3.appendChild(H3)
    H3.textContent = cursos[x].Nome
    div3.appendChild(p1)
    p1.textContent =  cursos[x].Descrição
    div3.appendChild(p2)
    div3.appendChild(link2)
}

function trocaConteudo(a){
    let ewr = document.getElementById(a)
    ewr.className = "active"
    let fc = document.getElementById(`fic${a}`)

    fc.className = ""
    for(x=`${Number.parseInt(a)-1}`; x != 0; x--){
        let ewr = document.getElementById(x)
        ewr.className = ""
        let fc = document.getElementById(`fic${x}`)
        fc.className = "remove"
    }
    for(x=`${Number.parseInt(a)+1}`; x < 100; x++){
        let ewr = document.getElementById(x)
        ewr.className = ""
        let fc = document.getElementById(`fic${x}`)
        fc.className = "remove"
    }
}

let num_botoes = cursos.length/9 
let pag =document.getElementById("botoes-pagina")
let esquerda =document.createElement("li")
esquerda.textContent = "&lt;"
let direita =document.createElement("li")
direita.textContent = "&lt;"

pag.appendChild(esquerda)

for(let x = 1; x < num_botoes; x++){
    let link23 = document.createElement("li")
    link23.id = `${x}`
    pag.appendChild(link23)
}

pag.appendChild(direita)