import Flow from './Flow';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

export default () => {
  const [initial, setInitial] = useState(null)
  const handleFileSelected = (e) => {
    const files = Array.from(e.target.files)
    if (files[0].type !== 'application/json') {
      alert('Please upload valid JSON file');
      return;
    }
    let reader = new FileReader();
    reader.onload = (e) => {
      let str = e.target.result;
      let json = JSON.parse(str);
      setInitial(json);
    };
    reader.readAsText(files[0]);
  }


  return (
    <>
      {initial && (
        <header className="header">
          <button onClick={() => setInitial(null)}>back to main menu</button>
        </header>
      )}
      {!initial && (
        <div>
          <h1>upload JSON or create new</h1>
          <input type="file" onChange={handleFileSelected}/>
          <button onClick={() => setInitial({nodes: [], edges: []})}>Create new chart</button>
        </div>
      )}
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => setInitial(null)}>
        {initial ? <Flow initial={initial}/> : <div />}
      </ErrorBoundary>
    </>
  )
}