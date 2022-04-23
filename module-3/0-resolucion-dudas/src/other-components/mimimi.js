import '../styles/App.scss';
import { useState } from 'react';


// traductor MIMIMI
function App() {

  const [mimiText, setMimiText] = useState('')

  const handleTextArea = (ev) => {
    const userText = ev.currentTarget.value;
    setMimiText(userText.replace(/[aeiou]/gi,'i'));

  }


  return (
    <div>

      <p>{mimiText}</p>
      <input onChange={handleTextArea} type="textarea" name="" id=""/>

    </div>
  );
}
export default App;