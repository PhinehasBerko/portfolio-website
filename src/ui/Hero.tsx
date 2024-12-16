import Container from "../components/Container";

const Hero = () => {
  return (
    <Container>
      <div>Hero Body</div>
      <div>
        <img
          className="h-32 w-32 rounded-3xl"
          src="src/assets/Phinehas.JPG"
          alt="Hero Picture"
        />
      </div>
    </Container>
  );
};

export default Hero;
