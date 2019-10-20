const SWPrecache = require('sw-precache-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new SWPrecache({
                cacheId: 'how-long',
                filepath: 'dist/service-worker.js',
                staticFileGlobs: [
                  'index.html',
                  'manifest.json',
                  'dist/*.{js,css}'
                ],
                stripPrefix: '/'
              })
        ]
    }
} 
