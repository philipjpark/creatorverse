// import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {

    return (
    <>
    <div className="card">
    <article data-theme="light" >

    <div className="iconSquareContainer">
    <Link to={'/' + props.id} className="iconSquare">
      <i className="fa fa-plus-square"></i>
    </Link>
    </div>

    <div>
      <h4><kbd>{props.name}</kbd></h4>
    </div>

    <div>
      <p>
        <span><strong>@ </strong></span> 
        {props.url}
      </p>
    </div>

    <div>
      <img className="cardImage" src={props.imageURL} alt={props.name} />
    </div>

    <br />

    <div className="cardDescription">
      <p className="truncateText"><strong>This creator is awesome because:</strong> 
      <br />{props.description}
      </p>
    </div>

    <div className="cardEdit">      
        <Link to={'/edit/' + props.id} className="icon-edit">
          <i className="fas fa-edit"></i>
        </Link>
    </div>
    
    </article>
    </div>
    </>
    )
  }

  Card.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired
  };

  export default Card
  