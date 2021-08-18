const btn = document.getElementById("btn")
var forca = document.querySelector("input[name='forca']").value
var inteligencia = document.querySelector("input[name='inteligencia']").value
var agilidade = document.querySelector("input[name='agilidade']").value
var destreza = document.querySelector("input[name='destreza']").value
var pontos = document.querySelector("input[name='pt']").value



function adicionaAtributo(atributo) {
    switch(atributo) {
        case 'forca':
            if(pontos == 0) {
                pontos = 0
                break
            } else {
                if(forca == 10) {
                    forca = 10
                    break
                } else {
                    forca++;
                    pontos--,
                    document.querySelector("input[name='forca']").setAttribute('value',forca)
                    document.querySelector("input[name='pt']").setAttribute('value',pontos)
                    break;
                }
            }

        case 'inteligencia': 
            if(pontos == 0) {
                pontos = 0
                break
            } else {
                if(inteligencia == 10) {
                    inteligencia = 10
                    break
                } else {
                    inteligencia++;
                    pontos--,
                    document.querySelector("input[name='inteligencia']").setAttribute('value',inteligencia)
                    document.querySelector("input[name='pt']").setAttribute('value',pontos)
                    break;
                }
            }

        case 'agilidade': 
            if(pontos == 0) {
                pontos = 0
                break
            } else {
                if(agilidade == 10) {
                    agilidade = 10
                    break
                } else {
                    agilidade++;
                    pontos--,
                    document.querySelector("input[name='agilidade']").setAttribute('value',agilidade)
                    document.querySelector("input[name='pt']").setAttribute('value',pontos)
                    break;
                }
            }

        case 'destreza': 
            if(pontos == 0) {
                pontos = 0
                break
            } else {
                if(destreza == 10) {
                    destreza = 10
                    break
                } else {
                    destreza++;
                    pontos--,
                    document.querySelector("input[name='destreza']").setAttribute('value',destreza)
                    document.querySelector("input[name='pt']").setAttribute('value',pontos)
                    break;
                }
            }
    }
}

function removeAtributo(atributo) {

    switch(atributo) {
        case 'forca':
            if(forca <= 0) {
                forca = 0
            } else {
                forca--;
                pontos++;
                document.querySelector("input[name='forca']").setAttribute('value',forca);
                document.querySelector("input[name='pt']").setAttribute('value',pontos)
                break;
            }

        case 'inteligencia': 
            if(inteligencia <= 0) {
                inteligencia = 0
            } else {
                inteligencia--;
                pontos++;
                document.querySelector("input[name='inteligencia']").setAttribute('value',inteligencia)
                document.querySelector("input[name='pt']").setAttribute('value',pontos)
                break;
            }

        case 'agilidade':
            if(agilidade <= 0) {
                agilidade = 0
            } else {
                agilidade--;
                pontos++;
                document.querySelector("input[name='agilidade']").setAttribute('value',agilidade)
                document.querySelector("input[name='pt']").setAttribute('value',pontos)
                break;
            }

        case 'destreza':
            if(destreza <= 0) {
                destreza = 0
            } else {
                destreza--;
                pontos++;
                document.querySelector("input[name='destreza']").setAttribute('value',destreza)
                document.querySelector("input[name='pt']").setAttribute('value',pontos)
                break; 
            }
    }
}


btn.addEventListener("click", function(e){

    e.preventDefault()
    const nome = document.getElementById("nome")
    const valorNome = nome.value

    const classe = document.getElementById("classe")
    const valorClasse = classe.value

    const raca = document.querySelector("input[type='radio']:checked")
    const valorRaca = raca.value

    console.log(valorNome,valorClasse,valorRaca)
    console.log(forca,inteligencia,agilidade,destreza)

    document.querySelector("input[name='forcaResultado']").setAttribute('value',forca)
    document.querySelector("input[name='inteligenciaResultado']").setAttribute('value',inteligencia)
    document.querySelector("input[name='agilidadeResultado']").setAttribute('value',agilidade)
    document.querySelector("input[name='destrezaResultado']").setAttribute('value',destreza)
    document.getElementById("nomeResultado").setAttribute('value',valorNome)
    document.getElementById("classeResultado").setAttribute('value',valorClasse)
    document.getElementById("racaResultado").setAttribute('value',valorRaca)
})
