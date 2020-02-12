import React from 'react';

const ResponseArea = ({responseJSON, imgSource}) =>{
  return (
   <div className='pa2 center w-100' id='wrapper'>
      <div className='dtc w-30' id='jsonOutput' height= '550px'>
        Response: <br />
        <textarea className='shadow-5 mv2 bg-lightest-blue' id='responseTextArea' value={JSON.stringify(responseJSON, null, 2)}>
        </textarea>
      </div>
      <div className='dtc' id='imageDiv'>
        Source image: <br />
        <img className='shadow-5 mv2 w-100' alt="from URL" id="sourceImage" src={imgSource} width="400" />
      </div>
    </div>
  )
}
export default ResponseArea;