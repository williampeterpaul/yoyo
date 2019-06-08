"use strict";

const { app, BrowserWindow } = require("electron");
const { autoUpdater } = require("electron-updater");

const url = require("url");
const path = require("path");
const lock = app.requestSingleInstanceLock();

const dev = () => {
  return process.defaultApp
    || /[\\/]electron-prebuilt[\\/]/.test(process.execPath)
    || /[\\/]electron[\\/]/.test(process.execPath);
}

let mainWindow;
let mainPath;

if (lock) {
  app.on("second-instance", () => mainWindow.show());

  function createBrowserWindow() {
    mainWindow = new BrowserWindow({
      width: 1280,
      height: 720,
      center: true,
      show: false,
      titleBarStyle: "hiddenInset"
    });

    mainPath = url.format({
      protocol: "file:",
      pathname: path.join(__dirname, "dist", "index.html"),
      slashes: true
    });

    mainWindow.loadURL(mainPath);

    mainWindow.once("ready-to-show", () => {
      mainWindow.show();

      if (dev()) {
        mainWindow.webContents.openDevTools();
      }
    });

    mainWindow.on("close", () => {
      mainWindow = null;
    });
  }

  app.on("ready", () => {
    autoUpdater.checkForUpdatesAndNotify();
    app.setAppUserModelId("electron.app.yoyo");
    createBrowserWindow();
  });

  app.on("activate", () => {
    if (mainWindow === null) {
      createBrowserWindow();
    }
  });

  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

} else {
  app.quit();
}
