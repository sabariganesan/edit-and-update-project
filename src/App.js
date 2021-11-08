import { useState ,useEffect} from 'react';
import './App.css';
import Popup from './component/popup';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tablecell  from '@material-ui/core/TableCell';
import Paper  from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import {useDispatch} from 'react-redux';

function App() {
const [data,setdata]=useState([])
const [edit,setedit]=useState(false)
const dispatch = useDispatch();

useEffect(() => {
  fetch(" http://localhost:8000/data").then((res)=>{return res.json()}).then((data)=>setdata(data))
 ;
}, [])


const Handleedit=(x,y)=>{
dispatch({type:"edit",payload:{index:x,title:y.title,price:y.price,rating:y.rating}})
setedit(!edit)
}


const Updated=(val)=>{
  const datas=[...data];
 datas[val.index].title=val.title;
 data[val.index].price=val.price;
 data[val.index].rating=val.rating;
 setdata(datas)
 setedit(!edit)
 axios.put(` http://localhost:8000/data/${val.index+1}`,{
id: data.length+1,
title: val.title,
price: val.price,
rating: val.rating
 }).then((res)=>{return console.log(res);})

}


  return (
    <div className="App">
     data table
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
       
      <TableHead>
      <TableRow>
        <Tablecell>id</Tablecell> 
        <Tablecell>title</Tablecell>
        <Tablecell>price</Tablecell>
        <Tablecell>rating</Tablecell> 
      </TableRow>
      </TableHead>

      {
        data.map((value,index)=>{return<TableBody key={index}>
      <TableRow>
       <Tablecell>{value.id}</Tablecell>
          <Tablecell>{value.title}</Tablecell>
          <Tablecell>{value.price}</Tablecell>
          <Tablecell>{value.rating}</Tablecell>
         <Tablecell> <Button onClick={()=>Handleedit(index,value)}>edit</Button></Tablecell>

        </TableRow>

        </TableBody>   
           

         })
      }
       </Table>
      </TableContainer>
      {
        edit?<Popup value={edit} updateddata={Updated}></Popup>:null
      }
    </div>
  );
}

export default App;
