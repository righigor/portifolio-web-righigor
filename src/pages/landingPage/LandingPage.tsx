import { useParams } from "react-router-dom";
import Header from "../../components/orcamentos/landing-page/Header";
import Description from "../../components/orcamentos/landing-page/Description";
import Precos from "../../components/orcamentos/landing-page/precos-section/Precos";
import Footer from "@/components/orcamentos/footer";
import InfosLp from "@/components/orcamentos/landing-page/infos/Infos";

export default function LandingPage() {
  const { nome } = useParams();

  return (
    <div className="bg-blue-300 text-black">
      <Header nome={nome} />
      <main>
        <Description />
        <Precos />
        <div className="flex items-center justify-center my-8">
          <div className="border-t-2 border-blue-500 w-2/4"></div>
          <div className="mx-4 text-blue-500">♦</div>
          <div className="border-t-2 border-blue-500 w-2/4"></div>
        </div>
        <InfosLp />
      </main>
      <Footer />
    </div>
  );
}
