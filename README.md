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
* ResourceList

Name |	Description |	Type
------------ | ------------- | -------------
Title | original tiltle  | string
Genre | movie's genre  | string
Premiere | first public presentation | string
Runtime | movie's long | string
Language | movie's original language | string

## /movies/year (endpoint)
This route Get movies by year from 2015 to 2021

```javascript
 axios
      .get(https://api-netflix.herokuapp.com/api/v2/movies/2021)
      .then(function (result) {
       console.log(result.data)
      })
      .catch(function (error) {
       console.log(error)
      });
```

## /movies/year?genre=
you can get also movies by genre 
  * Drama
  * Horror
  * Adventure
  * thriller...

```javascript
 axios
      .get(https://api-netflix.herokuapp.com/api/v2/movies?genre=drama)
      .then(function (result) {
      //you get all movies with genre "drama"
       console.log(result.data)
      })
      .catch(function (error) {
       console.log(error)
      });
```










