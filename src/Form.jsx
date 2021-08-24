import React, { useState } from 'react';

const Form = (props) => {
    const [text, setText] = useState('');

    const chngeupr = () => {
        if(text.length === 0)
        props.showalert("Please Write Something" , "danger");
        else
        {
        let texta = text.toUpperCase();
        setText(texta);
        props.showalert("Converted to UpperCase" , "success");
        };
    };

    const chngelwr = () => {
        if(text.length === 0)
        props.showalert("Please Write Something" , "danger");
        else{
        let texta = text.toLowerCase();
        setText(texta);
        props.showalert("Converted to LowerCase" , "success");
        };
    }

    const cleartxt = () => {
        setText("")
        props.showalert("Clear to write" , "success");
    }
    const lelo = (event) => {
        setText(event.target.value);
    }

    return (
        <>

            <div className="mb-3 my-3">
                <h1 className = {`text-${props.mode === 'light'?'dark':'light'}`}>Enter Text to Convert</h1>
                <textarea className="form-control" value={text} onChange={lelo} style={{backgroundColor: props.mode ==='dark'?'#d7e8e8' : 'white',color: props.mode === 'dark'?'black':'black'}} placeholder="Enter your text" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="button" className="btn btn-primary mx-1" onClick={chngeupr}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={chngelwr}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={cleartxt}>Clear Text</button>
            <div className="mb-3 my-1">
                <h1 className = {`text-${props.mode === 'light'?'dark':'light'}`}>Text Summary</h1>
                <p className = {`text-${props.mode === 'light'?'dark':'light'}`}> word : {text.split(" ").length} characters : {text.length}</p>
                <h1 className = {`text-${props.mode === 'light'?'dark':'light'}`}>Preview</h1>
                <p>{text.length>0?text : "Enter something in box to preview"}</p>
            </div>
            
        </>
    )
}
export default Form;