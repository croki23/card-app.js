import Card from './myComponent/myCard';
import { useState } from 'react';

function App() {
  const [allData, setAllData] = useState([
    
    {
      id: 1,
      firstName: "Loki",
      jobTitle: "God of Mischief",
      image: "https://www.pixel4k.com/wp-content/uploads/2021/07/loki-the-god-of-mischief-poster-4k_1627766721.jpg.webp"
    },
    {
      id: 2,
      firstName: "Loki",
      jobTitle: "God of Stories",
      image: "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg"
    },
    {
      id: 3,
      firstName: "Croki",
      jobTitle: "Glorious Purpose",
      image: "https://images.hdqwalls.com/wallpapers/loki-god-ry.jpg"
    },
    {
      id: 4,
      firstName: "Loki",
      jobTitle: "God of Mischief",
      image: "https://www.pixel4k.com/wp-content/uploads/2021/07/loki-the-god-of-mischief-poster-4k_1627766721.jpg.webp"
    },
    {
      id: 5,
      firstName: "Loki",
      jobTitle: "God of Stories",
      image: "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg"
    },
    {
      id: 6,
      firstName: "Croki",
      jobTitle: "Glorious Purpose",
      image: "https://images.hdqwalls.com/wallpapers/loki-god-ry.jpg"
    },
   

    {
      id: 7,
      firstName: "Loki",
      jobTitle: "God of Mischief",
      image: "https://www.pixel4k.com/wp-content/uploads/2021/07/loki-the-god-of-mischief-poster-4k_1627766721.jpg.webp"
    },
    {
      id: 8,
      firstName: "Loki",
      jobTitle: "God of Stories",
      image: "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg"
    },
    {
      id: 9,
      firstName: "Croki",
      jobTitle: "Glorious Purpose",
      image: "https://images.hdqwalls.com/wallpapers/loki-god-ry.jpg"
    },
    {
      id: 10,
      firstName: "Loki",
      jobTitle: "God of Mischief",
      image: "https://www.pixel4k.com/wp-content/uploads/2021/07/loki-the-god-of-mischief-poster-4k_1627766721.jpg.webp"
    },
    {
      id: 11,
      firstName: "Loki",
      jobTitle: "God of Stories",
      image: "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg"
    },
    {
      id: 12,
      firstName: "Croki",
      jobTitle: "Glorious Purpose",
      image: "https://images.hdqwalls.com/wallpapers/loki-god-ry.jpg"
    },
    {
      id: 13,
      firstName: "Loki",
      jobTitle: "God of Mischief",
      image: "https://www.pixel4k.com/wp-content/uploads/2021/07/loki-the-god-of-mischief-poster-4k_1627766721.jpg.webp"
    },
    {
      id: 14,
      firstName: "Loki",
      jobTitle: "God of Stories",
      image: "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg"
    },
    {
      id: 15,
      firstName: "Croki",
      jobTitle: "Glorious Purpose",
      image: "https://images.hdqwalls.com/wallpapers/loki-god-ry.jpg"
    },
    {
      id: 16,
      firstName: "Loki",
      jobTitle: "God of Mischief",
      image: "https://www.pixel4k.com/wp-content/uploads/2021/07/loki-the-god-of-mischief-poster-4k_1627766721.jpg.webp"
    },
    {
      id: 17,
      firstName: "Loki",
      jobTitle: "God of Stories",
      image: "https://images.hdqwalls.com/wallpapers/loki-season-2-2023-2y.jpg"
    },
    {
      id: 18,
      firstName: "Croki",
      jobTitle: "Glorious Purpose",
      image: "https://images.hdqwalls.com/wallpapers/loki-god-ry.jpg"
    },
  ]);

  return (
    <div>
      <Card datav={allData}/>
    </div>
  );
}

export default App;
