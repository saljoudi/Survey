const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Add custom configuration here
});

// Increase the max workers and RAM
config.maxWorkers = 2;
config.transformer.minifierConfig = {
  compress: false,
  mangle: false
};

// Optimize caching
config.cacheStores = [];
config.resetCache = true;

// Add any file type extensions you're using
config.resolver.sourceExts = ['js', 'jsx', 'json', 'ts', 'tsx'];

// Exclude unnecessary folders from being watched
config.watchFolders = [__dirname];
config.resolver.blockList = [/.*\.git\/.*/];

module.exports = config;