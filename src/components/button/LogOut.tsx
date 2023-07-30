import { useEffect, useState } from 'react';
import { useTypeDispatch } from '../../hooks/redux';
import { tokenSlice } from '../../store/slice/tokenSlice';
import { logOutSvg } from '../../styles/img/svg';

interface IButton {
  className: string;
}

export const LogOut = ({ className }: IButton) => {
  const { logOut } = tokenSlice.actions;
  const dispatch = useTypeDispatch();

  const [isSmallWindowSize, setIsSmallWindowSize] = useState<boolean>();

  const handleClickLogOut = (): void => {
    dispatch(logOut());
  };

  useEffect(() => {
    window.addEventListener('resize', (e) => {
      if (window.innerWidth > 600) {
        setIsSmallWindowSize(false);
      } else {
        setIsSmallWindowSize(true);
      }
    });
  }, []);

  return (
    <button className={className} onClick={handleClickLogOut}>
      {isSmallWindowSize ? 'Выход' : logOutSvg}
    </button>
  );
};
