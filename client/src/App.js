import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('/api/hello').then(r => r.json()).then(d => setMsg(d.msg));
  }, []);
  return <h1>{msg || 'Loading…'}</h1>;
}

export default App;
