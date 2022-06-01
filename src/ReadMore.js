import React,{useState} from 'react'

const ReadMore = ({children, maxCount= 60}) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    }
    return(
      <p className="text">
        {isReadMore ? text.slice(0,maxCount) : text}
        <span onClick={toggleReadMore} className="read-or-hide price">
          {isReadMore ? "...read more" : "show less"}
        </span>
      </p>
    )
  };

const Content = (props) => {
    return (
        <div>
            <p>
            <strong>Description: </strong>
                  <ReadMore>
                  {props.dataDescription} 
                  </ReadMore>
                </p>
        </div>
    )
}

export default Content
