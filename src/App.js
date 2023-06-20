import './App.css';
import { useState } from 'react';
function App() {
const [name, setName] = useState ('mario');
const handleClick = () => {
setName ('Konouz');

}
return (
<div className="App">
    <header className="App-header">

        <h1>{name}</h1>
        <button onClick={handleClick}>  click me</button>
    </header>
</div>
);
}

export default App;
