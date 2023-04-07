import React from "react";
import "../../App.css";
import { useState } from 'react';
import { useEffect } from 'react';  //<--use when fetching from the API
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getComments } from '../../utility/api';
import { useLocation } from "react-router-dom";   //<---API fetch function import
// import '../../mocks/data/comments.json'
// import comments from '../../mocks/data/comments.json'
import PostComment from "./postComment";

function ThreadComments() {
  
  const location = useLocation()  
  const thread_id = location.state?.thread_id
  console.log('thread_id:', thread_id);
    //destructure props
  // const {
  //   comments,
  //   } = props

  //helper functions
  // const filteredComments = comments.filter(comment => comment.thread_id === thread_id);

  //define state
    const [data, setData] = useState([])
    // console.log('data:', data)

  // fetch the API data 

  useEffect(() => {
    if (thread_id) {
      console.log('Fetching comments for thread_id:', thread_id);
      getComments(thread_id)
        .then((data) => {
         // console.log('Received data:', data) // API app is showing correct data as dynamic path, checking if UI is recieving correctly
          setData(data)
        })
        .catch((error) => console.log(error))
    }
  }, [thread_id])


  //conditional rendering guard clauses
  //when cant read map even with returning an array need to return a div to give time to render
  if (!data){
    return <div>loading...</div>
  }

    //component logic
  //render a card component using .map that returns each thread title and subject as an individual card
  return (
    <Box>
      <PostComment/>
      {console.log('Rendering data:', data)}
      {data.map((comment) =>(
        <Card key={comment.comment_id} style={{ marginTop: '20px' }} sx={{ minWidth: 275 }}>
          <CardContent>
            {/* when auth is set up use this to display which user posted to */}
            {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {comments.user_id}
            </Typography> */} 
            <Typography variant="body2">
              {thread_id.comment.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
export default ThreadComments;
