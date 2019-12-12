module.exports = {
		extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
		parser: '@typescript-eslint/parser',
		plugins: ['@typescript-eslint', 'prettier'],
		env: {
			"browser": true,
			"es6": true
		},
		settings: {
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
        typescript: {},
			},
		},
		rules: {
			'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
			'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
			'@typescript-eslint/indent': [2, 2],
      "react/prop-types": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
     ]
		},
	};