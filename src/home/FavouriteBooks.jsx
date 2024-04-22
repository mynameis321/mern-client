import React,{useEffect,useState} from 'react'
import BookCards from '../components/BookCards';
const FavouriteBooks = () => {
    const[books,setBooks]=useState([]);
    useEffect(()=>{
        fetch( 
            "http://localhost:3001/all-books"
            // "hhtps://localhost:3001/all-books"
        )
        .then(res=>res.json()).then(data=>
            setBooks(data)
            // console.log(data)
        )
        
    },[])
  return (
    <div>
   <BookCards bookss={books} headline="The best of children's bookshelf"/>
    </div>
  )
}

export default FavouriteBooks

