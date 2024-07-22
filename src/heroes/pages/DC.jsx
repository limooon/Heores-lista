import HeroList from "../components/heroList"

const DC = () => {
  return (
    <>
       <div className="text-center ">
        <h2 className="text-3xl text-white mb-10">DC</h2>
        <HeroList publisher= 'DC Comics'/>
       </div>
        
     </>
  )
}

export default DC