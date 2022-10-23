{
let footernews = document.getElementsByName("noticias")
let link1 = document.createElement("a")
let link2 = document.createElement("a")
let linkimg1 = document.createElement("a")
let linkTexto1 = document.createElement("a")


link2.style = "font-size:12px;"

linkimg1.style = "background-image: url(images/Cursos/1.jpg);" //IMAGEM DA PRIMEIRA NOTÍCIA
linkimg1.className = "blog-img mr-4"


linkTexto1.textContent = "Curso de Assistente Financeiro" //TÍTULO DA PRIMEIRA NOTÍCIA
linkimg1.setAttribute("href", "https://diadema.sp.senai.br/curso/94609/125/assistente-financeiro") //LINK DA PRIMEIRA NOTÍCIA
linkTexto1.setAttribute("href", "https://diadema.sp.senai.br/curso/94609/125/assistente-financeiro") //LINK DA PRIMEIRA NOTÍCIA

let spancalendar = document.createElement("span")
let spanperson = document.createElement("span")

spancalendar.className = "icon-calendar vermelho"
spanperson.className= "icon-person vermelho"

let texto = document.createElement("div") 
let divMeta = document.createElement("div")
let div1 = document.createElement("div")

spancalendar.style = "margin: 4px;"
spanperson.style = "margin: 4px;"

texto.className = "text"
divMeta.className = "meta"

let h3Titulo = document.createElement("h3")
h3Titulo.className = "heading"

footernews[0].appendChild(linkimg1)
footernews[0].appendChild(texto)
texto.appendChild(h3Titulo)
h3Titulo.appendChild(linkTexto1)
texto.appendChild(divMeta)
divMeta.appendChild(div1)
div1.appendChild(link1)
link1.appendChild(spancalendar)
link1.append("08 de Agosto, 2022") //DATA DA PRIMEIRA NOTÍCIA
divMeta.appendChild(link2)
link2.appendChild(spanperson)
link2.append("Administrativo") //SETOR
}

{
let footernews = document.getElementsByName("noticias")
let link1 = document.createElement("a")
let link2 = document.createElement("a")
let linkimg2 = document.createElement("a") 
let linkTexto2 = document.createElement("a")
link2.style = "font-size:12px;"

linkimg2.style = "background-image: url(images/Cursos/2.jpg);" //IMAGEM DA SEGUNDA NOTÍCIA
linkimg2.className = "blog-img mr-4"

linkTexto2.setAttribute("href", "https://diadema.sp.senai.br/curso/91446/125/analista-de-recursos-humanos") //LINK DA SEGUNDA NOTÍCIA
linkimg2.setAttribute("href", "https://diadema.sp.senai.br/curso/91446/125/analista-de-recursos-humanos") //LINK DA SEGUNDA NOTÍCIA
linkTexto2.textContent = "Curso de Analista de Recursos Humanos" //TÍTULO DA SEGUNDA NOTÍCIA

let spancalendar = document.createElement("span")
let spanperson = document.createElement("span")

spancalendar.className = "icon-calendar vermelho"
spanperson.className= "icon-person vermelho"

let texto = document.createElement("div") 
let divMeta = document.createElement("div")
let div1 = document.createElement("div")

texto.className = "text"
divMeta.className = "meta"

let h3Titulo = document.createElement("h3")
h3Titulo.className = "heading"

spancalendar.style = "margin: 4px;"
spanperson.style = "margin: 4px;"

footernews[1].appendChild(linkimg2)
footernews[1].appendChild(texto)
texto.appendChild(h3Titulo)
h3Titulo.appendChild(linkTexto2)
texto.appendChild(divMeta)
divMeta.appendChild(div1)
div1.appendChild(link1)
link1.appendChild(spancalendar)
link1.append("15 de Agosto, 2022") //DATA DA PRIMEIRA NOTÍCIA
divMeta.appendChild(link2)
link2.appendChild(spanperson)
link2.append("Administrativo") //SETOR
}