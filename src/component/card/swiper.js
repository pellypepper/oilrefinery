import React, { useState } from 'react';
import MyCard from './card'; // Import the MyCard component
import './swiper.css';

const SwipeableCardWrapper = ({ cardData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleTouchStart = (e) => {
        // Check if the screen width is less than or equal to 768 pixels
        if (window.innerWidth <= 768) {
            const touchStartX = e.touches[0].clientX;

            const handleTouchMove = (e) => {
                const touchEndX = e.touches[0].clientX;
                const diff = touchStartX - touchEndX;

                // Swipe left
                if (diff > 50) {
                    nextCard();
                    removeTouchEvent();
                }

                // Swipe right
                else if (diff < -50) {
                    prevCard();
                    removeTouchEvent();
                }
            };

            const removeTouchEvent = () => {
                document.removeEventListener('touchmove', handleTouchMove);
                document.removeEventListener('touchend', removeTouchEvent);
            };

            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', removeTouchEvent);
        }
    };

    const nextCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex < cardData.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    return (
        <div className="swipeable-card-container" onTouchStart={handleTouchStart}>
            <MyCard
                img={cardData[currentIndex].img}
                name={cardData[currentIndex].name}
                content={cardData[currentIndex].content}
            />
        </div>
    );
};

export default SwipeableCardWrapper;
