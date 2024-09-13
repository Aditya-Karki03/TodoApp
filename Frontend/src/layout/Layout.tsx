import { Flex, Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import ContentComp from "../components/Content";

const { Header } = Layout;
export default function LayoutComponent() {
  return (
    <Layout>
      <Header style={{ background: "#000" }}>
        <Flex justify="center" align="center">
          <h1 style={{ color: "#fff", fontSize: "20px" }}>Todo Application</h1>
        </Flex>
      </Header>
      <Content>
        <Flex
          justify="center"
          vertical={true}
          align="center"
          gap={10}
          style={{ marginTop: "20px" }}
        >
          <ContentComp />
        </Flex>
      </Content>
      <Footer>This shall be the footer</Footer>
    </Layout>
  );
}
