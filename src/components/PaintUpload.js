import React from 'react'

const PaintUpload = (props) => {
    return (
        <div className="card home-card">
            <h1>paint your photo here</h1>
          <img src={props.pic} alt="img"/>
        </div>
    )
}

export default PaintUpload
