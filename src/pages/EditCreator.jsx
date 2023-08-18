import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import PropTypes from 'prop-types';

function EditCreator({data}) {

  const {id} = useParams()
  const [creator, setCreator] = useState({id: null, name: "", url: "", description: "", imageURL: ""})

  useEffect(() => {
      const result = data.filter(item => String(item.id) === id)[0]
      setCreator({name: result.name, url: result.url, description: result.description, imageURL: result.imageURL})
  }, [data, id])


  const handleChange = (event) => {
      const {name, value} = event.target;
      setCreator( (prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  }
  
  const updateCreator = async (event) => {
      event.preventDefault();
      const { error } = await supabase
      .from('creators')
      .update({ name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL})
      .eq('id', id)

      if (error) {
          console.log(error)
      }

      window.location = "/"
  }

  const deleteCreator = async (event) => {
      event.preventDefault();
      const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', id) 

      if (error) {
          console.log(error);
      }

      window.location = "/"
  }

    return (
    <>
    <div>
    <main className="container">
    <article data-theme="light">
    <div>
    <h1 className="title">Update or Delete the Creator</h1>
    
    <form>
    <h6>Name of Creator</h6>
    <input 
        type="text" 
        id="name" 
        name="name" 
        value={creator.name} 
        onChange={handleChange} 
        required 
    />

    <h6>Creator&apos;s URL</h6>
      <p>Website of Creator</p>
      <input 
        type="text" 
        id="url" 
        name="url"
        value={creator.url} 
        onChange={handleChange} 
        required 
      />

    <h6>Description of Creator</h6>
    <p>Why did I choose this creator?</p>
    <textarea 
        name="description" 
        rows="3" cols="50" 
        id="description" 
        value={creator.description} 
        onChange={handleChange} 
        required
    ></textarea>

    <h6>Image URL</h6>
    <p>Link the image address. The URL must point to direct link to the image file.</p>
    <input 
        type="text" 
        id="image" 
        name="image" 
        value={creator.image} 
        onChange={handleChange} 
        required 
    />
    </form>

    <button type="submit" onClick={updateCreator}>Update</button>
    <button onClick={deleteCreator} className="secondary">Delete</button>

    </div>
    </article>
    </main>
    </div>
    </>
    )
}

EditCreator.propTypes = {
    data: PropTypes.array.isRequired,
};
  
export default EditCreator