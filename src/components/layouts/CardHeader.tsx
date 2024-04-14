export interface CardHeaderProps {
    title: string,
}

const CardHeader = (props: CardHeaderProps) => {
    return (
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{props.title}</h2>
    )
  }
  
  export default CardHeader