/* eslint-disable max-len */
import { LPServiceType, Service } from "../types/Services";

const suporteTecnico =
  "Suporte técnico gratuito por 1 mês para ajustes e melhorias";
const whatsappButtonText = "Contratar no WhatsApp";

export const servicesList: Service[] = [
  {
    name: "Landing Page",
    idealFor:
      "Ideal para profissionais autônomos, pequenos negócios, freelancers e empreendedores que desejam aumentar sua presença online, divulgar serviços, capturar leads ou promover um produto específico. Este site é uma página única, projetada para oferecer uma experiência direta e eficiente, concentrando todas as informações essenciais em um só lugar.",
    includes: [
      "Compra e configuração do domínio e hospedagem, conforme as necessidades do cliente",
      "Desenvolvimento de uma página web responsiva",
      "Design personalizado alinhado à identidade visual",
      "Otimização básica de SEO para melhor ranqueamento no Google",
      "Configuração de Google Analytics para monitorar acessos",
      "Página otimizada para carregamento rápido",
      "Integração com redes sociais (como links, botões e/ou formulários para perfis e páginas)",
      suporteTecnico,
    ],
    whatsappButton: {
      text: whatsappButtonText,
      url: "https://wa.me/5531998397442?text=Ol%C3%A1%2C%20quero%20contratar%20uma%20landing%20page%20para%20o%20meu%20neg%C3%B3cio.%20Como%20podemos%20come%C3%A7ar%3F",
    },
    deliveryTime: "Estimativa de entrega: 7 dias úteis",
    icon: "🌐",
    additionalInfo:
      "Ideal para destacar seu trabalho com um design moderno e otimizado.",
  },
  {
    name: "Site Institucional",
    idealFor:
      "Ideal para empresas e profissionais, como laboratórios de pesquisa, startups, consultorias e outras organizações, que desejam criar uma presença online sólida e profissional. Este modelo, dividido em várias páginas, é ideal para apresentar sua história, serviços, valores, projetos e informações de contato de forma clara e acessível, permitindo uma navegação mais completa e detalhada, ao contrário das landing pages que são compostas por uma única página. Ele fortalece a credibilidade e facilita a comunicação com clientes e parceiros.",
    includes: [
      "Desenvolvimento de um site institucional responsivo e moderno",
      "Design personalizado de acordo com a identidade visual da empresa",
      'Criação de páginas como "Sobre nós", "Serviços", "Blog", "Contato" e outras conforme necessidade',
      "Otimização básica de SEO para melhorar o ranqueamento nos motores de busca",
      "Integração com Google Analytics para monitoramento de acessos",
      "Configuração de formulários de contato e integração com e-mail",
      suporteTecnico,
    ],
    whatsappButton: {
      text: whatsappButtonText,
      url: "https://wa.me/5531998397442?text=Ol%C3%A1%2C%20quero%20contratar%20um%20site%20institucional%20para%20a%20minha%20empresa.%20Como%20podemos%20come%C3%A7ar%3F",
    },
    deliveryTime: "Estimativa de entrega: 10 dias úteis",
    icon: "🏢",
    additionalInfo:
      "Perfeito para empresas que buscam construir uma imagem profissional e facilitar o contato com clientes e parceiros.",
  },
  {
    name: "E-commerce",
    idealFor:
      "Ideal para empresas e empreendedores que desejam vender seus produtos online, oferecendo uma experiência de compra eficiente e segura. Este modelo é perfeito para quem busca um sistema completo de e-commerce, com funcionalidades para gerenciar produtos, categorias, pagamentos e envios.",
    includes: [
      "Contrato com plataforma de e-commerce (Bagy, Shopify, Nuvemshop, etc.)",
      "Contrato de compra do domínio e hospedagem",
      "Contrato com Correios para envio de produtos",
      "Desenvolvimento web responsivo, otimizado para dispositivos móveis",
      "Otimização básica de SEO para melhor ranqueamento",
      "Configuração do Google Analytics para monitoramento de acessos",
      "Google Ads e Google Shopping para campanhas de marketing",
      "Sacolinha no Instagram (integrado ao e-commerce)",
      "16 templates de e-mail",
      "8 templates de WhatsApp para comunicação com clientes",
      "Automação de mensagens via WhatsApp",
      "Configuração e adição de produtos na loja",
      "Contrato com intermediador de pagamentos e gerenciador de notas fiscais",
      "Certificado digital (adicional, se necessário)",
      suporteTecnico,
    ],
    whatsappButton: {
      text: whatsappButtonText,
      url: "https://wa.me/5531998397442?text=Ol%C3%A1%2C%20quero%20contratar%20um%20e-commerce%20para%20meu%20neg%C3%B3cio.%20Como%20podemos%20come%C3%A7ar%3F",
    },
    deliveryTime: "Estimativa de entrega: 20 a 30 dias úteis",
    icon: "🛒",
    additionalInfo:
      "Ideal para criar uma loja online profissional, com design atraente, facilidade de navegação e integração com os principais sistemas de pagamento.",
  },
  {
    name: "Criação de Chatbot",
    idealFor:
      "Ideal para empresas, lojas virtuais e serviços que desejam automatizar o atendimento ao cliente, oferecer suporte rápido e eficiente, criar FAQs dinâmicos, ou implementar assistentes virtuais para auxiliar em vendas, dúvidas frequentes ou gerenciamento interno.",
    includes: [
      "Desenvolvimento de chatbot personalizado com integração a sistemas em Python ou JavaScript/TypeScript",
      "Configuração de respostas automatizadas para perguntas frequentes (FAQ)",
      "Funcionalidade de assistente virtual para oferecer dicas e recomendações personalizadas sobre produtos da loja, ajudando os clientes em suas escolhas",
      "Suporte a múltiplos idiomas (caso necessário)",
      "Criação de fluxos de conversa interativos e naturais",
      "Integração com APIs externas (ex.: CRMs, sistemas de pagamento, ERPs)",
      "Treinamento inicial para aprendizado de máquina (se aplicável)",
      "Implementação de gatilhos automatizados baseados em interações específicas",
      suporteTecnico,
    ],
    whatsappButton: {
      text: whatsappButtonText,
      url: "https://wa.me/5531998397442?text=Ol%C3%A1%2C%20quero%20contratar%20um%20chatbot%20personalizado.%20Como%20podemos%20come%C3%A7ar%3F",
    },
    deliveryTime: "Estimativa de entrega: Cerca de 7 dias úteis",
    icon: "🤖",
    additionalInfo:
      "O chatbot é projetado para otimizar o atendimento ao cliente, reduzir custos operacionais e aumentar a eficiência, com design flexível para atender às suas necessidades específicas.",
  },
  {
    name: "Suporte Técnico",
    idealFor:
      "Ideal para empresas, profissionais autônomos e lojas que precisam de manutenção, otimização ou suporte técnico contínuo para garantir o funcionamento eficiente de seus sistemas e plataformas digitais.",
    includes: [
      "Resolução de problemas técnicos em sistemas e plataformas existentes",
      "Manutenção e atualização de serviços contratados previamente (Landing Pages, Chatbots, E-commerces, entre outros)",
      "Alteração de imagens, textos ou seções em páginas ou sistemas desenvolvidos",
      "Configuração de ferramentas e integrações adicionais (como APIs, plataformas de pagamento, entre outros)",
      "Monitoramento e diagnóstico de desempenho de sistemas",
      "Configuração de servidores e hospedagem (se aplicável)",
      "Treinamento básico para uso de sistemas e ferramentas digitais",
      "Suporte remoto via chamadas, videoconferências ou mensagens",
      "Relatórios mensais com o resumo das atividades realizadas e sugestões de melhorias",
      "Suporte emergencial para situações críticas ou falhas inesperadas",
    ],
    whatsappButton: {
      text: whatsappButtonText,
      url: "https://wa.me/5531998397442?text=Ol%C3%A1%2C%20preciso%20de%20suporte%20t%C3%A9cnico.%20Como%20podemos%20come%C3%A7ar%3F",
    },
    deliveryTime: "Disponível em planos Mensal, Semestral e Anual",
    icon: "🛠️",
    additionalInfo:
      "O suporte técnico garante que seus sistemas e plataformas estejam sempre atualizados, seguros e funcionando de forma eficiente. Disponível sob demanda ou em contratos contínuos.",
  },
];
