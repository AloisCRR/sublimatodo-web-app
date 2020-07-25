import App from './app';
import { connect } from './database';

connect();
const app = new App();

app.start();
