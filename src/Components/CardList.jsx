import React from 'react';
import '../Sass/CardList.scss';
import Card from './Card';


const CardList = ({ monsters }) => {
    return(
        <div className="card-list">
            {monsters.map(monster => {
                return (<Card key={monster.id} image={`https://robohash.org/${monster.id}?set=set2`} title={monster.name} email={monster.email} />)
            })}
        </div>
    )
}


export default CardList;