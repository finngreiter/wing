const { app, BrowserWindow, screen } = require('electron');

let win;
const h = 40;

const cmw = () => {
  win = new BrowserWindow({
    width: screen.getPrimaryDisplay().size.width,
    height: h,
    frame: false,
    x: 0,
    y: screen.getPrimaryDisplay().size.height - h,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.setAlwaysOnTop(true, 'screen-saver');

  win.loadFile('src/index.html');
};

app.whenReady().then(() => {
  cmw();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) cmw();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});
