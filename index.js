const fs = require('fs').promises;  // Usar fs.promises para lidar com Promises
const path = require('path');
const colors = require('colors');
const inquirer = require('inquirer').default;  // Corrigir a importação do inquirer
const figlet = require('figlet');

// Função para exibir o título com figlet
const exibirTitulo = () => {
    figlet('Conversor de Track', (err, data) => {
        if (err) {
            console.log(colors.red('Erro ao gerar o título.'));
            return;
        }
        console.log(colors.bold.cyan(data));
        iniciarConversao();
    });
};

// Função para converter texto em JSON de tracks
const converterTextoParaJson = (texto) => {
    return texto.trim().split('\n').map(linha => {
        const [artista, track] = linha.split(' - ');
        return {
            track: track?.trim() || '',
            artist: artista?.trim() || '',
            album: ''  // Album vazio
        };
    });
};

// Função para verificar se há novas tracks no JSON
const verificarJsonExistente = async (tracks) => {
    const caminhoDoArquivoJson = path.join(__dirname, 'tracks.json');
    try {
        await fs.access(caminhoDoArquivoJson);
        const dadosExistentes = JSON.parse(await fs.readFile(caminhoDoArquivoJson, 'utf8'));
        const tracksExistentes = dadosExistentes.map(m => `${m.artist} - ${m.track}`);
        const tracksNovas = tracks.filter(m => !tracksExistentes.includes(`${m.artist} - ${m.track}`));

        if (tracksNovas.length === 0) {
            console.log(colors.yellow('Nenhuma nova track para adicionar.'));
            return true;
        }

        console.log(colors.yellow(`Encontradas ${tracksNovas.length} novas tracks para adicionar.`));
        return false;
    } catch {
        return false;  // Arquivo não existe, pode continuar
    }
};

// Função para salvar as tracks no arquivo JSON
const salvarJson = async (tracks, sobrescrever = false) => {
    const caminhoDoArquivoJson = path.join(__dirname, 'tracks.json');
    let dadosExistentes = [];

    try {
        if (!sobrescrever) {
            await fs.access(caminhoDoArquivoJson);
            dadosExistentes = JSON.parse(await fs.readFile(caminhoDoArquivoJson, 'utf8'));
        }
        const allTracks = [...dadosExistentes, ...tracks];  // Combina as tracks existentes com as novas
        await fs.writeFile(caminhoDoArquivoJson, JSON.stringify(allTracks, null, 2));
        console.log(colors.green(`Arquivo JSON salvo em: ${caminhoDoArquivoJson}`));
    } catch (err) {
        console.error(colors.red(`Erro ao salvar o arquivo JSON: ${err.message}`));
    }
};

// Função para ler e converter o arquivo .txt
const lerArquivoEConverter = async (arquivo) => {
    try {
        const data = await fs.readFile(arquivo, 'utf8');
        const tracksJson = converterTextoParaJson(data);

        if (await verificarJsonExistente(tracksJson)) return;

        const { sobrescrever } = await inquirer.prompt([{
            type: 'confirm',
            name: 'sobrescrever',
            message: 'Deseja sobrescrever o arquivo JSON existente?',
            default: false,
        }]);

        await salvarJson(tracksJson, sobrescrever);
    } catch (err) {
        console.error(colors.red(`Erro ao ler o arquivo: ${err.message}`));
    }
};

// Função para encontrar arquivos .txt no diretório
const encontrarArquivosTxt = async () => {
    try {
        const arquivos = await fs.readdir(__dirname);
        const arquivosTxt = arquivos.filter(arquivo => arquivo.endsWith('.txt'));

        if (!arquivosTxt.length) {
            console.error(colors.red('Nenhum arquivo .txt encontrado.'));
            return;
        }

        const { arquivoEscolhido } = arquivosTxt.length > 1 
            ? await inquirer.prompt([{
                type: 'list',
                name: 'arquivoEscolhido',
                message: 'Vários arquivos .txt encontrados. Qual você gostaria de processar?',
                choices: arquivosTxt,
            }])
            : { arquivoEscolhido: arquivosTxt[0] };

        console.log(colors.blue(`Processando: ${arquivoEscolhido}`));
        await lerArquivoEConverter(path.join(__dirname, arquivoEscolhido));
    } catch (err) {
        console.error(colors.red(`Erro ao ler o diretório: ${err.message}`));
    }
};

// Pergunta se o usuário deseja processar outro arquivo
const perguntarSeDesejaProcessarOutro = async () => {
    const { continuar } = await inquirer.prompt([{
        type: 'confirm',
        name: 'continuar',
        message: 'Você gostaria de processar outro arquivo .txt?',
        default: false,
    }]);

    continuar ? await encontrarArquivosTxt() : console.log(colors.yellow('Obrigado por usar o conversor! Até mais!'));
};

// Função para iniciar a busca por arquivos .txt
const iniciarConversao = () => {
    console.log(colors.yellow('Procurando arquivos .txt na pasta...'));
    encontrarArquivosTxt();
};

// Exibe o título estilizado
exibirTitulo();
