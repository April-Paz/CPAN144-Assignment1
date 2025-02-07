import Navbar from "../components/Navbar";
import Greeting from "../components/Greeting"; 
import ToggleMessage from "../components/ToggleMessage";
import ItemList from "../components/ItemList";


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="title">Welcome to CPAN 144 Assignment 1</h1>
      <h2>FOUNDATIONS OF ADVANCED FRONT-END DEVELOPMENT</h2>
      <br/>
      <Greeting />
      <ToggleMessage /> 
      <br />
      <ItemList />
    </div>
  );
}