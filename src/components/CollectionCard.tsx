import { useNavigate } from "react-router";

export interface CardProps {
  image: string;
}
export const CollectionCard = ({ image }: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`item-list/:nameItem`); //url friendly
  };
  return (
    <div className="flex items-center justify-center cursor-pointer size-48 bg-indigo-300 text-white mb-1 rounded-3xl">
      <img
        className="w-3/4 h-3/4 object-contain bg-indigo-100 rounded-2xl p-4 hover:p-1 hover:transition-all "
        src={image}
        alt="fossil"
        onClick={handleClick}
      />
    </div>
  );
};
