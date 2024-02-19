
import './App.css'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react'


function App() {
  const [pamount,setPamount]= useState(0)
  const [rate,setRate] = useState(0)
  const [time,setTime] = useState(0)

  const [validpamount,setValidpamount] = useState(false)

  const submitted=(e)=>{
    e.preventDefault()
    console.log(pamount,rate,time);
    // console.log(typeof(pamount));
    const pattern=/^[1-9][0-9]*$/
    if(!pamount.match(pattern)){
      // alert("Invalid principle amount")
      setValidpamount(true)
    }
    if(!rate.match(/^[1-9][0-9]{0,1}$/)){
      alert("invalid rate")
    }
    if(!time.match(/^[1-9][0-9]{0,1}$/)){
      alert("invalid Duration")
    }
  }

  return (
    <>
     
    <div className='w-100 bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <div className='bg-light shadow w-50 roundeed p-5'>
        <h1>Simpleintrest calculator</h1>

        <div className='d-flex justify-content-center p-5' style={{backgroundColor:"yellow"}}>
          ₹ 123
        </div>
        <form onSubmit={(e)=>{submitted(e)}}>
          <div className='mt-2'>
          <TextField id="outlined-basic" onChange={(e)=>(setPamount(e.target.value))} style={{width:"100%"}} label="₹ principle amount" variant="outlined" />
          {
            validpamount &&
            <div className="text-danger">
              Invalid principle amount
            </div>
          }
          
          </div>
          <div className='mt-2'>
          <TextField id="outlined-basic" onChange={(e)=>(setRate(e.target.value))} style={{width:"100%"}} label="% rate" variant="outlined" />
          </div>
          <div className='my-2'>
          <TextField id="outlined-basic" onChange={(e)=>(setTime(e.target.value))} style={{width:"100%"}} label="time" variant="outlined" />
          </div>

          <Stack spacing={2} direction={'row'}>
          <Button variant="contained" type='submit' className='bg-dark' style={{height:'50px', width:'50%'}}>Submit</Button>
          <Button variant="contained" className='bg-dark' style={{height:'50px', width:'50%'}}>REset</Button>

          </Stack>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default App
