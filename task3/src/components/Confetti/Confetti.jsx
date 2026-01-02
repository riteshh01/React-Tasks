import React from 'react'
import confetti from "canvas-confetti";
import './Confetti.css'

const Confetti = () => {
    confetti({
    particleCount: 250,
    spread: 180,
    origin: { x: 0, y: 0.8 },
    });
    confetti({
    particleCount: 250,
    spread: 180,
    origin: { x: 1, y: 0.8 },
    });
}

export default Confetti