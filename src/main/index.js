"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(
        path.dirname(__dirname),
        "renderer",
        "preload.js"
      ),
      contextIsolation: true,
      nodeIntegration: true,
      devTools:
        process.env.NODE_ENV === "development"
          ? true
          : false
    }
  });

  mainWindow.loadFile(
    path.join(process.cwd(), "build", "ui", "index.html")
  );
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
