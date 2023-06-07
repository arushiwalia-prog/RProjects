import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1',{id: 'heading', abc: 'rksm', class: 'apple'},'Radhe Krishna Shaam Murari');
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const jsxElement = (<h1 id="heading" className='orange'> hello 
    Radhe Krishna
    shaam murari  </h1>)
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxElement); 

// React Component - is a normal function which returns a JSX code(React Element)
const HeadingComponent = () => <h1>RK Functional Component</h1>
const MainComponent = () => {
    return (
    <div id="main">
        <HeadingComponent/>
        <span> { jsxElement }</span>
        <h3>Subheading RK</h3>
    </div>
    )
}
// to render the component 
root.render(<MainComponent/>)
