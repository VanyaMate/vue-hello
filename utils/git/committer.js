import {input, select} from '@inquirer/prompts';
import config from './config.js';
import {execSync} from 'child_process';
import {resolve} from 'node:path'
import {fileURLToPath} from 'url';
import {dirname} from 'path';

const commitData = {
    type: '',
    entity: '',
    message: '',
}

const getType = async function () {
    return select({
        message: 'Выберите тип коммита',
        choices: config.types.map((type) => ({
            name: type,
            value: type,
        }))
    })
        .then((type) => commitData.type = type);
}

const getEntity = async function () {
    return select({
        message: 'Выберите сущность',
        choices: config.entities.map((type) => ({
            name: type,
            value: type,
        }))
    })
        .then((entity) => commitData.entity = entity);
}

const getMessage = async function () {
    return input({
        message: 'Введите сообщение'
    })
        .then((message) => commitData.message = message)
}

const createCommit = function (commitData) {

}


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

getType()
    .then(getEntity)
    .then(getMessage)
    .then(() => {
        execSync('git add .', {cwd: resolve(__dirname, '..', '..'),});
        execSync(`git commit -m "[${commitData.type}] ${commitData.entity} - ${commitData.message}"`, {cwd: resolve(__dirname, '..', '..'),});
    })