module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'application component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'component name?',
            },
        ],
        actions: [
            {
                // adiciona um novo arquivo
                type: 'add',
                // caminho para o novo arquivo
                path: './src/components/{{pascalCase name}}/index.tsx',
                // template usado para gerar o conteúdo do novo arquivo
                templateFile: './templates/component.tsx.hbs',
            },
            {
                type: 'add',
                path: './src/components/{{pascalCase name}}/styles.ts',
                templateFile: './templates/styles.ts.hbs',
            },
        ],
    });
};