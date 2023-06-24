import React ,{useState} from 'react'
export default function Textform(props) {
    const handleupclick= ()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const handlelowclick= ()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleclearclick= ()=>{
        let newText= '';
        setText(newText);
    }
    const handlecopy=()=>{
        var text=document.getElementById("Textarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
     <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="Textarea" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'white':'#0c2952',color:props.mode==='dark'?'black':'white'}} rows="8"></textarea>
     </div>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleupclick}>Convert to Upper</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handlelowclick}>Convert to Lower</button>
    <button  disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleclearclick}>Clear</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handlecopy} >Copy Text</button>
    <button disabled={text.length===0} type="button" className="btn btn-primary my-2 mx-2" onClick={handleSpace}> Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
         <p><b>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}  characters</b></p>
         <p><b>{0.008*text.split(" ").length} Minutes to read</b></p>
    <h6>Preview of text</h6>     
    <div className='pre mx-4 '>        
          <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </div>   
    </>
  )
}
