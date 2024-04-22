import PageContainer from "../../components/layouts/PageContainer";
import WorkRequestFormSection from "./sections/WorkRequestFormSection";

const WorkRequestPage2 = () => {
  return (
    <PageContainer
      id="work-request-2"
      titlePartA="New"
      titlePartB=" Work Request"
      description="Some text"
      columnA={<WorkRequestFormSection />} />
  )
}

export default WorkRequestPage2