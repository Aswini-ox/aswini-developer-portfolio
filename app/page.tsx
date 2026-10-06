import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (<><Loader /><Navbar /><main><Hero /><About /><Skills /><Projects /><Experience /><Certificates /><Achievements /><Contact /></main><Footer /></>);
}
