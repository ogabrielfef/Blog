import * as S from './styles';

type LayoutProsps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProsps) => {
  return <S.Container>{children}</S.Container>;
};
