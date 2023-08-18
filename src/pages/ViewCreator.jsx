import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ViewCreator.css';


function ViewCreator({data}) {

    const {id} = useParams()
    const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""})

    useEffect(() => {
        const result = data.filter(item => String(item.id) === id)[0]
        setCreator({id: result.id, name: result.name, url: result.url, description: result.description, imageURL: result.imageURL})
    }, [data, id])


    return (
    <>
    <main className="container">
    <article data-theme="light">
    <div className="ViewCreator">
    <h3 className="title">This Creator Is Awesome!</h3>

    <section className="creator-info">
        <h3><kbd>{creator.name}</kbd></h3>

        {/* <p><span>@</span> <a>{creator.url}</a></p> */}
        <p>
            <span><strong>@ </strong></span> 
            <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
        </p>

        <figure>
          <img
            className="card-image"
            src={creator.imageURL}
            alt={creator.name}
          />
          <figcaption>
            Image from
            <a> {creator.imageURL}</a>
          </figcaption>
        </figure>

        <p><strong>This creator is awesome because:</strong> 
            <br />{creator.description}
        </p>

    </section>

    </div>
    </article>
    </main>
    </>
    )
  }

ViewCreator.propTypes = {
    data: PropTypes.array.isRequired,
  };

  export default ViewCreator