import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  //method: 'GET',  - doing this with axios
  //url: BASE_URL,
  params: {
    //relatedToVideoId: '7ghhRHRP6t4',
    //part: 'id,snippet',
    //type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,  //key has to be stored in env file
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);  //eg /BASE_URL/getVideos or /BASE_URL/getChannel
  return data;
}