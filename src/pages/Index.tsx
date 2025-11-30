import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComeFunzionaSection from "@/components/ComeFunzionaSection";
import TipiBiciSection from "@/components/TipiBiciSection";
import ComeRichiedereSection from "@/components/ComeRichiedereSection";
import DonazioniSection from "@/components/DonazioniSection";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ComeFunzionaSection />
        <TipiBiciSection />
        <ComeRichiedereSection />
        <DonazioniSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
