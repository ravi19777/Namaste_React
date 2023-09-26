// <!-- react element creation -->
const heading1 = React.createElement('h3',{},"This is the children of the react element!!");

{/* // root element creation */}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading1);