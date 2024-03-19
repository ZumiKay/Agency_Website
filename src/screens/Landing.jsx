// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Aboutus from "../components/Sections/Aboutus";
import StudentPlacement from "../components/Sections/StudentPlacement";
import SummerSchool from "../components/Sections/Summer";
import Consultancy from "../components/Sections/Consultancy";
import StudentAccomendation from "../components/Sections/StudentAccommendation";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <StudentPlacement />
      <SummerSchool />
      <Consultancy />
      <StudentAccomendation />
      <Aboutus />
      <Contact />
      <Footer />
    </>
  );
}
