interface CardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export default function Card({ name, description, price, image }: CardProps) {
  return (
    <div className="bg-dark-card overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(201,169,98,0.08)]">
      <div className="overflow-hidden h-[200px]">
        {image && (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-heading text-xl font-medium text-white">
            {name}
          </h3>
          <span className="font-heading text-lg font-semibold text-gold">
            {price}
          </span>
        </div>
        <p className="font-body text-[0.8rem] text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
