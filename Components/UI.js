export const Master = (props) => {
  const master = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };
  return <div style={master}>{props.children}</div>;
};
