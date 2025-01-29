import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ListInfo from "../../ListInfos";
import { ListItem } from "@/types/Services";
import { CalendarCheck, FolderOpen, ClipboardList, Globe, Wallet } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function InfosLp() {
  const additionalInfoItems: ListItem[] = [
    {
      title: "Prazo de Entrega",
      items: [
        <>
          O prazo estimado para entrega da Landing Page é de{" "}
          <span className="font-semibold">7 dias úteis</span> após a aprovação do orçamento e{" "}
          <span className="font-semibold">envio de todos os materiais necessários</span> pelo cliente.
        </>,
      ],
    },
    {
      title: "Política de Pagamento",
      items: [
        <>
          <span className="font-semibold">Pacote Básico + Adicionais:</span> 50% do valor total no ato da contratação e 50% restantes na entrega do site.
        </>,
        <>
          <span className="font-semibold">Domínio + Hospedagem:</span> O valor deve ser pago{" "}
          <span className="font-semibold">integralmente no início do projeto.</span>
        </>,
        "O valor final será calculado somando o pacote básico e os serviços adicionais escolhidos.",
      ],
    },
    {
      title: "Hospedagem e Domínio",
      items: [
        "O valor para períodos de domínio e/ou de hospedagem superiores a 1 ano será ajustado com base na necessidade do cliente. Consulte para mais detalhes.",
        <>
          <span className="font-semibold">Hospedagem VPS:</span> Necessária para o painel administrativo (Strapi). Inclui hospedagem VPS por 1 ano.
        </>,
      ],
    },
    {
      title: "Garantia e Suporte",
      items: [
        "É oferecido suporte técnico e manutenção por 1 mês após o lançamento do site. Durante este período, ajustes e correções serão feitos sem custo adicional.",
        "Após o período de garantia, é oferecido manutenção mensal por R$ 100/mês, que inclui atualizações de conteúdo, ajustes de design e otimização contínua de SEO."
      ]
    },
    {
      title: "Processo de Desenvolvimento",
      items: [
        "Uma visão geral de como será conduzido o desenvolvimento do site, garantindo um resultado alinhado às necessidades do projeto.",
        <>
          <CalendarCheck className="inline-block w-5 h-5 text-blue-500 mr-2" />
          <span className="font-semibold">1. Reunião Inicial:</span> Um encontro para entender os objetivos, coletar referências e alinhar expectativas sobre o projeto.
        </>,
        <>
          <FolderOpen className="inline-block w-5 h-5 text-blue-500 mr-2" />
          <span className="font-semibold">2. Documentação e Materiais:</span> Criação de um Google Docs e, se necessário, uma pasta no Google Drive para centralizar todas as informações, como logotipos, textos e contatos.
        </>,
        <>
          <ClipboardList className="inline-block w-5 h-5 text-blue-500 mr-2" />
          <span className="font-semibold">3. Revisão e Ajustes:</span> Após a finalização da primeira versão do site, o cliente poderá sugerir ajustes antes da entrega final.
        </>,
        <>
          <Globe className="inline-block w-5 h-5 text-blue-500 mr-2" />
          <span className="font-semibold">4. Entrega e Acesso:</span> O site será publicado e o cliente receberá acesso ao domínio e à hospedagem. Caso um painel administrativo seja contratado, será realizado um treinamento para seu uso, assim como para o Google Analytics, se necessário.
        </>,
      ],
  
    }
  ];

  const controlsTitulo = useAnimation();
  const controlsIntro = useAnimation();
  const controlsBtn = useAnimation();

  const [refTitulo, inViewTitulo] = useInView();
  const [refIntro, inViewIntro] = useInView();
  const [refBtn, inViewBtn] = useInView();

  useEffect(() => {
    if (inViewTitulo) controlsTitulo.start({ opacity: 1, y: 0 });
    if (inViewIntro) controlsIntro.start({ opacity: 1, y: 0 });
    if (inViewBtn) controlsBtn.start({ opacity: 1, y: 0 });
  }, [
    controlsTitulo,
    controlsIntro,
    inViewTitulo,
    inViewIntro,
    inViewBtn,
    controlsBtn,
  ]);

  return (
    <section className="min-h-screen py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        <motion.h2
          ref={refTitulo}
          initial={{ opacity: 0, y: -100 }}
          animate={controlsTitulo}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900"
        >
          Informações Adicionais
        </motion.h2>

        <ListInfo items={additionalInfoItems} refIntro={refIntro} controlsIntro={controlsIntro} />
      </div>
      <motion.div
          ref={refBtn}
          initial={{ opacity: 0, y: 50 }}
          animate={controlsBtn}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <ScrollLink
            to="precos"
            smooth={true}
            duration={500}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out inline-flex items-center gap-2 cursor-pointer"
          >
            <Wallet className="w-5 h-5" />
            Confira os preços novamente
          </ScrollLink>
        </motion.div>
    </section>
  );
}
