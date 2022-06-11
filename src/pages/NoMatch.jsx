import notFound from 'assets/404.PNG';
import Notice from 'components/Notice';

function NoMatch() {
  return <Notice imageURL={notFound} imageAlt="404" content="찾으시는 페이지가 없습니다." />;
}

export default NoMatch;
