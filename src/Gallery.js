import React, { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // You can add more info here later
  const images = [
    { url: "/images/WhatsApp Image 2026-06-13 at 8.15.07 PM.jpeg", title: "Class Training" },
    { url: "/images/WhatsApp Image 2026-06-13 at 8.16.44 PM.jpeg", title: "WISHES FROM CM OF PY" },
    { url: "/images/WhatsApp Image 2026-06-13 at 8.16.40 PM.jpeg", title: "Tournament Day" }
  ];

  return (
    <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px' }}>
      <h2>Our Training Gallery</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        {images.map((item, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <img 
              src={item.url} 
              alt={item.title} 
              style={{ width: '300px', height: '200px', objectFit: 'cover', cursor: 'pointer', borderRadius: '10px' }} 
              onClick={() => setSelectedImage(item.url)} 
            />
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{item.title}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Large" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '10px' }} />
        </div>
      )}
    </div>
  );
}