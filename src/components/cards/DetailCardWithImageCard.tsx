import { ReactNode } from 'react';

export interface DetailCardWithImageCardProps {
  detailCard: ReactNode;
  imageCard: ReactNode;
  // leftToRight: boolean;
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
        <div className="relative z-10 -mx-2 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 dark:border-gray-700/60 dark:bg-gray-800 dark:shadow-none md:mx-0 md:w-6/12 lg:w-5/12">
          <div className="space-y-6 p-8 sm:p-12">
            {props.imageCard}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCardWithImageCard;
