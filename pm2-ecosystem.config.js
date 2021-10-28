module.exports = {
	apps: [
		{
			name: "ponpub-client",
			script: "yarn start",
			watch: "dist",
			env: {
				PORT: 3001,
				NODE_ENV: "production",
			},
		},
	],
};
