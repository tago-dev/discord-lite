const { app, BrowserWindow, Notification } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Discord Lite 💬",
    icon: __dirname + "/public/ico_win.ico", // ícone pro Windows
    backgroundColor: "#202225", // dark mode vibe
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadURL("https://discord.com/app");

  win.webContents.on("did-finish-load", () => {
    new Notification({
      title: "Discord Lite",
      body: "Bem-vindo ao Discord Lite 🚀",
    }).show();
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    require("electron").shell.openExternal(url);
    return { action: "deny" };
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
