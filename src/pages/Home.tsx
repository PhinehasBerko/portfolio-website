import Container from "../components/Container";

const Home = () => {
  return (
    <Container className="flex flex-row gap-5">
      <div>
        <h2 className="text-4xl font-poppins font-bold">Phinehas Berko</h2>
        <p>I'm a </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae eum,
          explicabo eveniet perferendis provident asperiores, voluptatem, quidem
          corporis totam tempore error placeat rem vero. Laudantium ipsum
          accusamus ipsam provident! Officiis.
        </p>
        <div className="">
          <button className="">Download CV</button>
          <ul>
            <li>GitHub</li>
            <li>Linkldn</li>
            <li>Youtube</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
      <div className="w- h-40 overflow-hidden rounded-full">
        <img
          className=" border-green-300 border-2 w-full h-full object-cover"
          src="src/assets/Phinehas-removebg-preview.jpg"
          alt="Hero Picture"
        />
      </div>
    </Container>
  );
};

export default Home;
