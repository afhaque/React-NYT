var React = require("react");

var Main = React.createClass({

    render: function(){

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

                        <div className="row">
                            <div className="col-lg-12">

                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
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


                        <div className="row">
                            <div className="col-lg-12">

                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
                                    </div>
                                    <div className="panel-body">
                                        <ul className="list-group">
                                          <li className="list-group-item">

                                            <h3>
                                                <span><em>Aliens Invade Paris</em></span>
                                                <span className="btn-group pull-right" >
                                                    <button className="btn btn-default ">View Article</button>
                                                    <button className="btn btn-primary">Save</button>
                                                </span>
                                            </h3>
                                            <p>Date Published: 03/15/16</p>

                                          </li>

                                          <li className="list-group-item">

                                            <h3>
                                                <span><em>Obama Gives Commencement Speech</em></span>
                                                <span className="btn-group pull-right" >
                                                    <button className="btn btn-default ">View Article</button>
                                                    <button className="btn btn-primary">Save</button>
                                                </span>
                                            </h3>
                                            <p>Date Published: 03/15/16</p>

                                          </li>

                                          <li className="list-group-item">

                                            <h3>
                                                <span><em>AIDS is Cured!</em></span>
                                                <span className="btn-group pull-right" >
                                                    <button className="btn btn-default ">View Article</button>
                                                    <button className="btn btn-primary">Save</button>
                                                </span>
                                            </h3>
                                            <p>Date Published: 03/15/16</p>


                                          </li>

                                          <li className="list-group-item">

                                            <h3>
                                                <span><em>Knicks Win Championship</em></span>
                                                <span className="btn-group pull-right" >
                                                    <button className="btn btn-default ">View Article</button>
                                                    <button className="btn btn-primary">Save</button>
                                                </span>
                                            </h3>
                                            <p>Date Published: 03/15/16</p>

                                          </li>

                                          <li className="list-group-item">

                                            <h3>
                                                <span><em>Mud: The New Superfood?</em></span>
                                                <span className="btn-group pull-right" >
                                                    <button className="btn btn-default ">View Article</button>
                                                    <button className="btn btn-primary">Save</button>
                                                </span>
                                            </h3>
                                            <p>Date Published: 03/15/16</p>

                                          </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

            </div>
        )
    }

});

// Makes the component accessible for export
module.exports = Main;