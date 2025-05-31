'use client';

import React, { useState, useEffect } from 'react';
import './captcha.css';

type ImageItem = {
  src: string;
  isDog: boolean;
};

export default function Captcha() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Load 5 dogs and 4 muffins randomly
    const dogIndices = shuffle(Array.from({ length: 9 }, (_, i) => i + 1)).slice(0, 5);
    const muffinIndices = shuffle(Array.from({ length: 10 }, (_, i) => i + 1)).slice(0, 4);

    const dogImages: ImageItem[] = dogIndices.map(i => ({
      src: `/dogs_and_muffins/dog${i}.png`,
      isDog: true,
    }));

    const muffinImages: ImageItem[] = muffinIndices.map(i => ({
      src: `/dogs_and_muffins/muffin${i}.png`,
      isDog: false,
    }));

    const mixed = shuffle([...dogImages, ...muffinImages]);
    setImages(mixed);
  }, []);

  const toggleSelect = (index: number) => {
    setSelectedIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const verifySelection = () => {
    const allCorrect = selectedIndices.every(i => images[i].isDog) &&
                       images.every((img, i) => !img.isDog || selectedIndices.includes(i));
    setMessage(allCorrect ? '✅ Correct!' : '❌ Try again.');
  };

  return (
    <div className="captcha">
      <h2>Select all dogs:</h2>
      <div className="captcha-images">
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img.src}
              alt="captcha"
              className={selectedIndices.includes(index) ? 'selected' : ''}
              onClick={() => toggleSelect(index)}
            />
          </div>
        ))}
      </div>
      <button className="verify-button" onClick={verifySelection}>Verify</button>
      {message && <p className="result">{message}</p>}
    </div>
  );
}

// Helper function to shuffle an array
function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
