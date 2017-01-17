// Include Axios library for HTTP requests
var axios = require("axios");

// API Key for NYT
var APIKey = "d6c8cdc35f93488dbaa04dd9173ea9fb";

// Helper Functions
var helpers = {

    // Run Query
    runQuery: function(term, start, end) {

        console.log(term);
        console.log(start);
        console.log(end);

        var formattedTerm = term.trim();
        var formattedStart = start.trim() + "0101";
        var formattedEnd = end.trim() + "1231";

        // Print a log statement
        console.log("Query is being run");

        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {

            params: {
                "api-key": APIKey,
                "q": formattedTerm,
                "begin_date": formattedStart,
                "end_date": formattedEnd
            }
        })
        .then (function(results) {
            console.log("Axios Results", results.data.response);
            return results.data.response;
        })

    }
}

// Make the function available for access
module.exports = helpers;

