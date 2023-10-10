import Header from "./Header";

function RootLayout({children, onShowCart}) {
  return (
    <>
      <Header onShowCart={onShowCart} />
      {children}
    </>
  );
}

export default RootLayout;
