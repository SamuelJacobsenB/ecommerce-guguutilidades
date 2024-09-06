import Header from '@/components/layout/header/Header';
import Nav from '@/components/layout/nav/Nav';
import SideMenu from '@/components/others/SideBoxes/SideMenu/SideMenu';
import { SearchType } from '@/types/SearchType';

const HomeLayout = (props: SearchType) => {
  return (
    <>
      <Header
        fixedProducts={props.fixedProducts}
        setProducts={props.setProducts}
      />
      <Nav />
      <div className="interactive_boxes">
        <SideMenu />
      </div>
    </>
  );
};

export default HomeLayout;
