import React from 'react';
import CardList from '../src/Components/CardList';
import SearchBar from '../src/Components/SearchBar';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      search: ''
    }
  }


  searchChange = (e) => {
    this.setState({search: e.target.value});
  }


  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }


  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    })
    
    return (
      <div className="App">
        <h1>MONSTER ROLODEX</h1>

        <SearchBar search={this.searchChange}/>

        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;