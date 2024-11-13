@echo off
REM Verifica se o Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js não está instalado. Por favor, instale o Node.js primeiro.
    pause
    exit /b
)

REM Muda para o diretório do script
cd /d "%~dp0"

REM Exibe o diretório atual
echo Diretório atual: %cd%

REM Instala os módulos necessários
echo Instalando módulos necessários...
npm install colors inquirer figlet

if %errorlevel% neq 0 (
    echo Ocorreu um erro durante a instalação dos módulos.
    pause
    exit /b
)

echo Módulos instalados com sucesso.
pause
