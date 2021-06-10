A RESTful API for Netflix movies
======

> An Open-source api built on NodeJs that lets you consume all netflix movies data

## Information
This is a consumption-only API — only the HTTP GET method is available on resources.
No authentication is required to access this API, and all resources are fully open and available.


## Resource Lists /movies
This route Get all movies

```bash
 axios
      .get(https://api-netflix.herokuapp.com/api/v2/movies)
      .then(function (result) {
       console.log(result.data)
      })
      .catch(function (error) {
       console.log(error)
      });
```
