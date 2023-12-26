#!/usr/bin/env node

/*****************************************************************
 * TypeScript Express Starter
 * 2019.12.18 ~ 🎮
 * Made By Afzal Imdad 🦖
 * https://github.com/AfzalAli231/TypeScript-Express-Starter
 *****************************************************************/

const path = require("path");
const starter = require("../lib/starter");
const destination = getDest(process.argv[2]);

function getDest(destFolder = "create-backend-server") {
    return path.join(process.cwd(), destFolder);
}

starter(destination);
