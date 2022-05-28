import * as S from '@components/Footer/Footer.style';
import { CompanyInfoType } from '@components/Footer/constants';

type InfoType = {
  info: CompanyInfoType;
};

const CompanyInfo = ({ info }: InfoType) => {
  return <S.CompanyInfo>{info.title}</S.CompanyInfo>;
};

export default CompanyInfo;
