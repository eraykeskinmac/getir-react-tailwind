import cardsData from 'api/cards.json';
import { useEffect, useState } from 'react';

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-4 ">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-14 rounded-lg shadow-sm flex flex-col items-center justify-center text-center">
            <img className="h-[150px] w-[150px] mb-6" src={card.image} />
            <h6 className="fo nt-semibold text-lg text-primary-brand-color">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-700">{card.description}</p>
          </div>
        ))}
    </div>
  );
}
