import { useState,useEffect } from 'react';
import { createClient } from 'contentful';


const client = createClient({
  space: import.meta.env.SPACE_ID,
  environment: 'master', 
  accessToken: import.meta.env.VITE_API_KEY,
});

// custom hook
export const useFetchProjects = () => {
  const [loading,setLoading]=useState(true);
  const [projects,setProjects]=useState([]);

  const getData = async()=>{
    try{
      //fetching
      const response = await client.getEntries();
      const projects = response.items.map((item)=>{
         const { title,url,image } = item.fields;
         const { id } = item.sys;
         // since , image is more nested need to pull out exact url seperately
         const img = image?.fields?.file?.url;
         return {title,url,id,img}
      })
      // once we are done fetching , updating state 
      setProjects(projects)
      setLoading(false);
    }catch(err){
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(()=>{
    getData()
  },[])
  return {loading,projects}
}

console.log(client)

