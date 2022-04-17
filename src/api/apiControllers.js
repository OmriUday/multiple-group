import database from './firebase';
import { ref, set } from 'firebase/database';
const db = database;

export function writeUserData(data) {
  set(ref(db, 'posts/' + data.id), data);
}