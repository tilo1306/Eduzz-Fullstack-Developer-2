import React from 'react';
import Header from '../Header/Header';
import * as S from './styled';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };
  return (
    <S.WrapperLayout>
      <Header />
      {children}
    </S.WrapperLayout>
  );
};

export default Layout;
