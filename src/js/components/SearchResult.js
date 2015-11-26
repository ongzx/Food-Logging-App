var React = require('react');
var List = require('material-ui/lib/lists/list');
var ListDivider = require('material-ui/lib/lists/list-divider');
var ListItem = require('material-ui/lib/lists/list-item');
var Avatar = require('material-ui/lib/avatar');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();


var SearchResult = React.createClass({
  getInitialState: function(){
    return {data: []};
  },

  onTouchTap: function(event) {
    console.log(event);
    console.log(event.target.id);
  },

  render: function() {
    if (this.props.data.length <= 0) {
        return null;
    }

    return (
      <List subheader="Search Results:">
      {
          this.props.data.map(function(data, index) {
              return <ListItem
                id={index}
                key={index}
                primaryText={data.name}
                onTouchTap={this.onTouchTap}/>
          }, this)
      }
      </List>
    )
  }
});

module.exports = SearchResult;
