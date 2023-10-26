export default {
	importMeta: import.meta,
	flags: {
		port: {
			shortFlag: 'p',
			default: '8642'
		},

		livereloadport: {
			shortFlag: 'b',
			default: 35729
		},

		address: {
			shortFlag: 'a',
			default: 'localhost'
		},

		silent: {
			shortFlag: 's',
			default: false
		},

		verbose: {
			shortFlag: 'v',
			default: false
		}
	}
}
