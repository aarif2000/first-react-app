import React, {useState} from 'react'
export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text");
  const HandleupClick = () =>{
    let newText = text.toUpperCase()
    setText(newText); 
    props.showAlert("Changed to UpperCase", "success")
}

const HandleclearClick = () =>{
  let newText = text.toLowerCase()
  setText(' '); 
  props.showAlert("Text Cleared", "success")

}

const HandledownClick = () =>{
  let newText = text.toLowerCase()
  setText(newText); 
  props.showAlert("Changed to LowerCase", "success")

}
  const handleOnChange = (event) =>{
    console.log("Done")
    setText(event.target.value)
  }
  return (
    <>
  <div class="container" style={{Color: props.mode === 'dark'? 'white' : 'black'}}>
    <h1>{props.heading}</h1>
    <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'light'}} id="exampleFormControlTextarea1" rows="8"></textarea>
    <button className="btn btn-primary mx-2 my-3" onClick={HandledownClick}>Convert to Lowercase </button>
    <button className="btn btn-primary" onClick={HandleupClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2 my-3" onClick={HandleclearClick}>Clear Text</button>

  </div>

    <div class="container my-3" style={{Color: props.mode === 'dark'? 'white' : 'black'}}>
     <h1> Your Summary here</h1>
      Words are {text.split(" ").length} and characters are {text.length}
      <h2>Preview</h2>.
      <p>{text.length>0? text : 'Enter text above to preview '}</p>
    </div>
    </>
  )
}
