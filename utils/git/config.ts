import { resolve } from 'path';
import { CommiterOptions } from '@vanyamate/commiter';


/// @ts-ignore
const __dirname = import.meta.dirname;
const gitFolder = resolve(__dirname, '..', '..');

export default {
    types                  : {
        Update       : 'Update 💡',
        Fix          : 'Fix 🙏',
        'New feature': 'New feature 🔥',
    },
    entities               : [ 'App', 'CompositionApi', 'Freelance', 'Plan', 'Resume', 'Router', 'Todo', 'User', 'Vuex' ],
    pattern                : '{{type}} : {{entities}} - {{message}}',
    gitFolder              : gitFolder,
    gitRemoteRepositoryName: 'origin',
    gitPushDefault         : true,
} as CommiterOptions;