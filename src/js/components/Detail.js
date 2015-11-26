var React = require('react');
var Card = require('material-ui/lib/card/card');
var CardActions = require('material-ui/lib/card/card-actions');
var CardExpandable = require('material-ui/lib/card/card-expandable');
var CardHeader = require('material-ui/lib/card/card-header');
var CardMedia = require('material-ui/lib/card/card-media');
var CardText = require('material-ui/lib/card/card-text');
var CardTitle = require('material-ui/lib/card/card-title');
var Avatar = require('material-ui/lib/avatar');
var FlatButton = require('material-ui/lib/flat-button');

var Detail = React.createClass({
  getInitialState: function(){
    return {data: {}};
  },

  render: function() {

    if (!this.props.data) {
        return null;
    }

    return (
      <Card>
        <CardHeader
          title={this.props.data.name}
          subtitle={this.props.data._id}
          avatar={<Avatar>A</Avatar>}/>
        <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/food/"/>
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Action1"/>
          <FlatButton label="Action2"/>
        </CardActions>
      </Card>
    )
  }
});

module.exports = Detail;
