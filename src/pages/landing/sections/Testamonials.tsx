import TestamonialCard from "../../../components/cards/TestamonialCard"

const Testamonials = () => {

    return (
        <div className="flex flex-col md:flex-row">
        <div className="lg:w-8/12 w-auto p-2">
          <div className="py-2 px-0 md:p-2 w-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl">Client testamonials</h2>
          </div>
          {/* <p className="m-2 md:m-6 lg:mt-12 lg:ml-3 text-gray-600 dark:text-gray-300 text-lg text-center md:text-left">At <span className="font-semibold">HAUS</span> our approach with our clients is first and foremost is to help each and every one of them with their list of projects, big or small. With over over 30 years in high tech, at some of the largest companies in the United States, respectful and considerate communication & collaboration were the foundations of success then and are the foundation of success today on any project...in corporate America or in the home.</p> */}
        </div>
        <TestamonialCard 
          reviewerName="Pam D." 
          avatarType="female1"
          stars={5}
          maxStars={5}
          source="Google"
          sourceUrl="https://g.co/kgs/Ko99H7k"
          reviewText="Ben is a hard worker who also has good suggestions and ideas. He's versatile, thorough and makes things better than new!" />
        <TestamonialCard 
          reviewerName="Liz A." 
          avatarType="female2"
          stars={5}
          maxStars={5}
          source="Google"
          sourceUrl="https://g.co/kgs/7JckZSa"
          reviewText="Ben is creative and came up with a beautiful and practical piece of furniture to support my handcycle! I cant wait to see what he does with some other projects." />
        <TestamonialCard 
          reviewerName="Suzi B." 
          avatarType="female3"
          stars={5}
          maxStars={5}
          source="Google"
          sourceUrl="https://g.co/kgs/RpVU5U3"
          reviewText="HAUS Property Services is very professional and easy to work with. They come by and give you an estimate and everything is done electronically fast and efficiently. Our project was done on time and in budget. The finished product was completed beyond my expectations!" />
        <TestamonialCard 
          reviewerName="Carolyn B." 
          avatarType="female1"
          stars={5}
          maxStars={5}
          source="Google"
          sourceUrl=""
          reviewText="TBD" />
        <TestamonialCard 
          reviewerName="Bryce C." 
          avatarType="male1"
          stars={5}
          maxStars={5}
          source="Google"
          sourceUrl=""
          reviewText="TBD" />
        </div>
    )
}

export default Testamonials
