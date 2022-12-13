import './App.css';
import Comments from "./components/Comments";
import AddComments from "./components/AddComments";
import {useEffect, useState} from "react";
import axios from "axios";
import {fromNow} from './utils/time';

//import comments from "./components/Comments";
//https://jsonplaceholder.typicode.com/users

function App() {
  const [comment, setComment] = useState([]);
  useEffect(()=>{
    fetchData()
  }, [])
    //GET request
  const fetchData =  async ()=>{
    await axios.get("https://my-json-server.typicode.com/JaiBhalla03/fakeApi/comments")
        .then((res)=> {
          setComment(res.data)
        })
        .catch((err)=> console.log(err))
  }
  //POST request
  const postData = async(name, comment1)=>{
      await axios.post('https://my-json-server.typicode.com/JaiBhalla03/fakeApi/comments',{
          unique_id: comment.length + 1,
          name: name,
          comment: comment1,
          time: fromNow(new Date())
      })
          .then((res)=>{
              if(res.status !== 201){
                  return;
              }
              else{
                  console.log(name);
                  return res.data;
              }
          })
          .then((data)=>{
              setComment((comment)=>[...comment, data]);
          })
          .catch((err)=>{
              console.log(err);
          })
  }
  //DELETE request
  const deleteData = async(id)=>{
    await axios.delete(`https://my-json-server.typicode.com/JaiBhalla03/fakeApi/comments/${id}`)
        .then((res)=>{
          if(res.status !== 200){
              return;
          }
          else{
              setComment(comment.filter((comm)=>{
                  return comm.id !== id;
              }))
          }
        })
        .catch((err)=> console.log(err))
  }

  console.log(comment)
  return (
    <div className="App">
      <h2 className={"header"}>Comments Page</h2>
        <p className={'number'}>{comment.length} comments</p>
      {
        comment.map((comm)=>(
            <Comments key={comm.id} id={comm.id} name={comm.name} comment={comm.comment} time={comm.time} onDelete={deleteData}/>
        ))
      }
        <AddComments addComment={postData}/>
    </div>
  );
}

export default App;

export class setComment {
}