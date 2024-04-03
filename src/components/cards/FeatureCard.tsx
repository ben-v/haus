import DynamicImageManager from '../../managers/DynamicImageManager';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}
const FeatureCard = (props: FeatureCardProps) => {
  const { title, description, imageUrl } = props;
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12">
      <div className="space-y-12 text-center">
        <img src={imageUrl} className="mx-auto h-14 w-auto" width="512" height="512" alt="burger illustration" />
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <a aria-label="read more" href="#" className="group relative mx-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800">
            {DynamicImageManager.RightArrow()}
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard