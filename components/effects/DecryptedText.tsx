'use client';

import React, { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
    text: string;
    speed?: number; // ms per frame
    scrambleSpeed?: number; // how often to scramble the remaining text
    className?: string;
    revealDirection?: 'start' | 'end' | 'center'; // Just extra fancy, usually 'start' (left-to-right)
    useOriginalCharsOnly?: boolean; // if true, only scramble using chars present in the text (funky)
    characters?: string;
    animateOnScroll?: boolean;
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';

export default function DecryptedText({
    text,
    speed = 50,
    scrambleSpeed = 30, // Scramble updates every 30ms
    className = '',
    characters = DEFAULT_CHARS,
    animateOnScroll = true,
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const elementRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!animateOnScroll) {
            startAnimation();
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        startAnimation();
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% visible
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated, animateOnScroll]);

    // Reset animation if text changes
    useEffect(() => {
        if (text && hasAnimated) {
            setDisplayText(text);
        }
    }, [text]);

    const startAnimation = () => {
        setIsAnimating(true);
        setHasAnimated(true);

        let iteration = 0;
        const totalIterations = text.length;

        const intervalId = setInterval(() => {
            setDisplayText((prev) => {
                return text
                    .split('')
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        const originalChar = text[index];
                        if (originalChar === ' ' || originalChar === '\n' || originalChar === '\t') {
                            return originalChar;
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('');
            });
            iteration += 1 / (speed / 30);

            if (iteration >= text.length) {
                clearInterval(intervalId);
                setDisplayText(text);
                setIsAnimating(false);
            }
        }, scrambleSpeed);
    };

    return (
        <span ref={elementRef} className={className}>
            {displayText}
        </span>
    );
}
