'use client';

import useAllProducts from '@/hooks/useAllProducts';
import { HomeDiv } from './page.styles';
import { Title } from './../globalStyles/globalStyles';

const Home = () => {
  const products = useAllProducts();
  console.log(products);

  return (
    <HomeDiv>
      <Title>Hello</Title>
    </HomeDiv>
  );
};

export default Home;
