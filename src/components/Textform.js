import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("UpperCase was clicked")
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showalert("Coverted to upper case","success")
    }
    const handleLowClick=()=>{
        // console.log("UpperCase was clicked")
        let newtext=text.toLowerCase();

        setText(newtext)
        props.showalert("Coverted to lower case","success")
    }
    const handleClearClick=()=>{
        // console.log("UpperCase was clicked")
        let newtext=""

        setText(newtext)
        props.showalert("Cleared the text","success")
    }
    const handleOnChange=(event)=>{
        console.log("Onchange")
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter text here");
    // setText("fjvldkm");
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Your test summary</h1>
            <p>{text.split(" ").length} words,{text.length} characters</p>
            <h2>PREVIEW</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
