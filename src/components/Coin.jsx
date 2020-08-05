import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Chart from "./Chart";

const Coin = () => {
    const [coin, setCoin] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(({data})=>{
            setCoin(data)
            //inserting description here because it contains html and it wont be rendered properly
            //unless we use the .innerHTML method
            document.querySelector(".description").innerHTML = data.description.en;
        }).catch(err => {
            console.log(err);
        })
    }, []);
    
    console.log(coin)
    
    return (
        <div>
            {coin && 
                <div className="coin-page">
                    <h1>{coin.name}</h1>
                    <img className="logo" src={coin.image.large} alt="bitcoin logo"/>
                    <h2 className="current-value">
                        Current Value: 
                        <span className="value"> ${coin["market_data"]["current_price"].usd}</span>
                    </h2>
                    <p className="description"></p>
                </div>
            }
        </div>
    )
}

export default Coin;