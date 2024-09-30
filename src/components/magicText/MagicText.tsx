import React, { useState, useEffect } from 'react';

const MagicText = () => {
    const texts = ["Swift", "SwiftUI", "Kotlin", "Compose", "React-native"];
    const [currentText, setCurrentText] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsVisible(false); // Desvanece el texto actual
            setTimeout(() => {
                setCurrentText((prevText) => (prevText + 1) % texts.length);
                setIsVisible(true);
            }, 1000);
        }, 3000); // Cambia cada 3 segundos

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center">
            <h2 className={`text-6xl font-bold transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} text-orange-400`}>
                {texts[currentText]}
            </h2>
        </div>
    );
};

export default MagicText;

