import { useState, useEffect } from 'react'
import Card from '../components/Card'
import PropTypes from 'prop-types';
import './ShowCreators.css';

function ShowCreators(props) {

  const [creators, setCreators] = useState([])

  useEffect(() => {
    setCreators(props.data)
  }, [props])

  return (
    <>
    <div> 
    <h4 className="objective">This app is to view and add your favorite content creators.</h4>
    <section className="showCreators">
        
      {creators.map((creator) => (
        <Card
          key={creator.id}
          id={creator.id}
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.imageURL}
          />
      ))}

    </section> 
    </div>
    </>
    )
  }

ShowCreators.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ShowCreators
  
