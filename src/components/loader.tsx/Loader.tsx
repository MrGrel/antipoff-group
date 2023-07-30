import './loader.scss';

interface IButton {
  isPurple: boolean;
}

export const Loader = ({ isPurple }: IButton) => {
  const className = isPurple ? 'loader-purple' : 'loader';

  return <span className={className}></span>;
};
