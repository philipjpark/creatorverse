import { useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import ShowCreators from './pages/ShowCreators'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ViewCreator from './pages/ViewCreator'
import './App.css'
import { supabase } from './client'

function App() {

  const [creators, setCreators] = useState([])

  useEffect(() => {
    
    const fetchCreators = async () => {
      const {data} = await supabase
      .from('creators')
      .select()
      .order('created_at', { ascending: true })

      setCreators(data)
    }

    fetchCreators()
  }, [])


  let element = useRoutes([
    {
      path: "/",
      element:<ShowCreators data={creators}/>
    },
    {
      path:"/edit/:id",
      element: <EditCreator data={creators}/>
    },
    {
      path:"/new",
      element: <AddCreator />
    },
    {
      path: "/:id",
      element: <ViewCreator data={creators}/>
    }
  ])

  return (
    <>
    <div>
        <header className="header">
        <div className="logo">⭐ Creatorverse</div>
        <div className="nav">
        <nav className="customNav">
          <ul>
            <li><a href="/" role="button" className="btn">View All Creators</a></li>
            <li><a href="/new" role="button" className="btn">Add a Creator</a></li>
          </ul>
        </nav>
        </div>
        </header>

        <main> 
          {element} 
        </main>

    </div>
    </>
  )
}
export default App
