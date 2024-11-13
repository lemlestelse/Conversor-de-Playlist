@echo off

REM Verifica se o Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ===============================
    echo        Node.js não está instalado.
    echo  Por favor, instale o Node.js primeiro.
    echo ===============================
    pause
    exit /b
)

REM Muda para o diretório do script
cd /d "%~dp0"

node index.js

if %errorlevel% neq 0 (
    echo ===============================
    echo        Ocorreu um erro ao executar o script.
    echo  Verifique se os módulos necessários estão instalados.
    echo  Por favor, execute o install.bat para instalar os módulos.
    echo ===============================
    pause
    exit /b
)

pause
