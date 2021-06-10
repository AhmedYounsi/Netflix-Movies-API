A RESTful API for Netflix movies
======

> An Open-source api built on NodeJs that lets you consume all netflix movies data

## Information
This is a consumption-only API — only the HTTP GET method is available on resources.
No authentication is required to access this API, and all resources are fully open and available.


## /movies (endpoint)
This route Get all movies data on json format

```javascript
 axios
      .get(https://api-netflix.herokuapp.com/api/v2/movies)
      .then(function (result) {
       console.log(result.data)
      })
      .catch(function (error) {
       console.log(error)
      });
```
# response JSON

First Header | Second Header
------------ | -------------
Content from cell 1 | Content from cell 2
Content in the first column | Content in the second column
