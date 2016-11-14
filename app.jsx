const React = require('react');

const { Component } = React;

class App extends Component {

  state = {
    value : ''
  }

  clicked = e => {
    console.log('Worked', this.state);
  }

  valueChanged = e => this.setState({value: e.target.value});

  render () {
    return (
      <div onClick={this.clicked}>
        <form onSubmit={this.submit}>
          Name:
          <input type={'text'}
                 onChange={this.valueChanged}
                 value={this.state.value} />
          <input type={'submit'} value={'Submit'}/>
        </form>
      </div>
    );
  }
};

module.exports = App;
