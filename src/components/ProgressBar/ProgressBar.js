const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 25,
    width: "92%",
    margin: "0 auto",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };

  const labelStyles = {
    paddingRight: 10,
    color: "white",
    fontWeight: "bold",
    paddin: "0",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export { ProgressBar };
