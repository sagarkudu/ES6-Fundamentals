
const postListPromise = new Promise((resolve, reject) => {
   
    //in promise body lets write ajax call
    //jquery get method passes response data to callback function 
    $.get("https://jsonplaceholder.typicode.com/posts", (data) => {
      //if call is successfull
      console.log("print result", data);
      resolve(data);
    }).fail((err) => {
      reject(new Error(`Error ${err.status}`));
    });
});
