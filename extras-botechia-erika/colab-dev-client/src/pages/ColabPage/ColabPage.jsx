import { useState } from 'react'
import { ContainerColab } from './style'

export default function ColabPage() {

  const initialForm = {
    id: "",
    title: "",
    module: 0,
    category: "",
    order: 0,
    currentStatus: 0,
    tagsList : [],
    resourcesList: [],
    path: "",
    imgUrl: "",
    iconUrl: "",
    theme: "",
    stack: [],
    owner: ""
  }

  const [formState, setFormState] = useState({...initialForm})

  const {    
    id,
    title,
    module,
    category,
    order,
    currentStatus,
    tagsList,
    resourcesList,
    path,
    imgUrl,
    iconUrl,
    theme,
    stack,
    owner} = formState

  return (
    <ContainerColab>
        <header>
            <h2>COLAB</h2>
        </header>
        <main>
          <form>
            <fieldset>
              <legend><span>ITEM4Dev</span></legend>
              <label>
                <input type={ 'text'} name="inputName" id="inputName" value={inputName}/>
              </label>
            </fieldset>
          </form>
        </main>
    </ContainerColab>
  )
}
