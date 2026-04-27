"use client"
import { useState, useEffect } from 'react';

export default function TextAnimate() {
    const fullText = "Van Quy";
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(200);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                setDisplayText(fullText.substring(0, displayText.length + 1));
                setSpeed(200);

                if (displayText === fullText) {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                setDisplayText(fullText.substring(0, displayText.length - 1));
                setSpeed(100);

                if (displayText === "") {
                    setIsDeleting(false);
                }
            }
        };

        const timer = setTimeout(handleTyping, speed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, speed]);

    return (
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight text-slate-900">
            <span className="block mb-5">Nguyen</span>
            <span className="hero_text-name text-blue-600 inline-block min-w-[3ch]">
                {displayText}
                <span className="animate-pulse border-r-4 border-blue-600 ml-1"></span>
            </span>
        </h1>
    );
}