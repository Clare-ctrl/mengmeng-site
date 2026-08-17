import Header from './components/Header';
import MainContent from './components/MainContent';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState("en");
  function handleLanguageChange() {
    setLanguage((prev) => (prev === "en" ? "zh" : "en"));
  }

  return (
    <div className='min-h-screen bg-stone-50'>
      <Header language={language} onChangeLanguage={handleLanguageChange}/>
      <main>
        <MainContent language={language}/>
      </main>
    </div>
  );
}

export default App;
