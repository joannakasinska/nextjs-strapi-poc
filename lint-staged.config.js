// eslint-disable-next-line @typescript-eslint/no-var-requires
const micromatch = require('micromatch');

module.exports = {
    'src/**/*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
    'src/**/*.{js,jsx,ts,tsx}': files => {
        const testFiles = micromatch.match(files, '*test.{js,ts}');
        return [`prettier --write ${files.join(' ')}`, `eslint --max-warnings=0 ${files.join(' ')}`, `jest --coverage ${testFiles.join(' ')} `];
    },
    'src/**/*.{css,scss,json}': files => `prettier --write ${files.join(' ')}`
};
