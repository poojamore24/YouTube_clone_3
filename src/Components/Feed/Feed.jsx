// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
// import './Feed.css'
// import moment from 'moment';
// import thumbnaill1 from '/thumbnail1.png'
// import thumbnaill2 from '/thumbnail2.png'
// import thumbnaill3 from '/thumbnail3.png'
// import thumbnaill4 from '/thumbnail4.png'
// import thumbnaill5 from '/thumbnail5.png'
// import thumbnaill6 from '/thumbnail6.png'
// import thumbnaill7 from '/thumbnail7.png'
// import thumbnaill8 from '/thumbnail8.png'
// import { API_KEY, value_converter } from '../../Data';

// const Feed = ({category}) => {
//   const[data,setdata] =useState([]);

//   const fetchData = async () =>{


//   const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`;





//   await fetch(videoList_url).then(response=>response.json()).then(data=>setdata(data.items))
//   }
//  useEffect(() =>{
//   fetchData();

//  },[category])





//   return (
//     <div className="feed">
//       {data.map((item,index)=>{
      
      
      
//       return(


// <Link to={'video/${item.snippet.categoryId}/${item.Id}' }className='card'> 

//       <img src={item.snippet.thumbnails.medium.url} alt=""></img>
//       <h2>{item.snippet.tittle}</h2>
//       <h3>{item.snippet.channelTitle}</h3>
//       <p>{ value_converter(item.statistics.viewCount)}
//       views &bull; {moment(item.snippet.publishedAt).fromNow}</p>
      
//     </Link>
//       )}
//     )}
    


 
//    </div> 
//   )
//       }

//  export default Feed


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Feed.css';
// import moment from 'moment';
// import { value_converter } from '../../Data';

// const Feed = ({ category }) => {
//   const [data, setData] = useState([]);

//   const fetchData = async () => {
//     const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&videoCategoryId=${category}&key=${API_KEY}`;
    
//     const response = await fetch(videoList_url);
//     const data = await response.json();
//     setData(data.items);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [category]);

//   return (
//     <div className="feed">
//       {data.map((item, index) => (
//         <Link key={index} to={`/video/${item.id}`} className='card'>
//           <img src={item.snippet.thumbnails.medium.url} alt=""/>
//           <h2>{item.snippet.title}</h2>
//           <h3>{item.snippet.channelTitle}</h3>
//           <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default Feed;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Feed.css';
import moment from 'moment';
// Thumbnail imports (assuming they are not used yet, so commenting them out)
// import thumbnaill1 from '/thumbnail1.png';
// and others...
import thumbnaill1 from '/thumbnail1.png'
import thumbnaill2 from '/thumbnail2.png'
import thumbnaill3 from '/thumbnail3.png'
import thumbnaill4 from '/thumbnail4.png'
import thumbnaill5 from '/thumbnail5.png'
import thumbnaill6 from '/thumbnail6.png'
import thumbnaill7 from '/thumbnail7.png'
import thumbnaill8 from '/thumbnail8.png'



const Feed = ()=>{


  return (
    <div className="feed">

      <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill1} alt=""/>
      <h2>Best Channel to learn Coding </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
       </Link>

        <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill2} alt=""/>
      <h2>Luckiest Moments in Football </h2>
      <h3>JackieMT</h3>
      <p>14k views & 2 days ago</p>
       </Link>

            <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill3} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
     </Link>

        <div className='card'>
      <img src={thumbnaill4} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
   </div>




       <Link to={'video/20/4521'} className='card'> 
         <img src={thumbnaill5} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
        </Link>
        <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill6} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
        </Link>

   <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill7} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
   </Link>


   <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill8} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
   
        </Link>

        
      <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill1} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
       </Link>
    

        
       <Link to={'video/20/4521'} className='card'> 
       <img src={thumbnaill5} alt=""/>
    <h2>Best Channel to learn codimg </h2>
    <h3>Code with chai</h3>
    <p>14k views & 2 days ago</p>
      </Link>

   <Link to={'video/20/4521'} className='card'> 
      <img src={thumbnaill4} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
   </Link>

   <Link to={'video/20/4521'} className='card'>
      <img src={thumbnaill2} alt=""/>
      <h2>Best Channel to learn codimg </h2>
      <h3>Code with chai</h3>
      <p>14k views & 2 days ago</p>
       </Link>
         </div>
        
  );
}
export default Feed;
