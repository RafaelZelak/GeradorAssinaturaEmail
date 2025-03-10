/*
   Autor: Rafael Zelak Fernandes
   Data: Fevereiro de 2024
   Descrição: Este programa tem como objetivo gerar uma assinatura digital para colocar no email nos padrões da Setup Tecnologia
   Licença: MIT
*/

/* Versão 4.0*/

const addButton = document.getElementById('add_telefone');
const telefoneLabel = document.getElementById('nome_telefone');
const telefoneTxt = document.getElementById('telefone_txt');
let telefoneGlobal = false;

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', (event) => {
    let input = telefoneInput.value;

    input = input.replace(/\D/g, '');

    if (input.length > 11) {
        input = input.substring(0, 11);
    }

    if (input.length >= 2) {
        const ddd = input.substring(0, 2);
        let telefone = input.substring(2);

        if (telefone.length >= 8) {
            if (telefone.length === 8 && telefone.charAt(0) !== '9') {
                telefone = '9' + telefone;
            }
            telefone = telefone.substring(0, 5) + '-' + telefone.substring(5);
        } else if (telefone.length > 3) {
            telefone = telefone.substring(0, 4) + '-' + telefone.substring(4);
        }

        telefoneInput.value = `(${ddd}) ${telefone}`;
    } else {
        telefoneInput.value = input;
    }
});

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (addButton.textContent === '+') {
        telefoneGlobal = true;
        addButton.textContent = '-';
        addButton.classList.add('remover');
        telefoneLabel.style.display = 'block';
        telefoneInput.style.display = 'block';
        telefoneTxt.style.display = 'none';
    } else {
        telefoneGlobal = false;
        addButton.textContent = '+';
        addButton.classList.remove('remover');
        telefoneLabel.style.display = 'none';
        telefoneInput.style.display = 'none';
        telefoneInput.value = '';
        telefoneTxt.style.display = 'block';
    }
    atualizarConteudo();
});



function formatarTelefone(input) {
    input = input.replace(/\D/g, '');

    if (input.length >= 2) {
        const ddd = input.substring(0, 2);
        let telefone = input.substring(2);

        if (telefone.length >= 8) {
            if (telefone.length === 8 && telefone.charAt(0) !== '9') {
                telefone = '9' + telefone;
            }
            telefone = telefone.substring(0, 5) + '-' + telefone.substring(5);
        } else if (telefone.length > 3) {
            telefone = telefone.substring(0, 4) + '-' + telefone.substring(4);
        }

        return `(${ddd}) ${telefone}`;
    } else {
        return input;
    }
}

function atualizarConteudo() {
    const formulario = document.getElementById('meuFormulario');

    const nome = formulario.nome.value;
    const email = formulario.email.value;
    const cargo = formulario.cargo.value;
    let telefone = formulario.telefone.value;

    telefone = formatarTelefone(telefone);

    const atPosition = email.indexOf('@');
    let emailBase = email;

    if (atPosition !== -1) {
        emailBase = email.substring(0, atPosition);
    }

    const dominioSelect = document.getElementById('opcoes_dominio');
    const dominioValue = dominioSelect.value;
    const email_dominio = `${emailBase}${dominioValue}`;
    const empresa = document.getElementById('opcoes');
    const empresaSelecionada = empresa.value;

    if (empresaSelecionada === "opcao6") {
        var td = document.querySelector('.linha td.line_color');
        if (td) {
            td.classList.remove('line_color');
            td.classList.add('line_color_openix');
        }
        if (telefoneGlobal === true) {
            document.getElementById('conteudoCopiado').innerHTML = `
                <p class="nome_openix">${nome}</p>
                <p class="cargo_openix">${cargo}</p>
                <p class="email_openix">${email_dominio}</p>
                <p class="telefone_openix">${telefone}</p>
                <a class="email_openix">www.openix.com.br</a>
            <div style="margin-top: 8px;">
                <a href="https://www.facebook.com/share/kvHWymWSyzSUgEyB/?mibextid=LQQJ4d" style="text-decoration: none;">
                    <img src="https://assinaturas.setuptecnologia.com/img/faceGreen.png" alt="Facebook" style="width: 22px; height: 22px;">
                </a>
                <a href="https://www.instagram.com/openixtecnologia/profilecard/?igsh=MTc0YW5sNDRvNmtkcA==" style="text-decoration: none;">
                    <img src="https://assinaturas.setuptecnologia.com/img/instaGreen.png" alt="Instagram" style="width: 22px; height: 22px;">
                </a>
                <a href="https://www.linkedin.com/company/openixtecnologia">
                    <img src="https://assinaturas.setuptecnologia.com/img/linkedinGreen.png" alt="LinkedIn" style="width: 22px; height: 22px;">
                </a>
            </div>
                `;
        }else{
                document.getElementById('conteudoCopiado').innerHTML = `
                    <style>
                        @font-face {
                            font-family: 'FontePadrao';
                            src: url('https://assinaturas.setuptecnologia.com/fonts/LinearGrotesk-Regular.otf') format('opentype');
                            font-weight: normal;
                            font-style: normal;
                        }
                    </style>
                    <p class="nome_openix" style="font-family: 'FontePadrao';">${nome}</p>
                    <p class="cargo_openix" style="font-family: 'FontePadrao';">${cargo}</p>
                    <p class="email_openix">${email_dominio}</p>
                    <a class="email_openix">www.openix.com.br</a>
                    <div class="rede_social">
                        <img src="https://assinaturas.setuptecnologia.com/img/faceGreen.png" alt="facebook">
                        <img src="https://assinaturas.setuptecnologia.com/img/instaGreen.png" alt="instagram">
                        <img src="https://assinaturas.setuptecnologia.com/img/linkedinGreen.png" alt="linkedin">
                    </div>
                `;
        }
    } else {
        if (telefoneGlobal === true) {
            document.getElementById('conteudoCopiado').innerHTML = `
                <style>
                    @font-face {
                        font-family: 'FontePadrao';
                        src: url('https://assinaturas.setuptecnologia.com/fonts/LinearGrotesk-Regular.otf') format('opentype');
                        font-weight: normal;
                        font-style: normal;
                    }
                </style>
                <p class="nome" style="font-family: 'FontePadrao';">${nome}</p>
                <p class="cargo" style="font-family: 'FontePadrao';">${cargo}</p>
                <p class="email">${email_dominio}</p>
                <p class="telefone">${telefone}</p>
                <a class="email">www.setuptecnologia.com.br</a>
                <div class="rede_social">
                    <img src="img/face.png" alt="facebook">
                    <img src="img/insta.png" alt="instagram">
                    <img src="img/linkedin.png" alt="linkedin">
                </div>
            `;
        } else {
            document.getElementById('conteudoCopiado').innerHTML = `
                <style>
                    @font-face {
                        font-family: 'FontePadrao';
                        src: url('https://assinaturas.setuptecnologia.com/fonts/LinearGrotesk-Regular.otf') format('opentype');
                        font-weight: normal;
                        font-style: normal;
                    }
                </style>
                <p class="nome" style="font-family: 'FontePadrao';">${nome}</p>
                <p class="cargo" style="font-family: 'FontePadrao';">${cargo}</p>
                <p class="email">${email_dominio}</p>
                <a class="email">www.setuptecnologia.com.br</a>
                <div class="rede_social">
                    <img src="img/face.png" alt="facebook">
                    <img src="img/insta.png" alt="instagram">
                    <img src="img/linkedin.png" alt="linkedin">
                </div>
            `;
        }
    }

    if (nome === "" && email === "" && cargo === "") {
        document.getElementById('conteudoCopiado').innerHTML = ``;
    }
}


document.getElementById('meuFormulario').addEventListener('input', atualizarConteudo);
document.getElementById('opcoes').addEventListener('change', atualizarConteudo);
document.getElementById('opcoes_dominio').addEventListener('change', atualizarConteudo);


        function removerOpcaoPadrao() {
            var select = document.getElementById("opcoes");
            var option = select.options[0];

            if (option.value === "") {
                select.remove(0);
            }

            document.getElementById("nome").disabled = false;
            document.getElementById("cargo").disabled = false;
            document.getElementById("email").disabled = false;
            document.getElementById("opcoes_dominio").disabled = false;
            document.getElementById("telefone").disabled = false;
        }
        
        function atualizarLogo() {
            var select = document.getElementById("opcoes");
            var logo = document.getElementById("logo");
            var header = document.querySelector(".head");
            var footer = document.querySelector(".foot");
            var elementos = document.querySelectorAll("#nome, #cargo, #email, #opcoes, #btnHTML, #btnCopiar, #opcoes_dominio, #telefone");
            var titulos = document.querySelectorAll("#nome_titulo, #nome_email, #nome_cargo, #nome_opcoes, #nome_telefone");
            var text = document.querySelectorAll("#nome, #cargo, #email, #opcoes, #btnHTML, #btnCopiar,#opcoes_dominio, #telefone");


            if (select.value === "opcao1") {
                logo.src = "img/logo.png";
                header.style.backgroundColor = "#0074AAFF";
                footer.style.backgroundColor = "#0074AAFF";
                document.getElementById('add_telefone').style.backgroundColor = "#0074AAFF";
                document.getElementById('telefone_txt').style.color = "#0074AAFF";

                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #0074AAFF";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#003A55FF";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#0074AAFF";
                }
            } else if (select.value === "opcao2") {
                logo.src = "img/sintax.png";
                header.style.backgroundColor = "#fb6a40";
                footer.style.backgroundColor = "#fb6a40";
                document.getElementById('add_telefone').style.backgroundColor = "#fb6a40";
                document.getElementById('telefone_txt').style.color = "#fb6a40";
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #fb6a40";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#B3472B";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#fb6a40";
                }
            } else if (select.value === "opcao3") {
                logo.src = "img/acessorias.png";
                header.style.backgroundColor = "#d19e65";
                footer.style.backgroundColor = "#d19e65";
                document.getElementById('add_telefone').style.backgroundColor = "#d19e65";
                document.getElementById('telefone_txt').style.color = "#d19e65";
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #d19e65";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#8C6946";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#d19e65";
                }
            } else if (select.value === "opcao4") {
                logo.src = "img/beatdoctor.png";
                header.style.backgroundColor = "#ff7478";
                footer.style.backgroundColor = "#ff7478";
                document.getElementById('add_telefone').style.backgroundColor = "#ff7478";
                document.getElementById('telefone_txt').style.color = "#ff7478";
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #ff7478";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#B34E4E";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#ff7478";
                }
            } else if (select.value === "opcao5") {
                logo.src = "img/adveasy.png";
                header.style.backgroundColor = "#14243b";
                footer.style.backgroundColor = "#14243b";
                document.getElementById('add_telefone').style.backgroundColor = "#14243b";
                document.getElementById('telefone_txt').style.color = "#14243b";
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #14243b";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#0D1928";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#14243b";
                }
            } else if (select.value === "opcao6") {
                logo.src = "img/openix.png";
                header.style.backgroundColor = "#579b51";
                footer.style.backgroundColor = "#579b51";
                document.getElementById('add_telefone').style.backgroundColor = "#579b51";
                document.getElementById('telefone_txt').style.color = "#579b51";
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #579b51";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#134d0f";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#579b51";
                }
            } else {
                logo.src = "img/logo.png";
                header.style.backgroundColor = "#0074AAFF";
                footer.style.backgroundColor = "#0074AAFF";
                for (var i = 0; i < elementos.length; i++) {
                    elementos[i].style.border = "2px solid #0074AAFF";
                }
                for (var i = 0; i < elementos.length; i++) {
                    text[i].style.color = "#003A55FF";
                }
                for (var i = 0; i < titulos.length; i++) {
                    titulos[i].style.color = "#0074AAFF";
                }
            }
            function applyHoverStyles() {
                var btnHTML = document.getElementById("btnHTML");
                var btnCopiar = document.getElementById("btnCopiar");
                if (select.value === "opcao1"){
                    btnHTML.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(118, 163, 184, 0.3)";
                    });

                    btnHTML.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });

                    btnCopiar.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(118, 163, 184, 0.3)";
                    });

                    btnCopiar.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });
                }else if (select.value === "opcao2"){
                    btnHTML.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(255, 208, 166, 0.6)";
                    });

                    btnHTML.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });

                    btnCopiar.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(255, 208, 166, 0.6)";
                    });

                    btnCopiar.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });
                }else if (select.value === "opcao3"){
                    btnHTML.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(255, 240, 203, 0.6)";
                    });

                    btnHTML.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });

                    btnCopiar.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(255, 240, 203, 0.6)";
                    });

                    btnCopiar.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });
                }else if (select.value === "opcao4"){
                    btnHTML.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(255, 153, 157, 0.3)";
                    });

                    btnHTML.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });

                    btnCopiar.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(255, 153, 157, 0.3)";
                    });

                    btnCopiar.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });
                }else if (select.value === "opcao5"){
                    btnHTML.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(118, 163, 184, 0.3)";
                    });

                    btnHTML.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });

                    btnCopiar.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(118, 163, 184, 0.3)";
                    });

                    btnCopiar.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });
                }else if (select.value === "opcao6"){
                    btnHTML.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(87, 155, 81, 0.3)";
                    });

                    btnHTML.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });

                    btnCopiar.addEventListener("mouseover", function() {
                        this.style.backgroundColor = "rgba(87, 155, 81, 0.3)";
                    });

                    btnCopiar.addEventListener("mouseout", function() {
                        this.style.backgroundColor = "";
                    });
                }
            }

            applyHoverStyles();
        }
        document.getElementById('btnCopiar').addEventListener('mouseover', toggleHoverBorder);
        document.getElementById('btnCopiar').addEventListener('mouseout', toggleHoverBorder);
        document.getElementById('btnHTML').addEventListener('mouseover', toggleHoverBorder);
        document.getElementById('btnHTML').addEventListener('mouseout', toggleHoverBorder);

        function showInfo() {
            document.getElementById('infoOverlay').classList.add('show');
        }

        function hideInfo() {
            document.getElementById('infoOverlay').classList.remove('show');
        }

        window.onclick = function(event) {
            if (event.target === document.getElementById('infoOverlay')) {
                hideInfo();
            }
        };

        function escolhaAssinatura(event) {
            event.preventDefault();
            
            const selectEmpresa = document.getElementById('opcoes');
            const opcaoSelecionada = selectEmpresa.value;
            
            if (opcaoSelecionada === "opcao1") {
              fetch("logo_setup.html")
                .then(response => {
                  if (!response.ok) {
                    throw new Error("Erro ao carregar o arquivo logo_setup.html");
                  }
                  return response.text();
                })
                .then(htmlText => {
                  const nome = document.getElementById('nome').value;
                  const cargo = document.getElementById('cargo').value;
                  const email = document.getElementById('email').value;
                  const dominio = document.getElementById('opcoes_dominio').value;
                  const emailCompleto = `${email}${dominio}`;
                  
                  htmlText = htmlText.replace(/{{nome}}/g, nome);
                  htmlText = htmlText.replace(/{{cargo}}/g, cargo);
                  htmlText = htmlText.replace(/{{email}}/g, emailCompleto);
                  
                  const tempContainer = document.createElement('div');
                  tempContainer.style.position = "absolute";
                  tempContainer.style.left = "-9999px";
                  tempContainer.innerHTML = htmlText;
                  document.body.appendChild(tempContainer);
                  
                  const assinaturaElement = tempContainer.querySelector('#assinatura');
                  if (!assinaturaElement) {
                    throw new Error("Elemento de assinatura não encontrado.");
                  }
                  
                  const range = document.createRange();
                  range.selectNodeContents(assinaturaElement);
                  const selection = window.getSelection();
                  selection.removeAllRanges();
                  selection.addRange(range);
                  
                  try {
                    const successful = document.execCommand('copy');
                    const msg = successful ? 'copiada com sucesso!' : 'não foi possível copiar.';
                    alert("Assinatura " + msg);
                  } catch (err) {
                    console.error("Erro ao copiar a assinatura:", err);
                    alert("Erro ao copiar a assinatura.");
                  }
                  
                  selection.removeAllRanges();
                  document.body.removeChild(tempContainer);
                })
                .catch(err => {
                  console.error("Erro:", err);
                  alert("Erro ao carregar a assinatura.");
                });
            } 
            if (opcaoSelecionada === "opcao2") {
                fetch("logo_sittax.html")
                  .then(response => {
                    if (!response.ok) {
                      throw new Error("Erro ao carregar o arquivo logo_setup.html");
                    }
                    return response.text();
                  })
                  .then(htmlText => {
                    // Obtém os valores inseridos pelo usuário
                    const nome = document.getElementById('nome').value;
                    const cargo = document.getElementById('cargo').value;
                    const email = document.getElementById('email').value;
                    const dominio = document.getElementById('opcoes_dominio').value;
                    const emailCompleto = `${email}${dominio}`;
                    
                    htmlText = htmlText.replace(/{{nome}}/g, nome);
                    htmlText = htmlText.replace(/{{cargo}}/g, cargo);
                    htmlText = htmlText.replace(/{{email}}/g, emailCompleto);
                    
                    const tempContainer = document.createElement('div');
                    tempContainer.style.position = "absolute";
                    tempContainer.style.left = "-9999px";
                    tempContainer.innerHTML = htmlText;
                    document.body.appendChild(tempContainer);
                    
                    const assinaturaElement = tempContainer.querySelector('#assinatura');
                    if (!assinaturaElement) {
                      throw new Error("Elemento de assinatura não encontrado.");
                    }
                    
                    const range = document.createRange();
                    range.selectNodeContents(assinaturaElement);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                    try {
                      const successful = document.execCommand('copy');
                      const msg = successful ? 'copiada com sucesso!' : 'não foi possível copiar.';
                      alert("Assinatura " + msg);
                    } catch (err) {
                      console.error("Erro ao copiar a assinatura:", err);
                      alert("Erro ao copiar a assinatura.");
                    }
                    
                    selection.removeAllRanges();
                    document.body.removeChild(tempContainer);
                  })
                  .catch(err => {
                    console.error("Erro:", err);
                    alert("Erro ao carregar a assinatura.");
                  });
              } 
              if (opcaoSelecionada === "opcao3") {
                fetch("logo_acessorias.html")
                  .then(response => {
                    if (!response.ok) {
                      throw new Error("Erro ao carregar o arquivo logo_setup.html");
                    }
                    return response.text();
                  })
                  .then(htmlText => {
                    const nome = document.getElementById('nome').value;
                    const cargo = document.getElementById('cargo').value;
                    const email = document.getElementById('email').value;
                    const dominio = document.getElementById('opcoes_dominio').value;
                    const emailCompleto = `${email}${dominio}`;
                    
                    htmlText = htmlText.replace(/{{nome}}/g, nome);
                    htmlText = htmlText.replace(/{{cargo}}/g, cargo);
                    htmlText = htmlText.replace(/{{email}}/g, emailCompleto);
                    
                    const tempContainer = document.createElement('div');
                    tempContainer.style.position = "absolute";
                    tempContainer.style.left = "-9999px";
                    tempContainer.innerHTML = htmlText;
                    document.body.appendChild(tempContainer);
                    
                    const assinaturaElement = tempContainer.querySelector('#assinatura');
                    if (!assinaturaElement) {
                      throw new Error("Elemento de assinatura não encontrado.");
                    }
                    
                    const range = document.createRange();
                    range.selectNodeContents(assinaturaElement);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                    try {
                      const successful = document.execCommand('copy');
                      const msg = successful ? 'copiada com sucesso!' : 'não foi possível copiar.';
                      alert("Assinatura " + msg);
                    } catch (err) {
                      console.error("Erro ao copiar a assinatura:", err);
                      alert("Erro ao copiar a assinatura.");
                    }
                    
                   
                    selection.removeAllRanges();
                    document.body.removeChild(tempContainer);
                  })
                  .catch(err => {
                    console.error("Erro:", err);
                    alert("Erro ao carregar a assinatura.");
                  });
              }

              if (opcaoSelecionada === "opcao4") {
                fetch("logo_best_doctors.html")
                  .then(response => {
                    if (!response.ok) {
                      throw new Error("Erro ao carregar o arquivo logo_setup.html");
                    }
                    return response.text();
                  })
                  .then(htmlText => {
                    
                    const nome = document.getElementById('nome').value;
                    const cargo = document.getElementById('cargo').value;
                    const email = document.getElementById('email').value;
                    const dominio = document.getElementById('opcoes_dominio').value;
                    const emailCompleto = `${email}${dominio}`;
                    
                    // Substitui os placeholders pelos valores dinâmicos
                    htmlText = htmlText.replace(/{{nome}}/g, nome);
                    htmlText = htmlText.replace(/{{cargo}}/g, cargo);
                    htmlText = htmlText.replace(/{{email}}/g, emailCompleto);
                    
                    const tempContainer = document.createElement('div');
                    tempContainer.style.position = "absolute";
                    tempContainer.style.left = "-9999px";
                    tempContainer.innerHTML = htmlText;
                    document.body.appendChild(tempContainer);
                    
                    const assinaturaElement = tempContainer.querySelector('#assinatura');
                    if (!assinaturaElement) {
                      throw new Error("Elemento de assinatura não encontrado.");
                    }                    
            
                    const range = document.createRange();
                    range.selectNodeContents(assinaturaElement);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                    try {
                      const successful = document.execCommand('copy');
                      const msg = successful ? 'copiada com sucesso!' : 'não foi possível copiar.';
                      alert("Assinatura " + msg);
                    } catch (err) {
                      console.error("Erro ao copiar a assinatura:", err);
                      alert("Erro ao copiar a assinatura.");
                    }                    
                    
                    selection.removeAllRanges();
                    document.body.removeChild(tempContainer);
                  })
                  .catch(err => {
                    console.error("Erro:", err);
                    alert("Erro ao carregar a assinatura.");
                  });
              } 
 
              if (opcaoSelecionada === "opcao5") {
                fetch("logo_adveasy.html")
                  .then(response => {
                    if (!response.ok) {
                      throw new Error("Erro ao carregar o arquivo logo_setup.html");
                    }
                    return response.text();
                  })
                  .then(htmlText => {                    
                    const nome = document.getElementById('nome').value;
                    const cargo = document.getElementById('cargo').value;
                    const email = document.getElementById('email').value;
                    const dominio = document.getElementById('opcoes_dominio').value;
                    const emailCompleto = `${email}${dominio}`;                    
                    
                    htmlText = htmlText.replace(/{{nome}}/g, nome);
                    htmlText = htmlText.replace(/{{cargo}}/g, cargo);
                    htmlText = htmlText.replace(/{{email}}/g, emailCompleto);                    
                    
                    const tempContainer = document.createElement('div');
                    tempContainer.style.position = "absolute";
                    tempContainer.style.left = "-9999px";
                    tempContainer.innerHTML = htmlText;
                    document.body.appendChild(tempContainer);
                    
                    
                    const assinaturaElement = tempContainer.querySelector('#assinatura');
                    if (!assinaturaElement) {
                      throw new Error("Elemento de assinatura não encontrado.");
                    }
                    
                    
                    const range = document.createRange();
                    range.selectNodeContents(assinaturaElement);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                    try {
                      const successful = document.execCommand('copy');
                      const msg = successful ? 'copiada com sucesso!' : 'não foi possível copiar.';
                      alert("Assinatura " + msg);
                    } catch (err) {
                      console.error("Erro ao copiar a assinatura:", err);
                      alert("Erro ao copiar a assinatura.");
                    }
                    
                    
                    selection.removeAllRanges();
                    document.body.removeChild(tempContainer);
                  })
                  .catch(err => {
                    console.error("Erro:", err);
                    alert("Erro ao carregar a assinatura.");
                  });
              }
              
              if (opcaoSelecionada === "opcao6") {
                fetch("logo_openix.html")
                  .then(response => {
                    if (!response.ok) {
                      throw new Error("Erro ao carregar o arquivo logo_setup.html");
                    }
                    return response.text();
                  })
                  .then(htmlText => {
                    
                    const nome = document.getElementById('nome').value;
                    const cargo = document.getElementById('cargo').value;
                    const email = document.getElementById('email').value;
                    const dominio = document.getElementById('opcoes_dominio').value;
                    const emailCompleto = `${email}${dominio}`;
                    
                    
                    htmlText = htmlText.replace(/{{nome}}/g, nome);
                    htmlText = htmlText.replace(/{{cargo}}/g, cargo);
                    htmlText = htmlText.replace(/{{email}}/g, emailCompleto);
                    
                    
                    const tempContainer = document.createElement('div');
                    tempContainer.style.position = "absolute";
                    tempContainer.style.left = "-9999px";
                    tempContainer.innerHTML = htmlText;
                    document.body.appendChild(tempContainer);
                    
                    
                    const assinaturaElement = tempContainer.querySelector('#assinatura');
                    if (!assinaturaElement) {
                      throw new Error("Elemento de assinatura não encontrado.");
                    }
                    
                    
                    const range = document.createRange();
                    range.selectNodeContents(assinaturaElement);
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    
                    try {
                      const successful = document.execCommand('copy');
                      const msg = successful ? 'copiada com sucesso!' : 'não foi possível copiar.';
                      alert("Assinatura " + msg);
                    } catch (err) {
                      console.error("Erro ao copiar a assinatura:", err);
                      alert("Erro ao copiar a assinatura.");
                    }
                    
                    
                    selection.removeAllRanges();
                    document.body.removeChild(tempContainer);
                  })
                  .catch(err => {
                    console.error("Erro:", err);
                    alert("Erro ao carregar a assinatura.");
                  });
              }
            else {
              console.log("Opção não implementada ainda.");
            }
          }
          
