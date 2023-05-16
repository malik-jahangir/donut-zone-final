import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ImageBanner from "@/components/ImageBanner";
import Location from "@/components/Location";
import OrderOnline from "@/components/OrderOnline";
import Showcase from "@/components/Showcase";
import SliderImages from "@/components/SliderImages";
import SocialFeed from "@/components/SocialFeed";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <section className="section1">
      <Header />
      <Showcase/>
    </section>
    <section className="section2">
      <SliderImages/>
      <AboutUs/>
    </section>
    <section className="section3">
      <OrderOnline/>
      <ImageBanner/>
    </section>
    <section className="section4">
       <Location/>
      </section>
      <section className="section5">
        <Testimonials/>
      </section>
      <section className="section6">
        <SocialFeed/>
      </section>
      <Footer/>
    </>
  );
}
