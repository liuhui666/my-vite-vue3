module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/essential',
    'google',
    'plugin:json/recommended',
    'eslint:recommended',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'no-console': 'warn',
    'quotes': [1, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'json/*': ['error', 'allowComments'],
    'max-len': [1, 200],
    'no-shadow': 'error', // 禁止变量声明与外层作用域的变量同名
    'no-param-reassign': 'error', // 禁止对 function 的参数进行重新赋值
    'no-unused-expressions': 'error', // 该规则旨在消除对程序状态没有影响的未使用的表达式。 例如，n + 1;不是一个语法错误，但它可能是一个程序员n += 1;代替赋值语句的打字错误。
    'arrow-spacing': 'error', // => 前后要有空格
    'vue/no-multiple-template-root': 'off', // The template root requires exactly one element
  },
};
