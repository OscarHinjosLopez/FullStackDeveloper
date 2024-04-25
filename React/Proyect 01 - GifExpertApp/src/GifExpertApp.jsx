import { useState } from 'react'
import { AddCategory, GifGrid } from './components';




export const GifExpertApp = () => {

  // HOOK para mantener el estado
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategorie = (categorie) => {
    if (categories.some((cat) => cat.toLowerCase() === categorie.toLowerCase())) return
    setCategories([categorie, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategorie={onAddCategorie} />
      {categories.map(category => (<GifGrid key={category} category={category} />))}

    </>
  )
}
