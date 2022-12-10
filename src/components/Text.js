import React, {useState} from 'react'

export default function Text(props) {
  const [text, setText] = useState('');

  const convertToUpperCase = () => {
    let result = text.toUpperCase()
    setText(result)
    props.showAlert("Text has been converted to uppercase.","success")
  }

  const convertToLowerCase = () => {
    let result = text.toLowerCase()
    setText(result)
    props.showAlert("Text has been converted to lowercase.","success")
  }

  const capitalize = () => {
    let string_arr = text.toLowerCase().split(". ")
    let result = ''
    string_arr.forEach(element => {
      result = result + '. '+ element.charAt(0).toUpperCase() + element.slice(1)
    });
    let final_result = result.replace(". ","")   
    setText(final_result)
    props.showAlert("Text has been capatalized.","success")
  }
  
  const clearSpace = () => {
    let regex = /\s{2,}/g
    let result = text.replace(regex," ")
    setText(result)
    props.showAlert("Extra space has been cleared.","success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
    <div className='container' style={{color: props.mode === 'light' ?'black':'white'}}>
        <center><h1>{props.heading}</h1></center>
        <div className="mb-3">
            <textarea className="form-control" id="textbox" rows="10" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ?'white':'#011C32', color: props.mode === 'light' ?'black':'white'}}></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={capitalize}>Capitalize</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={convertToUpperCase}>Upper Case</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={convertToLowerCase}>Lower Case</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clearSpace}>Clear Extra Space</button>
    </div>
    <div className="container" style={{color: props.mode === 'light' ?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p><b><i>Words: {text.split(" ").filter((element)=>{return element.length!==0}).length} and Characters: {text.length}</i></b></p>
    </div>
    </>
  )
}
