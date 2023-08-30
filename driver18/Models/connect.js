import path, { dirname } from 'path'
import sqlite3  from 'sqlite3';

const __dirname = path.resolve();
export const db = new sqlite3.Database(path.join(__dirname,'Db','university.db'));