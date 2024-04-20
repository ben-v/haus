import TestamonialCard, { TestamonialCardProps } from "../../../components/cards/TestamonialCard"
import ContentSection from "../../../components/layouts/ContentSection";
import ContenSectiontHeader from "../../../components/layouts/ContentSectionHeader";

const testamonials: TestamonialCardProps[] = [
  {
    reviewerName: "Pam D.",
    date: "4/14/24",
    stars: 5,
    source: "Google",
    reviewText: "Ben is a hard worker who also has good suggestions and ideas. He's versatile, thorough and makes things better than new!"
  },
  {
    reviewerName: "Liz A.",
    date: "4/14/24",
    stars: 5,
    source: "Google",
    reviewText: "Ben is creative and came up with a beautiful and practical piece of furniture to support my handcycle! I cant wait to see what he does with some other projects.",
  },
  {
    reviewerName: "Suzi B.",
    date: "4/14/24",
    stars: 5,
    source: "Google",
    reviewText: "HAUS Property Services is very professional and easy to work with. They come by and give you an estimate and everything is done electronically fast and efficiently. Our project was done on time and in budget. The finished product was completed beyond my expectations!"
  }
];

const Testamonials = () => {
  return (
    <ContentSection flexDirection="Center">
      <div className="w-auto p-2 md:px-12">
        <ContenSectiontHeader
          title="Building Lasting Relationships"
          titleAlignment="Center"
          description="We pride ourselves on forging lasting relationships based on communication, collaberation and trust with each of our clients. See what they have to say about working with us!"
          descriptionAlignment="Center" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 md:mt-6">
        {testamonials.map((testamonial,) => (
          <div className="flex">
            <TestamonialCard
              reviewerName={testamonial.reviewerName}
              date={testamonial.date}
              stars={testamonial.stars}
              source={testamonial.source}
              reviewText={testamonial.reviewText}
              grow="Fill" />
          </div>
        ))}
      </div>
    </ContentSection>
  )
}

export default Testamonials
