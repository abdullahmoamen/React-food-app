import React from 'react'
import style from'./recipe.module.css';

const Recipe= ({title,calories,img,ingredients})=>{
    return (
        <div  className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol className={style.orderList}>
                {
                ingredients.map(ing=>(
                    <li key={ing.title}>{ing.text}</li>
                ))}
            </ol>
            <img className={style.img} src={img} alt={title}></img>
            <p className={style.calories}>Colories is :{calories}</p>
        </div>
    )
}
export default Recipe