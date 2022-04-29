import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className="article">
            <div className="article__left">
                <NewspaperIcon />
            </div>
            <div className="article__right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2> LinkedIn News </h2>
                <InfoIcon />
            </div>
            {newsArticle("LIC IPO to open May 4, list on May 17, ","Check details guide to applying here")}
            {newsArticle("2022 Mercedes-Benz C-Class ", "It starts rolling out of assembly line ahead of launch")}
            {newsArticle("Jayawardene reacts to Pant calling back DC's players","Not how things should be manage")}
            {newsArticle("Benedict Cumberbatch to Dua Lipa"," Woman’s incredible food artworks will wow you")}
        </div>
    )
}

export default Widgets