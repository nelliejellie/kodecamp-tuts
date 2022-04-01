import './App.css';
import React, {useState, useEffect} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function App() {
  const [gitftcards, setGiftcards] = useState([])

  useEffect(()=>{
    getGiftCards()
  },[])

  const getGiftCards = async () =>{
    const response = await fetch("https://nelliejellie.github.io/datajson/data/data.json")
    const data = await response.json()
    setGiftcards(data.allGiftCards)
    console.log(data.allGiftCards)
  }
  return (
    <div className="App grid grid-cols-4 gap-4 bg-slate-400">
      {gitftcards.map((item) => (
        <div className='w-1/5 m-4' key={item.id}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Title
              </Typography>
              <Typography variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Currencies
              </Typography>
              <div className='grid grid-rows-2 gap-2 w-8'>
                <span className='pl-2 text-blue-600'>{`${item.currencies[0]} `} </span>
                <span className='pl-2 text-blue-600'>{`${item.currencies[1]} `} </span>
                <span className='pl-2 text-blue-600'>{`${item.currencies[2]} `} </span>
                <span className='pl-2 text-blue-600'>{`${item.currencies[3]} `} </span>
                <span className='pl-2 text-blue-600'>{`${item.currencies[4]} `} </span>
                <span className='pl-2 text-blue-600'>{`${item.currencies[5]} `} </span>
                <span className='pl-2 text-blue-600'>{`${item.currencies[6]} `} </span>

              </div>
            </CardContent>
          </Card>
        </div>
      ))}
      
      
    </div>
  );
}

export default App;
