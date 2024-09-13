import Header from '@/components/layout/header/Header';
import AdminNav from '../AdminNav/AdminNav';
import { SearchType } from '@/types/SearchType';
import './AdminMenu.css';

const AdminMenu = (props: SearchType) => {
  return (
    <div>
      <Header
        fixedProducts={props.fixedProducts}
        setProducts={props.setProducts}
      />
      <AdminNav />
    </div>
  );
};

export default AdminMenu;
