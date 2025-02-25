/*
   Autor: Rafael Zelak Fernandes
   Data: Fevereiro de 2024
   Descrição: Este programa tem como objetivo gerar uma assinatura digital para colocar no email nos padrões da Setup Tecnologia
   Licença: MIT
*/

/* Versão 4.0*/
import config from './config.js';

document.getElementById('btnHTML').addEventListener('click', async function(event) {
    event.preventDefault();
    await gerarETransferirHTML();
});

async function gerarETransferirHTML() {
    const select = document.getElementById('opcoes');
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const telefone = document.getElementById('telefone').value;
    const formulario = document.getElementById('meuFormulario');
    const email = formulario.email.value;

    const atPosition = email.indexOf('@');
    let emailBase = email;

    if (atPosition !== -1) {
        emailBase = email.substring(0, atPosition);
    }

    const dominioSelect = document.getElementById('opcoes_dominio');
    const dominioValue = dominioSelect.value;
    const email_dominio = `${emailBase}${dominioValue}`;

    if (nome !== "" && email !== "") {
        exibirMensagem('HTML gerado com sucesso!', 'slideIn');

        const opcaoSelecionada = select.value;
        let empresaKey = "";

        switch (opcaoSelecionada) {
            case "opcao1":
                empresaKey = "setup";
                break;
            case "opcao2":
                empresaKey = "sittax";
                break;
            case "opcao3":
                empresaKey = "acessorias";
                break;
            case "opcao4":
                empresaKey = "beatdoctor";
                break;
            case "opcao5":
                empresaKey = "adveasy";
                break;
            case "opcao6":
                empresaKey = "openix";
                break;
            default:
                exibirMensagem('Erro: Opção inválida.', 'slideInError');
                return;
        }

        const empresaConfig = config[empresaKey];

        if (!empresaConfig) {
            exibirMensagem('Erro: Configuração não encontrada.', 'slideInError');
            return;
        }

        const { color, color_line, color_name, color_cargo, linkFace, linkInsta, linkLinkedin, enterprise, logo, logo_base64 } = empresaConfig;

        const conteudoHTML = gerarConteudoHTML(nome, email_dominio, cargo, logo, color, color_cargo, linkFace, linkInsta, linkLinkedin, enterprise, color_line, color_name, telefone);
        const conteudoHTML_Base64 = gerarConteudoHTML_Base64(nome, email_dominio, cargo, logo_base64, color, color_cargo, linkFace, linkInsta, linkLinkedin, enterprise, color_line, color_name, telefone);

        const tempElement = document.createElement("div");
        tempElement.innerHTML = conteudoHTML_Base64;
        tempElement.style.position = 'absolute';
        tempElement.style.left = '-9999px';
        document.body.appendChild(tempElement);

        html2canvas(tempElement).then(function(canvas) {
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = `assinatura_PNG_${nome}.png`;
            link.click();

            document.body.removeChild(tempElement);
        });

        const blob = new Blob([conteudoHTML], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `assinatura_HTML_${nome}.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        await new Promise(resolve => setTimeout(resolve, 500));
        URL.revokeObjectURL(url);
    } else {
        exibirMensagem('Por favor, preencha todos os campos antes de gerar o HTML.', 'slideInError');
    }
}


function exibirMensagem(mensagem, animationClass) {
    const mensagemPopup = document.createElement('div');
    mensagemPopup.textContent = mensagem;
    mensagemPopup.classList.add('popup', animationClass);

    if (animationClass === 'slideInError') {
        mensagemPopup.classList.add('error');
    }

    document.body.appendChild(mensagemPopup);

    setTimeout(() => {
        mensagemPopup.classList.add('show');
    }, 100);

    setTimeout(() => {
        document.body.removeChild(mensagemPopup);
    }, 2000);
}

function gerarConteudoHTML(nome, email_dominio, cargo, logo, color, color_cargo, linkFace, linkInsta, linkLinkedin, enterprise, color_line, color_name, telefone) {
    if (enterprise === "www.openix.com.br"){
    return `
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; table-layout: fixed;">
    <style>
        @font-face {
            font-family: 'FontePadrao';
            src: url('https://assinaturas.setuptecnologia.com/fonts/LinearGrotesk-Regular.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
        }
    </style>
    <tr>
        <td style="width: 100px; padding: 10px;">
            <img src="${logo}" alt="Logo" style="width: 95px; height: 125px;">
        </td>
        <td style="width: 2px; padding: 0; background-color: ${color_line};"></td>
        <td style="padding: 10px; line-height: 1.2;">
            <div style="color: ${color_name}; font-size: 20px; font-weight: bold; margin: 0; margin-bottom: 5px; font-family: 'FontePadrao';">${nome}</div>
            <div style="color: ${color_cargo}; font-size: 16px; letter-spacing: 2px; margin: 0; font-family: 'FontePadrao';">${cargo}</div>
            <div style="margin: 8px 0;">
                <a href="mailto:${email_dominio}" style="text-decoration: none; color: ${color}; font-size: 16px;">${email_dominio}</a><br>
                <p style="color: ${color}; font-size: 16px; margin-top: 5px; margin-bottom: 5px;">${telefone}</p>
                <a href="https://openix.com.br/" target="_blank" style="text-decoration: none; color: ${color}; font-size: 16px;">${enterprise}</a>
            </div>
            <div style="margin-top: 8px;">
                <a href="https://www.facebook.com/share/kvHWymWSyzSUgEyB/?mibextid=LQQJ4d" style="margin-right: 8px; text-decoration: none;">
                    <img src="https://assinaturas.setuptecnologia.com/img/faceGreen.png" alt="Facebook" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
                <a href="https://www.instagram.com/openixtecnologia/profilecard/?igsh=MTc0YW5sNDRvNmtkcA==" style="margin-right: 8px; text-decoration: none;">
                    <img src="https://assinaturas.setuptecnologia.com/img/instaGreen.png" alt="Instagram" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
                <a href="https://www.linkedin.com/company/openixtecnologia">
                    <img src="https://assinaturas.setuptecnologia.com/img/linkedinGreen.png" alt="LinkedIn" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
            </div>
        </td>
    </tr>
</table>`;
    } else {
        return `
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif; table-layout: fixed;">
    <style>
        @font-face {
            font-family: 'FontePadrao';
            src: url('https://assinaturas.setuptecnologia.com/fonts/LinearGrotesk-Regular.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
        }
    </style>
    <tr>
        <td style="width: 100px; padding: 10px; vertical-align: top;">
            <img src="${logo}" alt="Logo" style="width: 95px; height: 125px;">
        </td>
        <td style="width: 2px; padding: 0; background-color: ${color_line};"></td>
        <td style="padding: 10px; line-height: 1.2; vertical-align: top;">
            <div style="color: ${color_name}; font-size: 20px; font-weight: bold; margin: 0; margin-bottom: 5px; font-family: 'FontePadrao';">${nome}</div>
            <div style="color: ${color_cargo}; font-size: 16px; letter-spacing: 2px; margin: 0; font-family: 'FontePadrao';">${cargo}</div>
            <div style="margin: 8px 0;">
                <a href="mailto:${email_dominio}" style="text-decoration: none; color: ${color}; font-size: 16px;">${email_dominio}</a><br>
                <p style="color: ${color}; font-size: 16px; margin-top: 5px; margin-bottom: 5px;">${telefone}</p>
                <a href="http://www.setuptecnologia.com.br" target="_blank" style="text-decoration: none; color: ${color}; font-size: 16px;">${enterprise}</a>
            </div>
            <div style="margin-top: 8px;">
                <a href="https://www.facebook.com/setuptecnologia" style="margin-right: 8px; text-decoration: none;">
                    <img src="${linkFace}" alt="Facebook" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
                <a href="https://www.instagram.com/setup_tecnologia/" style="margin-right: 8px; text-decoration: none;">
                    <img src="${linkInsta}" alt="Instagram" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
                <a href="https://www.linkedin.com/company/setuptecnologia/?originalSubdomain=br">
                    <img src="${linkLinkedin}" alt="LinkedIn" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
            </div>
        </td>
    </tr>
</table>`;
    }
}
function gerarConteudoHTML_Base64(nome, email_dominio, cargo, logo_base64, color, color_cargo, linkFace, linkInsta, linkLinkedin, enterprise, color_line, color_name, telefone) {
    return `
<table style="border-collapse: collapse; font-family: Arial, sans-serif; table-layout: fixed;">
    <style>
        @font-face {
            font-family: 'FontePadrao';
            src: url('https://assinaturas.setuptecnologia.com/fonts/LinearGrotesk-Regular.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
        }
    </style>
    <tr>
        <td style="width: 100px; padding: 10px; vertical-align: top;">
            <img src="${logo_base64}" alt="Logo" style="width: 95px; height: 125px;">
        </td>
        <td style="width: 2px; padding: 0; background-color: ${color_line};"></td>
        <td style="padding: 10px; line-height: 1.2; vertical-align: top;">
            <div style="color: ${color_name}; font-size: 20px; font-weight: bold; margin: 0; margin-bottom: 5px; font-family: 'FontePadrao';">${nome}</div>
            <div style="color: ${color_cargo}; font-size: 16px; letter-spacing: 2px; margin: 0; font-family: 'FontePadrao';">${cargo}</div>
            <div style="margin: 8px 0;">
                <a href="mailto:${email_dominio}" style="text-decoration: none; color: ${color}; font-size: 16px;">${email_dominio}</a><br>
                <p style="color: ${color}; font-size: 16px; margin-top: 5px; margin-bottom: 5px;">${telefone}</p>
                <a href="http://www.setuptecnologia.com.br" target="_blank" style="text-decoration: none; color: ${color}; font-size: 16px;">${enterprise}</a>
            </div>
            <div style="margin-top: 8px;">
                <a href="https://www.facebook.com/setuptecnologia" style="margin-right: 8px; text-decoration: none;">
                    <img src="${linkFace}" alt="Facebook" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
                <a href="https://www.instagram.com/setup_tecnologia/" style="margin-right: 8px; text-decoration: none;">
                    <img src="${linkInsta}" alt="Instagram" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
                <a href="https://www.linkedin.com/company/setuptecnologia/?originalSubdomain=br">
                    <img src="${linkLinkedin}" alt="LinkedIn" style="width: 22px; height: 22px; vertical-align: middle;">
                </a>
            </div>
        </td>
    </tr>
</table>`;
}

function atualizarHTML(event) {
    event.preventDefault();
}

function criarArquivoHTML(event) {
    event.preventDefault();
}