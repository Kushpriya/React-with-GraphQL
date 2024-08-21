import React from 'react'
import '../css/characterlist.css'
import { useCharacters } from '../hooks/useCharacters'


export default function CharacterList() {
const { error, loading , data } = useCharacters();
console.log({error,data,loading})
if (loading) return <div>Spinner....</div>

if (error) return <div>Something went wrong.</div>


  return (
    <div className='CharacterList'>
      {data.characters.results.map((character )=> (
            <div key={character.id}>
                <img src = {character.image} />
                <h2>{character.name}</h2>
                </div>
      ))}
    </div>
  );
}

