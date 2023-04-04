import * as React from "react";
import Layout from "../components/layout";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <Layout>
      <div className="bg-home"></div>
    </Layout>
  );
};

export default HomePage;
