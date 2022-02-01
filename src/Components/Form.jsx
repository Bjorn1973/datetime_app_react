import {useState, useEffect} from 'react';
import axios from "axios"
import DateTime from "./DateTime";
import Loading from './Loading';
import Error from './Error';


const Form = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState("");

    const [searchNo, setSearchNo] = useState(0);
    const [toConvert, setToConvert] = useState(0);

    useEffect(()=>{
        if(toConvert){
            (async ()=>{
                try{
                    setLoading(true) 
                    const apiData = await axios("https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp="+toConvert);
                    setLoading(false)
                    setData(apiData.data)
                }
                catch(error){
                    setLoading(false);
                    setError(true)
                }
            })()
        }
    },[toConvert]);

  return (
      <>
      
      <div className="column form">
          <form className="field" onSubmit={(e)=>{e.preventDefault(); setData(""); setToConvert(searchNo); setSearchNo(0)}}>
          <label className="label">Enter a Unix Timestamp</label>   
          <div className="control"> 
          <input onChange={(e)=>{setSearchNo(e.target.value)}} onSubmit={(e)=>{e.target.value=""}} className="input" type="number" value={searchNo} placeholder="E.g. 1639219667" min="0" max="253402300799"/>
          </div>
          <div className="control">
          <button className="button is-primary">
              <span className="button__text">Convert</span>
          </button>
          </div>
          </form>
          </div>
          
          {loading && <Loading />}
          {error && <Error />}
          {data.length > 0 && <DateTime data={data} />}
      </>
  );
};

export default Form;
