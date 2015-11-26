var React = require('react');
var TextField = require('material-ui/lib/text-field');
var _ = require('lodash');

var SearchInput = React.createClass({

  getInitialState: function() {
    return {
      query: ''
    };
  },

  componentWillMount: function () {
     this.handleSearchDebounced = _.debounce(function () {
         this.props.handleSearch.apply(this, [this.state.query]);
     }, 500);
  },

  onChange: function (event) {
    this.setState({query: event.target.value});
    this.handleSearchDebounced();
  },

  reset: function(event) {
    this.setState({query: ''});
    this.handleSearchDebounced();
  },

  render: function(){
    return (
      <TextField
        ref="search_field"
        hintText="What food did you had today?"
        fullWidth="true"
        type="text"
        value={this.state.query}
        onFocus={this.reset}
        onChange={this.onChange}/>
    )
  }
});


module.exports = SearchInput;
