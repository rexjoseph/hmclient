import React from 'react'
import { useState } from 'react'
import './Tag.css'

const Tag = () => {
  const [tags, setTags] = useState(["Nodejs", "MongoDB", "AI"]);

  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove))
  }

  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags([...tags, e.target.value])
      e.target.value = "";
    }
  }
  return (
    <div>
      <div className="tags-input">
        {
          tags.map((tag, index) => (
            <li className='tag' key={index}>
            <span>{tag}</span>
            <i className='fa fa-times' onClick={() => removeTags(index)}></i>
          </li>
          ))
        }
        <input type="text" placeholder="Press enter to add tags" onKeyUp={ e => e.key === "Enter" ? addTags(e) : null}/>
      </div>
    </div>
  )
}

export default Tag;