const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dashboardRouter = require('./Routes/Dashboard');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(
	cors({
		origin: 'https://crypto-markt.netlify.app',
		credentials: true,
	})
);

//here are routes for backend calls

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'https://crypto-markt.netlify.app');
	res.header(
		'Access-Control-Allow-Origin',
		'Origin,X-Requested-With,Content-Type,Accept',
		'Access-Control-Allow-Methods: GET, DELETE, HEAD, OPTIONS, POST'
	);
	// header("Access-Control-Allow-Methods:POST,GET,OPTION,PUT,DELETE")
	// header("Access-Control-Allow-Headers:Content-Type,X-Auth-Token,Origin,Authorization")
	next();
});

app.use(express.json());
app.use('/dashboard', dashboardRouter);
app.use('/dashboard', require('./Routes/Userdetails'));
app.use('/dashboard', require('./Routes/ProfileUpdate'));

app.use('/register', require('./Routes/CreatUser'));
app.use('/register', require('./Routes/Signup'));

app.use('/transactions', require('./Routes/Transactions'));
app.use('/transactions', require('./Routes/Transactions'));
app.use('/wallet', require('./Routes/Wallet'));

mongoose.set('strictQuery', true);
mongoose
	.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/crypro_market')
	.then(() => app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`)))
	.catch((error) => console.error(error.message));
