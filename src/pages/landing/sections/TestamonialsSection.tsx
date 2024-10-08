import TestamonialCard, { TestamonialCardProps } from "../../../components/cards/TestamonialCard"
import ContentSectionContainer from "../../../components/containers/ContentSectionContainer";
import ContentSectionHeader from "../../../components/layouts/ContentSectionHeader";
import { SocialPlatforms } from "../../../components/navigation/SocialProfileLink";

const testamonials: TestamonialCardProps[] = [
  {
    reviewerName: "Pam D.",
    date: "4/14/24",
    stars: 5,
    source: SocialPlatforms.GOOGLE,
    reviewText: "Ben is a hard worker who also has good suggestions and ideas. He's versatile, thorough and makes things better than new!"
  },
  {
    reviewerName: "Liz A.",
    date: "4/14/24",
    stars: 5,
    source: SocialPlatforms.GOOGLE,
    reviewText: "Ben is creative and came up with a beautiful and practical piece of furniture to support my handcycle! I cant wait to see what he does with some other projects.",
  },
  {
    reviewerName: "Suzi B.",
    date: "4/14/24",
    stars: 5,
    source: SocialPlatforms.GOOGLE,
    reviewText: "HAUS Property Services is very professional and easy to work with. They come by and give you an estimate and everything is done electronically fast and efficiently. Our project was done on time and in budget. The finished product was completed beyond my expectations!"
  },
  {
    reviewerName: "Carolyn B.",
    date: "6/1/24",
    stars: 5,
    source: SocialPlatforms.GOOGLE,
    reviewText: "I cannot say enough good things about my experience with Haus. From start to finish, Ben was professional, courteous, timely, and efficient. He arrived on time, listened to my needs, and completed the job in a timely manner. Not only did he do excellent work, but he also went above and beyond to ensure that everything was done to my satisfaction. I highly recommend him to anyone in need of a reliable and skilled handyman. Thank you for your exceptional service!"
  }
];

const TestamonialsSection = () => {
  return (
    <ContentSectionContainer flexDirection="Center">
      <div className="w-auto p-2 md:px-12">
        <ContentSectionHeader
          title="What Our Clients Say"
          titleAlignment="Center"
          childrenAlignment="Center">
            We pride ourselves on forging lasting client relationships based on communication, collaboration, and trust.
          </ContentSectionHeader>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
    </ContentSectionContainer>
  )
}

export default TestamonialsSection
