

const DonateCarousel = () => {

interface CardCarousel {
  title: string;
  age?: number;
  description: string;
  image: React.ReactNode; 
}

const cardItems: CardCarousel[] = [
    {
    title: 'Ikram Adi',
    age: 7,
    description:
      'Didiagnosa kanker otak stadium 2',
    image: <img key="bri" src="src/assets/cancer1.jpg" alt="cancer" className="h-30" />,
    },
    {
    title: 'Nayla Mirdad',
    age: 5,
    description:
      'Didiagnosa kanker otak stadium 3',
    image: <img key="bri" src="src/assets/cancer2.jpg" alt="cancer" className="h-30" />,
    },
    {
    title: 'Yayasan yatim',
    description:
      'Anak-anak yang terlantar',
    image: <img key="bri" src="src/assets/cancer2.jpg" alt="cancer" className="h-30" />,
    },
    {
    title: 'Banjir PDAM Maleer',
    description:
      'Banjir besar menghancurkan banyak rumah di maleer',
    image: <img key="bri" src="src/assets/cancer2.jpg" alt="cancer" className="h-30" />,
    },
    {
    title: 'Gedung sekolah Papua',
    description:
      'Kelas yang tidak layak pakai',
    image: <img key="bri" src="src/assets/cancer2.jpg" alt="cancer" className="h-30" />,
    },
    
]

  return (
    <div>DonateCarousel</div>
  )
}

export default DonateCarousel