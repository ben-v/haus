import PageContainer2 from "../../components/layouts/PageContainer2";
import WorkRequestFormSection from "./sections/WorkRequestFormSection";

const WorkRequestPage2 = () => {
  return (
    <PageContainer2
      id="work-request-2"
      titlePartA="New"
      titlePartB=" Work Request"
      description="Some text"
      columnA={<WorkRequestFormSection />} />
  )
}

export default WorkRequestPage2