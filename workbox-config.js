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
	],
	runtimeCaching: [
		{
		  urlPattern: ({request}) => request.destination === 'document' || request.destination === 'script' || request.destination === 'style' || request.destination === 'image' || request.destination === 'font',
		  handler: 'CacheFirst',
		  options: {
			cacheName: 'global-cache',
			expiration: {
			  maxAgeSeconds: 6 * 60 * 60, // 6 hours
			},
			cacheableResponse: {
			  statuses: [0, 200],  // Cache successful responses
			},
		  },
		},
		{
		  urlPattern: new RegExp('^https://script.google.com'),
		  handler: 'NetworkFirst',
		  options: {
			cacheName: 'google-scripts-cache',
			networkTimeoutSeconds: 15,  // Optional: Time out if no response from network within 10 seconds
			expiration: {
			  maxAgeSeconds: 12 * 60 * 60, // 12 hours
			},
			cacheableResponse: {
			  statuses: [0, 200],  // Cache successful responses
			},
		  },
		},
	  ],
};