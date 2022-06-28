export default {
    '*.ts?(x)': (filenames) => ['tsc', `eslint ${filenames.join(' ')} --fix`],
    '*': ['prettier --write --ignore-unknown'],
};
