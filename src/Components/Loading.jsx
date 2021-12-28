const Loading = () => {
  const navbarHeight = 62;
  const footerHeight = 252;

  return (
    <div
      style={{
        display: "flex",
        height: `calc(100vh - ${navbarHeight + footerHeight}px)`,
        marginTop: `${navbarHeight}px`,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      Loading...
    </div>
  );
};

export default Loading;
