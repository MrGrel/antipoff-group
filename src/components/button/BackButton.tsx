import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { backSvg } from '../../styles/img/svg';

interface IButton {
  className: string;
}

export const BackButton = ({ className }: IButton) => {
  const navigate = useNavigate();
  const [isSmallWindowSize, setIsSmallWindowSize] = useState<boolean>();

  const handleClickNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsSmallWindowSize(false);
    } else {
      setIsSmallWindowSize(true);
    }

    window.addEventListener('resize', (e) => {
      if (window.innerWidth > 600) {
        setIsSmallWindowSize(false);
      } else {
        setIsSmallWindowSize(true);
      }
    });
  }, []);

  return (
    <button className={className} onClick={handleClickNavigate}>
      {!isSmallWindowSize ? 'назад' : backSvg}
    </button>
  );
};
