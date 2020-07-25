import express from 'express';
import path from 'path';
import hbs from 'express-handlebars';
import { Server } from 'http';

// Rutas
import index from './routes/index.routes';
import pedidos from './routes/pedido.routes';
import clientes from './routes/cliente.routes';

class Application {
	app: express.Application;

	constructor() {
		this.app = express();
		this.settings();
		this.middlewares();
		this.routes();
	}

	start(): Server {
		return this.app.listen(this.app.get('port'), () => {
			// eslint-disable-next-line no-console
			console.log(`Server on port ${this.app.get('port')}`);
		});
	}

	routes(): void {
		this.app.use(express.static(path.join(__dirname, 'public')));
		this.app.use('/', index);
		this.app.use('/pedidos', pedidos);
		this.app.use('/clientes', clientes);
	}

	settings(): void {
		this.app.set('port', 3000);
		this.app.set('views', path.join(__dirname, 'views'));
		this.app.engine(
			'.hbs',
			hbs({
				layoutsDir: path.join(this.app.get('views'), 'layouts'),
				partialsDir: path.join(this.app.get('views'), 'partials'),
				defaultLayout: 'main',
				extname: '.hbs',
			})
		);
		this.app.set('view engine', '.hbs');
	}

	middlewares(): void {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
	}
}

export default Application;
