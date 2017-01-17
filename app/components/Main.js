var React = require("react");
var Search = require("./Search");

var Main = React.createClass({

    getInitialState: function(){
        return {
            results: [{"Title": "Obama is great"}, {"Title": "Obama is death"}]
        };
    },


    render: function(){

        console.log("Render results", this.state.results);

        return(
            <div className = "main-container">

                    <div className="container">

                        <nav className="navbar navbar-default" role="navigation">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">NYT-React</a>
                                </div>

                                <div className="collapse navbar-collapse navbar-ex1-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li><a href="#">Search</a></li>
                                        <li><a href="#">Saved Articles</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>


                        <div className="jumbotron">
                            <h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
                            <h3 className="text-center">Search for and save articles of interest.</h3>
                        </div>

                        <Search /> 

                    </div>

            </div>
        )
    }

});

// Makes the component accessible for export
module.exports = Main;