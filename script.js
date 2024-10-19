function outros() {
    let caixa = document.getElementById("caixa");
    let outros = document.getElementById("outros");
    caixa.removeChild(outros);
    caixa.innerHTML = (`<input class="form-control form-control-sm" type="text" placeholder="escreva outro(s)" aria-label=".form-control-sm example">`);
}

function outros2() {
    let caixa2 = document.getElementById("caixa2");
    let outros2 = document.getElementById("outros2");
    caixa2.removeChild(outros2);
    caixa2.innerHTML = (`<input class="form-control form-control-sm" type="text" placeholder="escreva outro" aria-label=".form-control-sm example">`);
}

function validarDadosPessoais() {
    console.clear()
    let formularioValido = true;
    
    let nome = document.getElementById('uname').value.trim();
    let sobrenome = document.getElementById('sobrenome').value.trim();
    let email = document.getElementById('floatingInput').value.trim();
    let senha = document.getElementById('floatingPassword').value;
    let telefone = document.getElementById('telefone').value.trim();

    console.log('nome: ' + (nome))
    console.log('sobrenome: ' + (sobrenome))
    console.log('email: ' + email)
    console.log('senha: ' + senha)
    console.log('telefone: ' + telefone)

    // - nome
    if (nome === "") {
        alert('Preencha esse campo obrigatório: ' + 'Nome');
        formularioValido = false;
    }
    else {
            if (nome.length <= 3) {
                alert('Nome ' + 'deve ter pelo menos 4 digitos.');
                formularioValido = false;
            }
    }
    
    // - sobrenome
    if (sobrenome === "") {
        alert('Preencha esse campo obrigatório: ' + 'Sobrenome');
        formularioValido = false;
    }
    else {
        if (sobrenome.length <= 3) {
            alert('Sobrenome' + 'deve ter pelo menos 4 digitos.');
            formularioValido = false;
        }
    }

    // - email
    if (email === "") {
        alert('Preencha esse campo obrigatório: ' + 'Email');
        formularioValido = false;
    }
    else {
            if (email.length <= 3) {
                alert('Email ' + 'deve ter pelo menos 4 digitos.');
                formularioValido = false;
            }
    }

    // - senha
    if (senha === "") {
        alert('Preencha esse campo obrigatório: ' + 'Senha');
        formularioValido = false;
    }
    else {
            if (senha.length <= 7) {
                alert('Senha ' + 'deve ter pelo menos 8 digitos.');
                formularioValido = false;
            }
    }
    // - telefone
    if (telefone === "") {
        alert('Preencha esse campo obrigatório: ' + 'Telefone');
        formularioValido = false;
    }
    else {
            if (telefone.length <= 8) {
                alert('Telefone ' + 'deve ter pelo menos 9 digitos.');
                formularioValido = false;
            }
    }

    let idioma = obterValorSelecionado('idioma');
    let genero = obterValorSelecionado('genero');
    let mensagem = document.getElementById('floatingTextarea2').value.trim();
    let prototipo = (obterNomesArquivos('ArquivosMultiplos'));
    let linguagens = obterValoresCheckbox('linguagem');
        // Para obter os valores das checkboxes de linguagens:
    let bancoDeDadosSelecionado = obterValorRadio('BancoDado');
    let bancosDados = (bancoDeDadosSelecionado);
    let turno = (obterValoresCheckbox('turno'));
    let horario = document.getElementById('time').value;
    let data = document.getElementById('data').value;

    console.log('idioma: ' + idioma)
    console.log('genero: ' + genero)
    console.log('mensagem: ' + mensagem)
    console.log('prototipo: ' + prototipo)
    console.log('linguagens: ' + linguagens)
    console.log('bancosDados: ' + bancosDados)
    console.log('turno: ' + turno) 
    console.log('horario: ' + horario)
    console.log('data: ' + data)

    // - protótipo
    if (prototipo.length === 0) {
        alert('Preencha esse campo obrigatório: ' + 'prototipo');
        formularioValido = false;
    }
    
    // - linguagens
    if (linguagens.length === 0) {
        alert('Preencha esse campo obrigatório: ' + 'linguagens');
        formularioValido = false;
    }
    
    // - banco de dados
    if (!bancosDados) {
        alert('Preencha esse campo obrigatório: ' + 'bancosDados');
        formularioValido = false;
    }
    
    // - turno
    if (turno.length === 0) {
        alert('Preencha esse campo obrigatório: ' + 'turno');
        formularioValido = false;
    }
    
    // - horario
    if (horario === "") {
        alert('Preencha esse campo obrigatório: ' + 'horario');
        formularioValido = false;
    }

    // - data
    if (data === "") {
        alert('Preencha esse campo obrigatório: ' + 'data');
        formularioValido = false;
    }

    if (formularioValido === true) {
        alert('Formulário enviado com sucesso!, verifique no console')

        setTimeout(() => {
            window.location.href = "main.html"; // Substitua pelo URL da sua página
          }, 10000);
    }
}

function validarDadosAdicionais() {

    

}
function obterValoresCheckbox(nomeDoGrupo) {
    const checkboxes = document.querySelectorAll(`input[name="${nomeDoGrupo}"]:checked`);
    const valores = Array.from(checkboxes).map(checkbox => checkbox.value);
    return valores;
}
function obterValorRadio(nomeDoGrupo) {
    const radioSelecionado = document.querySelector(`input[name="${nomeDoGrupo}"]:checked`);
  
    if (radioSelecionado) {
      return radioSelecionado.value;
    } else {
      return null; // Ou uma string vazia, ou qualquer valor padrão que você preferir
    }
}
function obterNomesArquivos(inputId) {
    const inputArquivo = document.getElementById(inputId);
  
    if (!inputArquivo || inputArquivo.type !== "file") {
      console.error("Elemento não encontrado ou não é um input de arquivo.");
      return []; // Retorna um array vazio em caso de erro
    }
  
    return Array.from(inputArquivo.files).map(arquivo => arquivo.name);
}
function obterValorSelecionado(selectId) {
    let selectElement = document.getElementById(selectId);
    let indiceSelecionado = selectElement.selectedIndex;
    return indiceSelecionado !== -1 ? selectElement.options[indiceSelecionado].value : null;
}