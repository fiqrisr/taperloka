module.exports = (eleventyconfig) => {
	return {
		htmlTemplateEngine: 'njk',
		templateFormats: ['md', 'njk', '11ty.js'],
		pathPrefix: '/',
		dir: {
			input: 'src/site',
			data: '_data',
			includes: '_includes',
			layouts: '_includes/layouts'
		}
	};
};
