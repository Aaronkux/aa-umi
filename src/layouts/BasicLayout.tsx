import React from 'react';
import { Layout } from 'antd';
import styles from './BasicLayout.less';
import Navbar from '@/components/Navbar'

const { Header, Content, Footer } = Layout;

type PropsType = {
  children: React.ReactNode;
};
function BasicLayout({ children }: PropsType) {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <Navbar />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        Design By Aaron
      </Footer>
    </Layout>
  );
}

export default BasicLayout
