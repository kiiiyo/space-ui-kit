module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    // Aliasの設定
    '^@/(.+)': '<rootDir>/src/$1',
    // Jest で svgファイルを扱えるようにする
    '^.+\\.svg$': 'jest-svg-transformer',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules'
  },
  roots: ['.'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true, // エラーを見やすくする( 有効じゃないと内容がズレて表示されます )
        module: {
          type: 'commonjs' // 出力するファイルをcommonjsとする
        },
        jsc: {
          parser: {
            syntax: 'typescript', // ソースコードをtypescriptとしてパースする
            tsx: true // jsx記法を許可する
          },
          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  },
  transformIgnorePatterns: ['/node_modules/']
}
