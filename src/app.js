console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: 'My Indecision App',
    subtitle: 'An Aweseom React Experience',
    options: []
};

function getOptions(opns){
    if (opns.length > 0) {
        return <p>Here are your options: {app.options}</p>
    }
    return <p>No options</p>
}

var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: 'Folke Westergren',
    age: 37,
    location: 'Philadelphia'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
