import App from './app';
import { connect } from './database';

(async function (): Promise<void> {
	await connect();
	const app = new App();

	app.start();
})();
