const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { header } = require('express-validator');
const dashboardRouter = require('./Routes/Dashboard');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
const PORT = 3001;

mongoose
	.connect(Connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`runnging ${PORT}`)))
	.catch((error) => console.log(error.message));

mongoose.set('strictQuery', true);
mongoose.set('strictQuery', true);

app.use(express.json());
app.use('/dashboard', dashboardRouter);
app.use('/dashboard', require('./Routes/Userdetails'));
app.use('/dashboard', require('./Routes/ProfileUpdate'));

app.use('/register', require('./Routes/CreatUser'));
app.use('/register', require('./Routes/Signup'));

app.use('/transactions', require('./Routes/Transactions'));
app.use('/transactions', require('./Routes/Transactions'));
app.use('/wallet', require('./Routes/Wallet'));
