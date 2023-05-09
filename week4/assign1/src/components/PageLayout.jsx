import Header from "./Header";
const PageLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
