const headingStyle = {
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "400",
  paddingBottom: "3rem",
  color: "#ffd43b",
};
function Header() {
  return (
    <div>
      <h1 style={headingStyle}>Fast React pizza co.</h1>
    </div>
  );
}
export default Header;
