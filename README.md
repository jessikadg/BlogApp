# BlogApp
Simple App to create and edit posts. Created for didatic purposes in React Native course, using JSX, useContext, 
useReducer, expo, ngrok and axios

This App was built with didatic purposes with React Native, using useState, useEffect and use Reducer.

To make it run in your local machine, you will need Expo and Ngrok installed.

1 - In your terminal, run

  BlogApp/jsonserver ~$ npm run db
  
  and
  
2-  BlogApp/jsonserver ~$ npm run tunnel
  
  
3 - The second command will provide you a temporary ngrok  link, valid for 8 hours. Copy the link.
  
4 - Paste the link at BlogApp/src/jsonServer.js in where indicated, in the baseURL line.
  
5 - After that, run 'npm start' in the main/first folder of the project.
  
If everything goes well, you should be about to see 2 test posts on the list :)

