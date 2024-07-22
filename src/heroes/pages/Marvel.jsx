import HeroList from "../components/heroList";
const Marvel = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="text-3xl text-white mb-10">Marvel</h2>
        <HeroList publisher="Marvel Comics" />
      </div>
    </>
  );
};

export default Marvel;
