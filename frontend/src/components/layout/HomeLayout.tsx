import Header from '@/components/layout/header/Header';
import Nav from '@/components/layout/nav/Nav';
import SideMenu from '@/components/others/SideBoxes/SideMenu/SideMenu';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className="interactive_boxes">
        <SideMenu />
      </div>
    </>
  );
};

export default HomeLayout;
