module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      require.resolve("expo-router/babel"),
      [
				'module-resolver',
				{
					alias: {
						'@/components': './components',
						'@/components/*': './components/*',
						'@/stores': './stores',
						'@/hooks': './hooks',
						'@/assets': './assets',
						'@/i18n': './i18n',
						'@/storages': './storages',
						'@/middlewares': './middlewares',
						'@/types': './types',
						'@/utils': './utils',
						'@/data': './data',
						'@/data/*': './data/*',
					},
				},
			],
    ],
  };
};
