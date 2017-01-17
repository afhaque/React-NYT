var React = require("react");
var helpers = require("../../utils/helpers");

var Query = React.createClass({

    getInitialState: function(){
        return {
            term: "Obama",
            "start": "2010",
            "end": "2011",
            "results": {}
        };
    },

    render: function(){

        console.log("Search Term", this.state.term);

        console.log("Start Date", this.state.start);

        console.log("End Date", this.state.end);

        return(
            <div className = "main-container">

                <div className="row">
                    <div className="col-lg-12">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Rockstar Query</strong></h1>
                            </div>
                            <div className="panel-body">


                                <form>
                                    <div className="form-group">
                                        <h4 className=""><strong>Topic</strong></h4>
                                        <input type="text" className="form-control " id="search_topic" />

                                        <h4 className=""><strong>Start Year</strong></h4>
                                        <input type="text" className="form-control " id="search_start" />

                                        <h4 className=""><strong>End Year</strong></h4>
                                        <input type="text" className="form-control " id="search_end" />

                                    </div>


                                    <div className="pull-right">
                                        <button type="submit" className="btn btn-danger"><h4>Submit</h4></button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        )
    }

});

// Makes the component accessible for export
module.exports = Query;