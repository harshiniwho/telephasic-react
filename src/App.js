import './App.css';

import Feature from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Portfolio from './components/Portfolio';
import Promo from './components/Promo';

function App() {
  return (
	<div className="homepage is-preload">
		<div id="page-wrapper">
				<div id="header-wrapper">
            <Header />
						<Jumbotron />
				</div>
				<Feature />
				<Promo />
				<Portfolio />
        <Footer />
		</div>
			<script src="./scripts/jquery.min.js"></script>
			<script src="./scripts/jquery.dropotron.min.js"></script>
			<script src="./scripts/browser.min.js"></script>
			<script src="./scripts/breakpoints.min.js"></script>
			<script src="./scripts/util.js"></script>
			<script src="./scripts/main.js"></script>
    </div>
  );
}

export default App;
