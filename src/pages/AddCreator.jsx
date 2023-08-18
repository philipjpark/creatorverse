import { useState } from 'react'
import { supabase } from '../client'
import './AddCreator.css'

function AddCreator() {

  const [creator, setCreator] = useState( {name: "", url: "", description: "", imageURL: ""} )

  const handleChange = (event) => {
      const {name, value} = event.target;
      setCreator( (prev) => {
          return {
              ...prev,
              [name]:value,
          }
      })
  }

  const addCreator = async (event) => {
      event.preventDefault()

     const { error } = await supabase
      .from('creators')
      .insert( {name: creator.name, url: creator.url, description: creator.description, imageURL: creator.imageURL} )
      .select()

      if (error) {
          console.log(error)
      }
      window.location = "/"
  }

  return (
    <>
    <main className="container">
    <article data-theme="light">
    <div className="addCreator">
    <h1>Add a Creator</h1>

    <form id="addCreatorForm" className="addCreatorForm">
      <h6>Name of Creator</h6>
      <input 
        type="text" 
        id="name" 
        name="name" 
        placeholder="Name"
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
        placeholder="URL" 
        value={creator.url} 
        onChange={handleChange} 
        required 
      />

      <h6>Description of Creator</h6>
      <p>Why did I choose this creator?</p>
      <textarea 
        name="description"
        placeholder="Description" 
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
        id="imageURL" 
        name="imageURL" 
        placeholder="Image URL"
        value ={creator.imageURL} 
        onChange={handleChange} 
      />

      <button type="submit" onClick={addCreator}>Submit</button>
    </form>

    </div>
    </article>
    </main>
    </>
  )
}

export default AddCreator
  