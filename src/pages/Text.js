export default function Text({corr, arr, question}){
    if (corr == true){
        return <><p className="bg-green-500">{arr[question].content}</p></>
      }else if(corr == false){
        return <><p className="bg-red-500">{arr[question].content}</p></>
      }else{
        return <><p className="bg-white">{arr[question].content}</p></>
      }
    
}