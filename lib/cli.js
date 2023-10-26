#!/usr/bin/env node

import path from 'path'
import fs from 'fs'
import meow from 'meow'

import markserv from './server.js'
import splash from './splash.js'
import cliDefs from './cli-defs.js'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const cliHelp = String(fs.readFileSync(path.join(__dirname, './cli-help.txt')))

const cliOpts = meow(cliHelp, cliDefs)

const validateServerPath = (serverPath, cwd) => {
	if (serverPath === cwd) {
		return cwd
	}

	let validatedPath

	if (serverPath[0] || serverPath[0] === '.') {
		validatedPath = path.normalize(path.join(cwd, serverPath))
	}

	if (serverPath[0] === '/') {
		validatedPath = path.normalize(serverPath)
	}

	return validatedPath
}

const run = opts => {
	splash(opts.flags)

	const cwd = process.cwd()

	let dir = opts.input[0]
	if (dir === undefined) {
		dir = cwd
	}

	const validatedServerPath = validateServerPath(dir, cwd)
	opts.flags.dir = validatedServerPath
	opts.flags.$pathProvided = true
	opts.flags.$openLocation = true

	return markserv.init(opts.flags)
}

//const cli = !module.parent
const cli = true

if (cli) {
	// Run without args (process.argv will be picked up)
	run(cliOpts)
} else {
	module.exports = {run}
}
