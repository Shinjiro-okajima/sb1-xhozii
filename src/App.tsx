import React from 'react';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header 
        name="岡島慎次郎"
        title="ボクシング選手 / IoTエンジニア"
        links={['About', 'Projects', 'Skills', 'Contact']}
      />
      <main className="max-w-5xl mx-auto px-4 py-12 space-y-32">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8 mt-32">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-600">
          © 2024 岡島慎次郎. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;