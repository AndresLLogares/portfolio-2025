import { Layout, Navbar, ParallaxComponent, Cursor } from '../../components';
import { useWindowScroll } from '@uidotdev/usehooks';

const MainContainer = () => {
  const [{ y }] = useWindowScroll();
  return (
    <Layout>
      <Cursor />
      <Navbar currentScroll={y} />
      <ParallaxComponent />
    </Layout>
  );
};

export default MainContainer;
