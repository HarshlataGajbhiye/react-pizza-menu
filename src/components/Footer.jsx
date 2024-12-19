const footerBtnStyle = {
  textAlign: "center",
};

const btnStyle = {
  backgroundColor: "yellow",
  border: "None",
  padding: "0.8rem",
  margin: "1rem",
  marginBottom: "5rem",
};
function Footer() {
  return (
    <div style={footerBtnStyle}>
      <p>
        we&apos;e Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Laborum, repudiandae. Sed, sunt veritatis.
      </p>
      <button style={btnStyle}>Order Now</button>
    </div>
  );
}
export default Footer;
