const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        with: 800,
        height: 600
    })

    win.loadURL('http://localhost:6969')
}

app.whenReady().then(() => {
    createWindow()
    app.on('active', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed' , () => {
    if (process.platform != 'darwin') app.quit()
})