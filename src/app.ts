import express from 'express';
import path from 'path';
import hbs from 'express-handlebars';
import { Server } from 'http';
import multihelpers from 'handlebars-helpers';

// Rutas
import index from './routes/index.routes';
import pedidos from './routes/pedido.routes';
import clientes from './routes/cliente.routes';
import producto from './routes/producto.routes';
import administrador from './routes/administrador.routes';
import empleados from './routes/empleado.routes';
import puestos from './routes/puesto.routes';
import proveedores from './routes/proveedor.routes';

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
		this.app.use('/productos', producto);
		this.app.use('/administrador', administrador);
		this.app.use('/empleados', empleados);
		this.app.use('/puestos', puestos);
		this.app.use('/proveedores', proveedores);
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
				helpers: multihelpers(),
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
