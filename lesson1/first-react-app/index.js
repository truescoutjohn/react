const element = React.createElement('div', { className: 'greeting' }, 'Hello, React!');

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(element);
