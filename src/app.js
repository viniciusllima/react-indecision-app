console.log('App.js is running!');

var appInfo = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer'
}

// -- JSX
var template = (
  <div>
    <h1>{appInfo.title}</h1>
    <p>{appInfo.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Vinicius',
  age: 37,
  location: 'São Paulo'
};

function getLocation(location) {
  if(location) {
    return <p>Location: {location}</p>;
  }
}

var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>    
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);