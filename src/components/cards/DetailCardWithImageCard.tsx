import { ReactNode } from 'react';
import RounderCornerContainer from '../containers/RounderCornerContainer';

export interface DetailCardWithImageCardProps {
  detailCard: ReactNode;
  imageCard: ReactNode;
}

const DetailCardWithImageCard = (props: DetailCardWithImageCardProps) => {
  
  return (
    <div className="relative">
      <div className="absolute inset-0 -bottom-20 mx-auto mt-auto h-[50rem] w-[68rem] rounded-full bg-secondaryLight/50 blur-3xl dark:bg-secondary/40 md:m-auto"></div>
      <div className="m-auto items-center justify-center -space-y-4 md:flex md:space-y-0 md:-space-x-1">
        <div className="relative mx-4 rounded-3xl rounded-b-none border border-gray-700 bg-gray-800 shadow-2xl shadow-gray-600/10 dark:border-gray-100 dark:bg-white dark:shadow-none md:mx-0 md:w-6/12 md:rounded-r-none md:rounded-l-3xl lg:w-7/12">
            <div className="relative p-6 pt-16 md:rounded-r-2xl md:p-2 md:pl-9 lg:p-16 lg:pl-[4.375rem]">
              {props.detailCard}
            </div>
          </div>
        <RounderCornerContainer width="Fixed" useGradientBackground={false}>
          {props.imageCard}
        </RounderCornerContainer>
      </div>
    </div>
  );
};

export default DetailCardWithImageCard;
