import app from './app.js';
import { connectionDB } from './db.js';

connectionDB();
app.listen(4000)
console.log('Server on port',4000)


