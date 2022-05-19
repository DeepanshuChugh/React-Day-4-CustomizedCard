import Cards from './components/Cards';
import './App.css';

const date = "28/20/2020";
const logo = "https://flyclipart.com/thumb2/the-no-meat-athlete-cookbook-347997.png"
const title = "Amazon Gift Pay";
const devices = "Desktop-Mobile";
const styling={
  backgroundColor:'#F1921A',
  width:'650px',
  height: '400px',
  margin:' auto'
};
function App() {
  return (
    <div className="App">
     <Cards   date={date} logo={logo} title ={title} devices={devices} styling={styling}/>
    </div>
  );
}

export default App;
