import RoundCornerContainer from '../containers/RoundCornerContainer';

export interface TestamonialCardProps {
    reviewerName: string;
    reviewText: string;
    avatarType: "male1" | "female1" | "male2" | "female2" | "male3" | "female3";
    stars: 1 | 2 | 3 | 4 | 5;
    maxStars: 3 | 5 | 10;
    source: "Google" | "Facebook" | "Yelp";
    sourceUrl: string;
}

const TestamonialCard = (props: TestamonialCardProps) => {
  
  return (
    <RoundCornerContainer>
        {props.reviewerName}
    </RoundCornerContainer>
  );
};

export default TestamonialCard;
