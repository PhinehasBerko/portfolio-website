import Container from "../components/Container";

const Home = () => {
  return (
    <Container className="">
      <div>
        <h2 className="text-4xl font-bold">Phinehas Berko</h2>
        <p>I'm a </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eum,
          explicabo eveniet perferendis provident asperiores, voluptatem, quidem
          corporis totam tempore error placeat rem vero. Laudantium ipsum
          accusamus ipsam provident! Officiis.
        </p>
        <div>
          <button className="">Download CV</button>
          <ul>
            <li>GitHub</li>
            <li>Linkldn</li>
            <li>Youtube</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className="w-[250px] h-[240px] rounded-full   "
          src="src/assets/Phinehas.JPG"
          alt="Hero Picture"
        />
      </div>
    </Container>
  );
};

export default Home;
