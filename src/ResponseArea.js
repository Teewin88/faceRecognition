import React from 'react';

const ResponseArea = ({responseJSON, imgSource}) =>{
  return (
   <div className='dt fl w-third' id='wrapper' width='1020px'>
      <div className='dtc' id='jsonOutput' height= '550px'>
        Response: <br />
        <textarea className='shadow-5 mv2 bg-lightest-blue' id='responseTextArea' value={JSON.stringify(responseJSON, null, 2)}>
        </textarea>
      </div>
      <div className='dtc' id='imageDiv'>
        Source image: <br />
        <img className='shadow-5 mv2' alt="from URL" id="sourceImage" src={imgSource} width="400" />
      </div>
    </div>
  )
}
export default ResponseArea;