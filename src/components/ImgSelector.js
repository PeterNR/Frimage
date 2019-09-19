import React, { useState, useEffect } from 'react';
import { async } from 'q';

const ImgSelector = ({friends}) => {
    useEffect(() => {
        fetchImages();
        //console.log('useEffect');
        moveFromQueueToUsed();//move to onclick later
    }, []);

    
    const fetchImages = async () =>{
        const fetchImages = await fetch('https://jsonplaceholder.typicode.com/photos');
        const imageList = await fetchImages.json();
        setCurrentImgIndex(Math.round(Math.random()*imageList.length));
        console.log('length?',Math.round(Math.random()*imageList.length), currentImgIndex);
//        setImageQueue(imageList);
    }

    const moveFromQueueToUsed = async () =>{
        /*const tempImg = Math.round(Math.random()*imageQueue.length);
        setUsedImages(imageQueue[tempImg]);
        setContestingImg(imageQueue[tempImg]);*/
  
    }

    let [currentImgIndex, setCurrentImgIndex] = useState('');

    /*const [currentImg, setCurrentImg] = useState({});
    const [contestingImg, setContestingImg] = useState({});
    const [imageQueue, setImageQueue] = useState([]);
    const [usedImages, setUsedImages] = useState([]);*/
    
    return(
            <div  className='imgSelector'>
                <img alt='img1' src=/*{contestingImg.thumbnailUrl}*/''/>                            
            </div>
    );
}

export default ImgSelector;