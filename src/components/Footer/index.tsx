import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#32363a",
        color: "#fff",
        padding: "20px",
        fontSize: "12px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          fontSize: "12px",
        }}
      >
        <Box sx={{ flex: "6 2 300px", marginBottom: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Sobre Nós
          </Typography>
          <Typography variant="body2" paragraph>
            Sobre o PensaNoEvento
          </Typography>
          <Typography variant="body2" paragraph>
            E aí, já pensou o que fazer hoje? Somos uma ferramenta digital para
            facilitar sua vida. Isso mesmo!
          </Typography>
          <Typography variant="body2" paragraph>
            Plataforma inteligente 100% web para o gerenciamento de vendas e
            inscrições online, controle e pagamento de reservas, filas e listas
            de espera, sistema RSVP, promoters, captação de leads, divulgação,
            ideal para gestão de eventos em geral, casas noturnas, teatros,
            workshops, bares, restaurantes, aniversários e formaturas!
          </Typography>
          <Typography variant="body2" paragraph>
            Disponível em qualquer dispositivo em tempo real e totalmente
            adaptável à sua necessidade.
          </Typography>
          <Typography variant="body2" paragraph>
            #pensanoevento
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 300px", marginBottom: "20px", marginLeft: 5 }}>
          <Typography variant="h6" gutterBottom>
            Informações da Empresa
          </Typography>
          <Typography style={{ fontSize: 10 }} paragraph>
            PENSA ENTRETENIMENTO LTDA.
          </Typography>
          <Typography style={{ fontSize: 10 }} paragraph>
            CNPJ: 20.334.894/0001-63
          </Typography>
          <Typography style={{ fontSize: 10 }} paragraph>
            Endereço: Av. Marechal Castelo Branco, 65 - Sala 1101 Torre A
            Campinas - São José/SC - 88.101-020
          </Typography>
        </Box>

        <Box sx={{ flex: "1 1 300px", marginBottom: "20px", marginLeft: 5 }}>
          <Typography variant="h6" gutterBottom>
            Links Rápidos
          </Typography>
          <Link href="#" color="inherit" underline="hover">
            Meu Perfil
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Termos e Políticas
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Fale Conosco
          </Link>

          <Image
            style={{ marginBottom: "22px" }}
            src="https://shield.sitelock.com/shield/www.pensanoevento.com.br"
            alt="Logo"
            width={130}
            height={130}
          />
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginBottom: "20px", textAlign: "center" }}>
          <Image src="/logos/logo.png" alt="Logo" width={170} height={170} />
        </Box>
        <Typography variant="body2">© 2024 PENSANOEVENTO</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
