const rootElement = ReactDOM.createRoot(document.querySelector('#root'));

const elements = React.createElement(
  'div',
  { className: 'greeting' },
  React.createElement('h1', { className: 'greeting__title' }, 'Hello, world!'),
  React.createElement('p', { className: 'greeting__text' }, "I'm learning React"),
);

rootElement.render(elements);
