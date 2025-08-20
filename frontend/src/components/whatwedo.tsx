import { CircleDollarSign, Users, HandHelping, ArrowUpRight } from 'lucide-react';

interface CardData {
  title: string;
  description: string;
  logo: React.ReactNode;
  arrowButton: React.ReactNode;
  image?: React.ReactNode[]; // <-- array of React nodes
  caption?: string;
}

const cardItems: CardData[] = [
  {
    title: 'Donasi',
    logo: <CircleDollarSign size={36} className="bg-amber-100 rounded-full p-2" />,
    description:
      'Bantu mereka yang membutuhkan melalui sumbangan tunai atau barang. Setiap kontribusi sangat berarti.',
    image: [
      <img key="bri" src="src/assets/BRI.png" alt="BRI" className="h-6" />,
      <img key="mandiri" src="src/assets/mandiri.png" alt="Mandiri" className="h-6" />,
      <img key="bca" src="src/assets/bca.png" alt="BCA" className="h-6" />,
    ],
    caption: 'Payment options',
    arrowButton: <ArrowUpRight size={16} />,
  },
  {
    title: 'Zakat',
    logo: <HandHelping size={36} className="bg-amber-100 rounded-full p-2" />,
    description:
      'Salurkan zakat Anda dengan mudah dan aman melalui platform kami untuk membantu yang berhak menerimanya.',
    caption: '#ZakatUntukSemua',
    arrowButton: <ArrowUpRight size={16} />,
  },
  {
    title: 'Jadi Relawan',
    logo: <Users size={36} className="bg-amber-100 rounded-full p-2" />,
    description:
      'Gabung sebagai relawan dan ambil bagian langsung dalam kegiatan sosial kami untuk membuat perubahan nyata.',
    caption: 'Bergabung dengan grup kita',
    arrowButton: <ArrowUpRight size={16} />,
  },
];

const WhatWeDo = () => {
  return (
    <main className="bg-white pt-32 pb-24">
      <h3 className="text-center text-[16px] font-medium text-gray-600 bg-green-200 w-fit mx-auto px-4 rounded-md mb-10">
        Apa yang Kita Lakukan
      </h3>

      <h1 className="max-w-5xl mx-auto text-center font-rubik font-extrabold text-[40px] md:text-[60px] text-gray-800 mb-16">
        Memberikan Harapan dan Bantuan selama masa-masa sulit
      </h1>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardItems.map((card, index) => (
          <div
            key={index}
            className="border border-gray-300 shadow-md rounded-4xl p-6 transition duration-300 hover:shadow-xl hover:bg-gradient-to-b hover:from-[antiquewhite] hover:to-white flex flex-col justify-between"
          >
            <div className="mb-20">
              {card.logo}
              <h2 className="text-xl font-semibold mt-4 mb-3">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>

            {card.image && (
              <div className="flex gap-3 mt-4">
                {card.image.map((img, i) => (
                  <span key={i}>{img}</span>
                ))}
              </div>
            )}

            {card.caption && (
              <div className="mt-4 flex items-center justify-between text-sm text-gray-700 font-medium">
                <span>{card.caption}</span>
                {card.arrowButton}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default WhatWeDo;
