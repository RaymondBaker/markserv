import path    from 'path'
import chalk   from 'chalk'
import termImg from 'term-img'

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const msg = (type, msg) => {
	console.log(chalk`{bgGreen.black   Markserv  }{white  ${type}: }` + msg)
}

const splash = flags => {
	if (flags && flags.silent) {
		return
	}

	const logoPath = path.join(__dirname, '..', 'media', 'markserv-logo-term.png')
	termImg(logoPath, {
		width: 12,
		fallback: () => {}
	})

	msg('boot', 'starting Markserv...', flags)
}

export default splash
