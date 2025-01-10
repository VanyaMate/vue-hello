import { resolve } from 'path';
import { CommiterOptions } from '@vanyamate/commiter';


/// @ts-ignore
const __dirname = import.meta.dirname;
const gitFolder = resolve(__dirname, '..', '..');

export default {
    types    : {
        Update       : 'Update 💡',
        Fix          : 'Fix 🙏',
        'New feature': 'New feature 🔥',
    },
    entities : [ 'Post', 'User', 'Comment', 'App' ],
    pattern  : '[ {{type}} ] {{entities}} - {{message}}',
    gitFolder: gitFolder,
} as CommiterOptions;