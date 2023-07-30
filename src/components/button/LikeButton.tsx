import { useState } from 'react';
import { activeLikeSvg, inActiveLikeSvg } from '../../styles/img/svg';

interface IButton {
  className: string;
}

export const LikeButton = ({ className }: IButton) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsLiked((state) => !state);
  };

  return (
    <button className={className} onClick={handleClick}>
      {isLiked ? activeLikeSvg : inActiveLikeSvg}
    </button>
  );
};
