import { OpenIcon, CloseIcon } from '@/components/Icons';

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
};

export const ToggleButton = ({
  isOpenMenu,
  handleToggleMenu
}: ToggleButtonProps) => {
  const title = isOpenMenu ? 'Fechar' : 'Abrir';

  return (
    <button onClick={handleToggleMenu} title={title}>
      {isOpenMenu ? (
        <CloseIcon size={32} data-testid="close-icon" />
      ) : (
        <OpenIcon size={32} data-testid="open-icon" />
      )}
    </button>
  );
};
