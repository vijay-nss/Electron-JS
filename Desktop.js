const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true, 
      contextIsolation: false
    }
  });

  const indexPath = path.join(__dirname, 'www', 'index.html');
  console.log("📂 Loading:", indexPath);

  mainWindow.loadFile(indexPath).catch(err => {
    console.error("❌ Failed to load index.html:", err);
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
