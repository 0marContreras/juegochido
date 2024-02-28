import { useState, useEffect } from "react";
import Text from "./Text";
import Modal from "./Modal";
const arr = [
  {
      title: "post-negotiation",
      content: "This could include the implementation of agreements, monitoring, and assessing outcomes."
  },
  {
      title: "preliminary agreement",
      content: "It denotes a provisional or initial agreement that outlines key terms and conditions but may not be final or binding. It sets the stage for further negotiations."
  },
  {
      title: "closing of agreement",
      content: "It refers to the finalization and formalization of agreements, where all parties involved reach a consensus and commit to the terms and conditions."
  },
  {
      title: "results obtained",
      content: "It refers to the outcomes or achievements that have been realized as a result of certain actions, projects, or agreements."
  },
  {
      title: "comparation of results",
      content: "It involves assessing the outcomes achieved in comparison to the anticipated or planned results. This helps evaluate the success or deviation from initial expectations."
  },
  
  {
      title: "areas of opportunity",
      content: "It refers to specific areas or aspects where improvement, growth, or development is possible. Identifying and addressing these areas can lead to better performance or outcomes."
  }
]


export default function Home() {

  const  [inputValue, setInputValue] =  useState('');
  const  [question, setQuestion] =  useState(0);
  const  [corr, setCorr] = useState()

  const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

  const correct = ()=>{
    if (arr[question].title == inputValue.toLowerCase()){
      setCorr(true)
    }else{
      setCorr(false)
    }
  }

  useEffect(()=>{
    setQuestion(Math.floor(Math.random()*arr.length))
  }, [])

  
  return (
    <>
    <div className="flex justify-center items-center h-screen">
    <div className="relative max-w-xs">
      <div className="mb-4 text-center rounded-md text-xl">
        
      {<Text corr={corr} arr={arr} question={question} />}
      
      </div>
          <input
          value={inputValue}
          onChange={handleChange}
              type="text"
              placeholder="Enter your answer"
              className="w-full pl-5 pr-3 py-2 mt-30 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          />
          <button onClick={correct} className="w-full h-12 mt-4 px-6 text-indigo-100 transition-colors duration-150 bg-[#836177] rounded-lg focus:shadow-outline hover:bg-[#654b49]">Submit</button>
      <Modal corr={corr}/>
      </div>
    </div>
  </>
  );
}
