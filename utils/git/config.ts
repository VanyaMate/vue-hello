import { CommiterOptions } from '@vanyamate/commiter/dist/src/Commiter.types';
import { resolve } from 'path';


const __dirname = import.meta.dirname;
const gitFolder = resolve(__dirname, '..', '..');

export default {
    types    : [ 'Fix 🙏', 'New feature 🔥', 'Update 💡' ],
    types    : {
        Update       : 'Update 💡',
        Fix          : 'Fix 🙏',
        'New feature': 'New feature 🔥',
    },
    entities : [ 'Post', 'User', 'Comment', 'App' ],
    pattern  : '[ {{type}} ] {{entity}} - {{message}}',
    gitFolder: gitFolder,
} as CommiterOptions;