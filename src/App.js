import React from 'react';

function App() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    (async function () {
      const { text } = await (await fetch('/api/message')).json();
      setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
