import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';
//import Navbar from "./components/Navbar";
//import Feed from "./components/Feed";
//import VideoDetail from "./components/VideoDetail";
//import ChannelDetail from "./components/ChannelDetail";
//import SearchFeed from "./components/SearchFeed";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx= {{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route exact path='/' element= {<Feed />}/>  
          <Route path='/video/:id' element= {<VideoDetail />}/>
          <Route path='/channel/:id' element= {<ChannelDetail />}/>
          <Route path='/search/:searchTerm' element= {<SearchFeed />}/>
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App

//inside Route we can have individual Route components
// /:root route, which is going to be exact and contain an element which fetch feed
//Eg /video/12323 would fetch a specific video
//AutoImport extension cane be used to import components- using double click on component and pressing Ctrl + Space

