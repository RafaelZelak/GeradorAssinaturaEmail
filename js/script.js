/*
   Autor: Rafael Zelak Fernandes
   Data: Fevereiro de 2024
   Descrição: Este programa tem como objetivo gerar uma assinatura digital para colocar no email nos padrões da Setup Tecnologia
   Licença: MIT
*/



function atualizarConteudo() {
    const formulario = document.getElementById('meuFormulario');

    const nome = formulario.nome.value;
    const email = formulario.email.value;
    const cargo = formulario.cargo.value;

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
        document.getElementById('conteudoCopiado').innerHTML = `
            <p class="nome_openix">${nome}</p>
            <p class="cargo_openix">${cargo}</p>
            <p class="email_openix">${email_dominio}</p>
            <a class="email_openix">www.openix.com.br</a>
        `; 
    } else {
        document.getElementById('conteudoCopiado').innerHTML = `
            <p class="nome">${nome}</p>
            <p class="cargo">${cargo}</p>
            <p class="email">${email_dominio}</p>
            <a class="email">www.setuptecnologia.com.br</a>
            <div class="rede_social">
                <img src="img/face.png" alt="facebook">
                <img src="img/insta.png" alt="instagram">
                <img src="img/linkedin.png" alt="linkedin">
            </div>
        `;
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
        }

        function atualizarLogo() {
            var select = document.getElementById("opcoes");
            var logo = document.getElementById("logo");
            var header = document.querySelector(".head");
            var footer = document.querySelector(".foot");
            var elementos = document.querySelectorAll("#nome, #cargo, #email, #opcoes, #btnHTML, #btnCopiar, #opcoes_dominio");
            var titulos = document.querySelectorAll("#nome_titulo, #nome_email, #nome_cargo, #nome_opcoes");
            var text = document.querySelectorAll("#nome, #cargo, #email, #opcoes, #btnHTML, #btnCopiar,#opcoes_dominio");

        
            if (select.value === "opcao1") {
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
            } else if (select.value === "opcao2") {
                logo.src = "img/sintax.png";
                header.style.backgroundColor = "#fb6a40";
                footer.style.backgroundColor = "#fb6a40";
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
        