import React, { useEffect, useRef } from 'react';
import "./style.css";


interface ImageMagnifierProps {
  imgSrc: string;
  zoom: number;
}

const ImageMagnifier: React.FC<ImageMagnifierProps> = ({ imgSrc, zoom }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const glassRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const img = imgRef.current;
    const glass = glassRef.current;
    if (!img || !glass) return;

    const bw = 3;
    const w = glass.offsetWidth / 2;
    const h = glass.offsetHeight / 2;

    const moveMagnifier = (e: MouseEvent | TouchEvent) => {
      e.preventDefault();
      const pos = getCursorPos(e);
      let x = pos.x;
      let y = pos.y;

      if (x > img.width - w / zoom) x = img.width - w / zoom;
      if (x < w / zoom) x = w / zoom;
      if (y > img.height - h / zoom) y = img.height - h / zoom;
      if (y < h / zoom) y = h / zoom;

      glass.style.left = `${x - w}px`;
      glass.style.top = `${y - h}px`;
      glass.style.backgroundPosition = `-${(x * zoom - w + bw)}px -${(y * zoom - h + bw)}px`;
    };

    const getCursorPos = (e: MouseEvent | TouchEvent) => {
      const a = img.getBoundingClientRect();
      let x = ('pageX' in e ? e.pageX : e.touches[0].pageX) - a.left;
      let y = ('pageY' in e ? e.pageY : e.touches[0].pageY) - a.top;
      x -= window.pageXOffset;
      y -= window.pageYOffset;
      return { x, y };
    };

    glass.style.backgroundImage = `url('${img.src}')`;
    glass.style.backgroundRepeat = 'no-repeat';
    glass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;

    glass.addEventListener('mousemove', moveMagnifier);
    img.addEventListener('mousemove', moveMagnifier);
    glass.addEventListener('touchmove', moveMagnifier);
    img.addEventListener('touchmove', moveMagnifier);

    return () => {
      glass.removeEventListener('mousemove', moveMagnifier);
      img.removeEventListener('mousemove', moveMagnifier);
      glass.removeEventListener('touchmove', moveMagnifier);
      img.removeEventListener('touchmove', moveMagnifier);
    };
  }, [zoom]);

  return (
    <div className="img-magnifier-container">
      <img ref={imgRef} src={imgSrc} width="500" height="600" alt="Zoomable" />
      <div ref={glassRef} className="img-magnifier-glass" />
    </div>
  );
};

export default ImageMagnifier;
