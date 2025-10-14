# Discord Lite (experimental)

**AVISO IMPORTANTE**  
Este projeto é um experimento pessoal / educacional. **NÃO** é um cliente oficial do Discord. Uso pessoal apenas — **não distribua builds**, não ofereça downloads, não monetize.

Funcionalidades:

- Abre o site do Discord dentro do Electron (modo visual).
- Injeta CSS local para tema (apenas visual).
- Segurança: `nodeIntegration: false`, `contextIsolation: true`.

Como rodar (local):

1. Clone: `git clone https://github.com/SEU-USUARIO/discord-lite.git`
2. `npm install`
3. `npm start`

## Empacotamento local (Windows e Linux)

> ⚠️ **Uso pessoal apenas.** O arquivo `NO_DISTRIBUTION.md` continua válido — gere builds somente para você.

1. Instale dependências (uma vez): `npm install`
2. Gere o instalador / AppImage: `npm run dist`

O resultado vai para a pasta `dist/`.

- **Windows**: gera um instalador `.exe` (NSIS) usando o ícone `public/ico_win.ico`.
- **Linux**: gera um `.AppImage` usando o ícone `public/ico_linux.png`.

### Requisitos de plataforma

- Para gerar instalador de Windows, execute o comando em uma máquina Windows.
- Para gerar build Linux, prefira rodar em uma distro Linux ou WSL com ambiente gráfico configurado.
- Multi-plataforma via CI é possível usando contêineres/VMs, mas lembre-se do aviso de não distribuição.

### Personalizações rápidas

- Ajuste `productName`, `appId`, alvos e ícones no campo `build` de `package.json`.
- Adicione arquivos extras no pacote incluindo-os em `build.files`.
- Para targets adicionais (por exemplo, `.deb`), inclua-os em `build.linux.target`.

Segurança e responsabilidade:

- **NÃO** commite tokens, .env ou credenciais.
- Este repositório não fornece suporte oficial. Se o Discord pedir remoção, o projeto será removido.

Licença: MIT (código). **NO_DISTRIBUTION.md** proíbe distribuição de builds.
