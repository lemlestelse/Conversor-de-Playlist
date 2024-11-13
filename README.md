# 🎵 **Conversor de Playlist Spotify (TXT para JSON)** 🚀

Este é um **conversor automatizado** que pega a sua playlist do Spotify exportada como **TXT** usando o site [TuneMyMusic](https://www.tunemymusic.com/), e a transforma em um arquivo **JSON** para fácil manipulação e integração com outros sistemas, como o **LastFM** ou outros serviços de música. 😎

## 🎯 **Funcionalidades**

- **Conversão Automática de TXT para JSON** 📝➡️📂
- **Verificação de Novas Músicas**: Verifica se a música já foi adicionada ao arquivo JSON.
- **Integração Simples com Spotify** 🎧
- **Apoio a Diversos Arquivos TXT**: Processa arquivos com formato de lista de músicas, como: `artista - faixa`.

Além disso, você pode facilmente **adicionar novas músicas** ao seu arquivo JSON sem duplicar entradas, e acompanhar as atualizações do arquivo. 👀

---

## 🛠️ **Como Funciona?**

### 1. **Configuração Inicial:**
- **Arquivo `tracks.json`**: O arquivo JSON gerado que armazena a lista de músicas.
- **Arquivo `.txt`**: O arquivo contendo as músicas exportadas de sua playlist no Spotify. Cada linha deve estar no formato:

    ```
    Artista - Faixa
    ```

    Exemplo:

    ```
    The Beatles - Hey Jude
    Dua Lipa - Levitating
    ```

### 2. **Funcionalidades**:
- **Conversão de TXT para JSON**: O script lê o arquivo TXT e converte cada linha para o formato de JSON.
- **Verificação de Novas Músicas**: Antes de adicionar uma música ao arquivo JSON, ele verifica se a música já existe.
- **Adicionar ou Sobrescrever**: Você pode escolher se deseja sobrescrever o arquivo JSON ou apenas adicionar as novas músicas.

---

## 🧰 **Estrutura do Projeto**

- **`index.js`**: O código principal que controla a conversão, a leitura do arquivo TXT e a escrita do JSON.
- **`install.bat`**: Script para instalação das dependências do projeto em sistemas Windows.
- **`run.bat`**: Script para rodar o conversor de TXT para JSON.
- **`package.json`**: O arquivo de configuração do Node.js com todas as dependências do projeto.

---

## 📥 **Como Usar?**

### 1. **Exporte Sua Playlist do Spotify Usando o TuneMyMusic**
Para começar, você precisa exportar sua playlist do Spotify para um arquivo `.txt`. Siga as instruções abaixo:

#### Passo a Passo para Exportar a Playlist Usando o [TuneMyMusic](https://www.tunemymusic.com/):

1. **Acesse o Site:**
   - Vá para [TuneMyMusic](https://www.tunemymusic.com/).

2. **Escolha a Origem:**
   - Na tela inicial, clique em **"Let's Start"**.
   - Selecione **Spotify** como o serviço de origem. Você será solicitado a fazer login na sua conta do Spotify, caso ainda não tenha feito.

3. **Selecione a Playlist:**
   - Após o login no Spotify, selecione a playlist que você deseja exportar. Você pode escolher qualquer playlist pública ou privada que tenha no seu perfil do Spotify.

4. **Escolha o Formato de Exportação:**
   - Na próxima etapa, escolha o formato de exportação **TXT**.
   - Selecione **"Exportar para TXT"** e clique em **"Export"**.
   - O arquivo `.txt` será baixado para o seu computador. Este arquivo estará no formato de `Artista - Faixa`.

5. **Salve o Arquivo `.txt`:**
   - Guarde esse arquivo `.txt` na raiz do seu projeto, ou no diretório que preferir.

Agora você tem o arquivo de texto pronto para ser convertido para JSON.

### 2. **Instale as Dependências**
Execute o script `install.bat` para instalar as dependências do projeto:

```bash
install.bat
```

### 3. **Coloque o Arquivo TXT**
Garanta que você tenha um arquivo`.txt` uom a lista de músicas exportada do Spotify formato:``(Artista - Faixa).`

### 4. **Execute o Conversor**
Execute o script `run.bat` para rodar a conversão do arquivo .txt para o formato JSON.

```bash
run.bat
```

Ou, se preferir, execute diretamente no terminal:

```bash
node index.js
```

### 5. **Verifique o Resultado**
Após a execução, o arquivo `tracks.json` será gerado ou atualizado com as músicas da sua playlist.

## 📝 **Funções Principais**

- **converterTextoParaJson:** Converte o conteúdo do arquivo `.txt` para o formato JSON.
- **verificarJsonExistente:** Verifica se já existem músicas no arquivo `tracks.json` para evitar duplicações.
- **salvarJson:** Salva as músicas no arquivo `tracks.json`, com opção de adicionar ou sobrescrever.
- **encontrarArquivosTxt:** Localiza arquivos `.txt` no diretório e permite ao usuário escolher qual processar.

## 🙏 **Créditos**
Desenvolvido com 💖 por Lemlestelse.

Este projeto foi feito para ser útil e divertido! Sinta-se à vontade para contribuir, adicionar novas funcionalidades ou corrigir bugs. 😎