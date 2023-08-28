import './assets/styles/nullstyle.css';
import './assets/styles/fonts.css';
import './assets/styles/App.css';
import Inheritance from './components/Inheritance/Inheritance';
import SidebarOptions from './components/SidebarOptions/SidebarOptions';

function App() {
	return (
		<div className="App">
			<SidebarOptions />
			<Inheritance />
		</div>
	);
}

export default App;
