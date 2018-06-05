var fs = require("fs");
var http = require('http');
const {app, BrowserWindow} = require('electron')
  function createWindow () {
    // Use first proxy to download list. This list will be uploaded to a location where it will be availbale system wide for all other users to access.
    // BE SURE TO MODIFY THIS FIRST TIME.

        /*
         Could implement a loop here for checking proxies to find a new one that works in the stored list but cbf right now.
         
         Legit cbf doing any of this shitty proxy stuff now cause it came at me out of the blue, kinda forgot I'd have to do it.
         
        I'll implement it one day.
        */
    
    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})
    // and load the index.html of the app.
    win.webContents.session.setProxy({proxyRules:"socks5://125.141.200.26:80"}, function () {  // CHANGE PROXY!!
        win.loadFile('index.html')
    });
  }
  app.on('ready', createWindow)
