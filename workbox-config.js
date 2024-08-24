module.exports = {
	globDirectory: '.',
	globPatterns: [
		'index.html',          // Precaching specific HTML file
		'prayers.html',        // Precaching specific HTML file
		'about.html',          // Precaching specific HTML file
		'assets/**/*.js',      // Precaching all JavaScript files in assets directory
		'assets/**/*.css',     // Precaching all CSS files in assets directory
		'assets/img/**/*.*',   // Precaching a image folder in assets directory
		'**/*.{ico,woff,woff2,eot,ttf}'
	  ],
	swDest: './sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};