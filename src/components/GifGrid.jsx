import { useEffect, useState } from "react";
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    return (
        <>
            <h3 >{category}</h3>
            {
                isLoading && (<h2>Cargando ....</h2>) 
            }
            <div className="card-grid">
                {
                    images.map((item) => (
                        <GiftItem key={item.id} {...item}></GiftItem>
                    ))
                }
            </div>
        </>
    );
}