const { useState, useEffect } = React;

function App() {
  const [msg, setMsg] = useState('');
  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => setMsg(d.msg));
  }, []);
  return React.createElement('h1', null, msg || 'Loading…');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(App)
);
