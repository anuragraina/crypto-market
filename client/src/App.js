import Home from './Components/Home';
import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginModal from './Components/LoginModal';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import ProtectedBuyTransaction from './Components/Protected/ProtectedBuyTransaction';
import ProtectedSellTransaction from './Components/Protected/ProtectedSellTransaction';

function App() {
	const [open, setOpen] = useState(false);

	const [opensign, setOpensign] = useState(false);

	return (
		<Router>
			{open && <LoginModal closemod={[setOpen, setOpensign]} />}
			{opensign && <Signup closemod={[setOpen, setOpensign]} />}

			<div>
				<Nav open={[setOpen, setOpensign]} />
			</div>
			<div>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route
						exact
						path='/transaction'
						element={<ProtectedBuyTransaction open={[setOpen, setOpensign]} />}
					/>
					<Route
						exact
						path='/transactionSell'
						element={<ProtectedSellTransaction open={[setOpen, setOpensign]} />}
					/>

					{/* <Route exact path="/createUser" element={<LoginModal/>}/> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
