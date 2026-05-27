const Tittle = ()=> (
    <h1 className=  "head">
        namastey react using jsx
    </h1>
);

const Headingcomponent = () => (
    <div id = "container">
        <Tittle/>
<h1 className="heading">Namste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);