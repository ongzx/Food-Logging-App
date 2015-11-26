var React = require('react');
var SearchInput = require('./SearchInput');
var SearchResult = require('./SearchResult');
var Detail = require('./Detail');
var Paper = require('material-ui/lib/paper');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var CircularProgress = require('material-ui/lib/circular-progress');

var Search = React.createClass({
    getInitialState: function () {
        return {
            result: []
        };
    },

    handleSearch: function (query) {

        $.ajax({
          url: 'https://test.holmusk.com/food/search?q='+query,
          dataType: 'json',
          success: function(data){
            console.log(data);
            this.setState({result: data});
          }.bind(this),
          error: function(xhr, status, err) {
            console.error('#GET Error', status, err.toString());
          }.bind(this)
        });

    },

    render: function () {
      return (
        <Grid fluid="true">
          <Row className="show-grid">
            <Col xs={12} sm={5}>
              <Paper zDepth={2} className="search_wrapper">
                <SearchInput
                  handleSearch={this.handleSearch}>
                </SearchInput>
                <SearchResult
                  data={this.state.result}>
                </SearchResult>
              </Paper>
            </Col>
            <Col xs={12} sm={5}>
              <Detail
                data={this.state.result[0]}>
              </Detail>
            </Col>
          </Row>
        </Grid>
      );
    }
});

module.exports = Search;
