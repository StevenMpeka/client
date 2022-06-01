import React from 'react'

const AllColors = (props) => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

    return (
        <div className="services__container container ">
        <div className="card home-card-allcolor">
            {colors.map(color => { 
                const activeClass = props.currentColor === color ? "color-swatch-active" : "";
                return (
                    <div onClick={() => {props.changeColor(color)}}>
                        <div className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })} 
        </div>
        </div>
    )
}

export default AllColors
