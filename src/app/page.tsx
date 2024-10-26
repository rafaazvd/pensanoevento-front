"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import CustomCard from "../components/CardHeader";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Menu } from "@mui/icons-material";
import Image from "next/image";
import SearchComponent from "../components/SearchComponent";
import CarroselComponent from "../components/CarroselComponent";
import CarroselComponentMobile from "../components/CarroselMobileComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography } from "@mui/material";
import EventCard from "@/components/CardEvent";
import CardHypeEvent from "@/components/CardHypeEvent";
import Slider from "react-slick";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

const fakeEvents = [
  {
    id: "212",
    image:
      "https://www.pensanoevento.com.br/images/banners/670ec6ab26c72_67083d5840e12_capa.jpg",
    link: "https://www.pensanoevento.com.br/ads/?id=916",
  },
  {
    id: "2122",
    image:
      "https://www.pensanoevento.com.br/images/banners/66ffe41988c27_WhatsApp%20Image%202024-10-04%20at%2009.29.17.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=896",
  },
  {
    id: "21242",
    image:
      "https://www.pensanoevento.com.br/images/banners/66fece533f11a_Banner%20Bosque.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=899",
  },
  {
    id: "212542",
    image:
      "https://www.pensanoevento.com.br/images/banners/66f5ac1e41e4b_FloripaJazz_BannerDestaqueSite.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=914",
  },
  {
    id: "2125342",
    image:
      "https://www.pensanoevento.com.br/images/banners/66c3ff268b432_66be56fcb1d2d_capa.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "212534121",
    image:
      "https://www.pensanoevento.com.br/images/banners/66c62b7b03b20_Reveillons2025_BannerDestaque_Site.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "2125314211",
    image:
      "https://www.pensanoevento.com.br/images/banners/66c62b7b03b20_Reveillons2025_BannerDestaque_Site.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "2125111342111",
    image:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66f43aad1423e_capa.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "212",
    image:
      "https://www.pensanoevento.com.br/images/banners/66c6016bb4c8d_Banner_MenosEMaisJoinville.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "2111122",
    image:
      "https://www.pensanoevento.com.br/images/banners/66c8e90711980_WhatsApp%20Image%202024-08-23%20at%2011.27.20.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "21111242",
    image:
      "https://www.pensanoevento.com.br/images/banners/66be3b3061228_bannerribeirao_rancho.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
  {
    id: "21251142",
    image:
      "https://www.pensanoevento.com.br/images/banners/66be3b4d55707_bannercoqueiros_rancho.jpg",

    link: "https://www.pensanoevento.com.br/ads/?id=904",
  },
];
const eventsMock = [
  {
    title: "Festa A Fantasia c/ dj PETROSKI",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 1",
    location: " Like Music Club",
    id: "1772755272",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66e4e4c08f756_logo.jpg",
    link: "https://www.pensanoevento.com.br/eventos/67671/festa-a-fantasia-c-dj-petroski",
  },
  {
    title: "B Day 3 Anos - Movimenta e Baguncinha",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 2",
    location: "Bless Eventos",
    id: "1772447272",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66f5ccafbf620_capa.jpg",
    link: "https://www.pensanoevento.com.br/baladas/67512/b-day-3-anos-movimenta-e-baguncinha",
  },
  {
    title: "Lets Growl - 4 Anos",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 2",
    location: "Buffet du Batel",
    id: "17723337272",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66b270c40cc8e_capa.jpg",
    link: "https://www.pensanoevento.com.br/baladas/65826/lets-growl-4-anos",
  },
  {
    title: "Churrasquinho Com Menos É Mais",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 2",
    location: "Buffet du Batel",
    id: "171727272",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66b61fca6af0f_capa.jpg",
    link: "https://www.pensanoevento.com.br/shows/65921/churrasquinho-com-menos-e-mais",
  },
  {
    title: "FUNK A FANTASIA HALLOWEEN - DJ BRUM - DJ LW ",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 2",
    location: "Buffet du Batel",
    id: "1772227272",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/6716c2ec794ce_capa.jpg",
    link: "https://www.pensanoevento.com.br/shows/60801/funk-a-fantasia-halloween-dj-brum-dj-lw-dj-leozin-do-sf-dj-caza-dj-arnoni",
  },
  {
    title: "Fantasy Party Eebimt 2o Edição",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 2",
    location: "Buffet du Batel",
    id: "177272272",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66f18f7e3b9bc_capa.jpg",
    link: "https://www.pensanoevento.com.br/baladas/68004/fantasy-party-eebimt-2o-edicao",
  },
  {
    title: "Lets Growl - 4 Anos",
    date: "HOJE a partir das 21:00h",
    description: "Description for Event 2",
    location: "Buffet du Batel",
    id: "1",
    banner:
      "https://pensanoevento.s3.sa-east-1.amazonaws.com/images/eventos/66d5aea2bb5bc_capa.png",
    link: "https://www.pensanoevento.com.br/eventos/67120/arrocha-sofrencia",
  },
];
const partnersMock = [
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/ArenaOpus.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/Bosque281.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/LasVegas.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/Duplex48.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/ElCoyote.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/HipHopDeRaiz.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/Casarao318.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/TocaDoTatu.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/DropFloripa.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/TajAgencia.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/Patagonia.png",
  },
  {
    logoUri:
      "https://www.pensanoevento.com.br/conheca/img/clientes/ElCoyote.png",
  },
];

const isMobileDevice = (userAgent: string): boolean => {
  return /Mobi|Android/i.test(userAgent);
};

interface IHeadProps {
  token?: string;
  stylesProps?: { [key: string]: string | number };
}

const HeaderMobile = ({ stylesProps }: IHeadProps) => {
  return (
    <Box sx={{ display: "flex", ...stylesProps }}>
      <SideBar />
    </Box>
  );
};

const MainComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef<Slider | null>(null);
  const sliderRef2 = useRef<Slider | null>(null);
  const [isViewSideBar, setIsViewSideBar] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
      if (sliderRef2.current) {
        sliderRef2.current.slickNext();
      }
    }, 900);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera; // eslint-disable-line
    setIsMobile(isMobileDevice(userAgent));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  const settingsMobile = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const settingsParteners = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };

  if (isMobile) {
    return (
      <>
        <div style={{ backgroundColor: "#fff", height: "100%" }}>
          {/* <Header /> */}
          <Box
            sx={{
              width: "100%",
              height: "300px",
              backgroundImage: "url(/designs/banner-home.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "20px",
            }}
          >
            <Image src="/logos/logo.png" alt="Logo" width={250} height={270} />
            <div style={{ width: "80%", marginTop: 17 }}>
              <SearchComponent onSearch={(query) => console.log(query)} />
            </div>
          </Box>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ marginTop: "40px", marginBottom: "70px" }}
          >
            <Grid item>
              <CustomCard
                title="AGENDA"
                subTitle="Programe-se"
                path="/path1"
                icon="/designs/agenda-icon.png"
                color="#f0f0f0"
                subColor="#233dff"
              />
            </Grid>
            <Grid item>
              <CustomCard
                title="BALADAS"
                subTitle="Quero agito!"
                path="/path2"
                icon="/designs/party-icon.png"
                color="#f0f0f0"
                subColor="#849bff"
              />
            </Grid>
            <Grid item>
              <CustomCard
                title="SHOWS"
                subTitle="Imperdíveis!"
                path="/path3"
                icon="/designs/show-icon.png"
                color="#f0f0f0"
                subColor="#128f8b"
              />
            </Grid>
            <Grid item>
              <CustomCard
                title="EVENTOS"
                subTitle="Os Melhores!"
                path="/path4"
                icon="/designs/event-icon.png"
                color="#f0f0f0"
                subColor="#5e9f43"
              />
            </Grid>
            <Grid item>
              <CustomCard
                title="DICAS"
                subTitle="Confere aí!"
                path="/path4"
                icon="/designs/tip-icon.png"
                color="#f0f0f0"
                subColor="#ff914d"
              />
            </Grid>
            <Grid item>
              <CustomCard
                title="FOTOS"
                subTitle="Click!"
                path="/path4"
                icon="/designs/photos-icon.png"
                color="#f0f0f0"
                subColor="#282120"
              />
            </Grid>
          </Grid>
          <div>
            <CarroselComponentMobile eventsCard={fakeEvents} />
          </div>
          <Box
            sx={{
              width: "100%",
              height: "auto",
              backgroundImage: "url(/designs/banner-feed-auto.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "60px",
              marginBottom: "20px",
              paddingLeft: 1,
              paddingRight: 1,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                width: "150px",
                height: "150px",
                backgroundImage:
                  "url(https://www.pensanoevento.com.br/images/secoes/Agenda_New.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                margin: 1,
                boxShadow: "0px 5px 5px 0px #f7efefaa",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff1a",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0000004f",
                    padding: 12,
                    marginTop: "40%",
                  }}
                >
                  <Typography
                    style={{
                      color: "#ffffffb8",
                      fontSize: 11,
                      fontWeight: "600",
                      fontStyle: "italic",
                    }}
                  >
                    Agenda
                  </Typography>
                  <Typography
                    style={{ color: "#fff", fontSize: 11, fontWeight: "900" }}
                  >
                    CONFIRA A AGENDA DA SEMANA
                  </Typography>
                </div>
              </div>
            </Box>

            <Box
              sx={{
                width: "150px",
                height: "150px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                margin: 1,
                boxShadow: "0px 5px 5px 0px #f7efefaa",
                backgroundImage:
                  "url(https://www.pensanoevento.com.br/images/secoes/FicaDica_2024.jpg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff1a",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0000004f",
                    padding: 12,
                    marginTop: "40%",
                  }}
                >
                  <Typography
                    style={{
                      color: "#ffffffb8",
                      fontSize: 11,
                      fontWeight: "600",
                      fontStyle: "italic",
                    }}
                  >
                    Fica a dica
                  </Typography>
                  <Typography
                    style={{ color: "#fff", fontSize: 11, fontWeight: "900" }}
                  >
                    DICAS DE MÚSICA, SAÚDE, MODA E MUITO
                  </Typography>
                </div>
              </div>
            </Box>

            <Box
              sx={{
                width: "150px",
                height: "150px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                margin: 1,
                boxShadow: "0px 5px 5px 0px #f7efefaa",
                backgroundImage:
                  "url(https://www.pensanoevento.com.br/images/secoes/Conheca_New.jpg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff1a",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0000004f",
                    padding: 12,
                    marginTop: "40%",
                  }}
                >
                  <Typography
                    style={{
                      color: "#ffffffb8",
                      fontSize: 11,
                      fontWeight: "600",
                      fontStyle: "italic",
                    }}
                  >
                    Crie seu evento
                  </Typography>
                  <Typography
                    style={{ color: "#fff", fontSize: 11, fontWeight: "900" }}
                  >
                    CONHEÇA NOSSO SISTEMA!
                  </Typography>
                </div>
              </div>
            </Box>

            <Box
              sx={{
                width: "150px",
                height: "150px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius: 1,
                margin: 1,
                boxShadow: "0px 5px 5px 0px #f7efefaa",
                backgroundImage:
                  "url(https://www.pensanoevento.com.br/images/secoes/Fotos_2024.jpg)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#ffffff1a",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0000004f",
                    padding: 12,
                    marginTop: "40%",
                  }}
                >
                  <Typography
                    style={{
                      color: "#ffffffb8",
                      fontSize: 11,
                      fontWeight: "600",
                      fontStyle: "italic",
                    }}
                  >
                    Fotos
                  </Typography>
                  <Typography
                    style={{ color: "#fff", fontSize: 11, fontWeight: "900" }}
                  >
                    COBERTURA DIS MELHORES EVENTOS
                  </Typography>
                </div>
              </div>
            </Box>
          </Box>

          {/* eventos em alta */}
          <Typography
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              color: "#32363a",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 60,
            }}
          >
            Eventos em alta
          </Typography>
          <Box
            sx={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              padding: 4,
              flexDirection: "row",
              overflowX: "auto",
              whiteSpace: "nowrap", // Garante que os itens não quebrem para a próxima linha
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555",
              },
            }}
          >
            {eventsMock.map((event, index) => (
              <Box key={event.id} sx={{ marginRight: 2 }}>
                <CardHypeEvent {...event} index={index} />
              </Box>
            ))}
          </Box>
          {/* eventos proximos */}

          <Typography
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              color: "#32363a",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 60,
              marginBottom: 40,
            }}
          >
            Próximos Eventos
          </Typography>

          <div
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              padding: 7,
            }}
          >
            <Slider ref={sliderRef} {...settingsMobile}>
              {eventsMock.map((event) => (
                <EventCard key={event.id} {...event} />
              ))}
            </Slider>
          </div>

          {/* parceiros */}

          <Typography
            style={{
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
              textAlign: "center",
              color: "#32363a",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 70,
              marginBottom: 40,
            }}
          >
            Nossos Parceiros
          </Typography>

          <div
            style={{
              width: "100%",
              backgroundColor: "#32363a",
              marginBottom: 80,
            }}
          >
            <Slider ref={sliderRef2} {...settingsParteners}>
              {partnersMock.map((partner) => (
                <div
                  key={partner.logoUri}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src={partner.logoUri}
                    alt="pensanoevento"
                    width={100}
                    height={100}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <Footer />
        </div>
        {isViewSideBar && (
          <HeaderMobile
            stylesProps={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 7,
              height: "auto",
              minHeight: "136vh",
            }}
          />
        )}
        <Menu
          onClick={() => setIsViewSideBar(!isViewSideBar)}
          style={{
            position: "fixed",
            color: "#000000",
            top: 20,
            right: 12,
            fontSize: 40,
          }}
        />
      </>
    );
  }

  return (
    <div style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: "url(/designs/banner-home.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
          marginTop: "50px",
        }}
      >
        <Image src="/logos/logo.png" alt="Logo" width={370} height={370} />
        <div style={{ width: "50%", marginTop: 17 }}>
          <SearchComponent onSearch={(query) => console.log(query)} />
        </div>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "40px", marginBottom: "70px" }}
      >
        <Grid item>
          <CustomCard
            title="AGENDA"
            subTitle="Programe-se"
            path="/path1"
            icon="/designs/agenda-icon.png"
            color="#f0f0f0"
            subColor="#233dff"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="BALADAS"
            subTitle="Quero agito!"
            path="/path2"
            icon="/designs/party-icon.png"
            color="#f0f0f0"
            subColor="#849bff"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="SHOWS"
            subTitle="Imperdíveis!"
            path="/path3"
            icon="/designs/show-icon.png"
            color="#f0f0f0"
            subColor="#128f8b"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="EVENTOS"
            subTitle="Os Melhores!"
            path="/path4"
            icon="/designs/event-icon.png"
            color="#f0f0f0"
            subColor="#5e9f43"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="DICAS"
            subTitle="Confere aí!"
            path="/path4"
            icon="/designs/tip-icon.png"
            color="#f0f0f0"
            subColor="#ff914d"
          />
        </Grid>
        <Grid item>
          <CustomCard
            title="FOTOS"
            subTitle="Click!"
            path="/path4"
            icon="/designs/photos-icon.png"
            color="#f0f0f0"
            subColor="#282120"
          />
        </Grid>
      </Grid>
      <div>
        <CarroselComponent eventsCard={fakeEvents} />
      </div>
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: "url(/designs/banner-feed-auto.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "60px",
          marginBottom: "20px",
          paddingLeft: 22,
          paddingRight: 22,
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "200px",
            backgroundImage:
              "url(https://www.pensanoevento.com.br/images/secoes/Agenda_New.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
            borderRadius: 7,
            boxShadow: "0px 10px 10px 0px #f7efefaa",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff1a",
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#0000004f",
                padding: 12,
                marginTop: "40%",
              }}
            >
              <Typography
                style={{
                  color: "#ffffffb8",
                  fontSize: 14,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Agenda
              </Typography>
              <Typography
                style={{ color: "#fff", fontSize: 14, fontWeight: "900" }}
              >
                CONFIRA A AGENDA DA SEMANA
              </Typography>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: 7,
            boxShadow: "0px 10px 10px 0px #f7efefaa",
            backgroundImage:
              "url(https://www.pensanoevento.com.br/images/secoes/FicaDica_2024.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff1a",
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#0000004f",
                padding: 12,
                marginTop: "40%",
              }}
            >
              <Typography
                style={{
                  color: "#ffffffb8",
                  fontSize: 14,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Fica a dica
              </Typography>
              <Typography
                style={{ color: "#fff", fontSize: 14, fontWeight: "900" }}
              >
                DICAS DE MÚSICA, SAÚDE, MODA E MUITO
              </Typography>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: 7,
            boxShadow: "0px 10px 10px 0px #f7efefaa",
            backgroundImage:
              "url(https://www.pensanoevento.com.br/images/secoes/Conheca_New.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff1a",
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#0000004f",
                padding: 12,
                marginTop: "40%",
              }}
            >
              <Typography
                style={{
                  color: "#ffffffb8",
                  fontSize: 14,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Crie seu evento
              </Typography>
              <Typography
                style={{ color: "#fff", fontSize: 14, fontWeight: "900" }}
              >
                CONHEÇA NOSSO SISTEMA!
              </Typography>
            </div>
          </div>
        </Box>

        <Box
          sx={{
            width: "200px",
            height: "200px",
            borderRadius: 7,
            boxShadow: "0px 10px 10px 0px #f7efefaa",
            backgroundImage:
              "url(https://www.pensanoevento.com.br/images/secoes/Fotos_2024.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#ffffff1a",
              borderRadius: 28,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#0000004f",
                padding: 12,
                marginTop: "40%",
              }}
            >
              <Typography
                style={{
                  color: "#ffffffb8",
                  fontSize: 14,
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Fotos
              </Typography>
              <Typography
                style={{ color: "#fff", fontSize: 14, fontWeight: "900" }}
              >
                COBERTURA DIS MELHORES EVENTOS
              </Typography>
            </div>
          </div>
        </Box>
      </Box>

      {/* eventos em alta */}
      <Typography
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          color: "#32363a",
          fontSize: 33,
          fontWeight: "bold",
          marginTop: 60,
        }}
      >
        Eventos em alta
      </Typography>
      <Box
        sx={{
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          padding: 7,
          flexDirection: "row",
          overflowX: "auto",
          whiteSpace: "nowrap", // Garante que os itens não quebrem para a próxima linha
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#888",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#555",
          },
        }}
      >
        {eventsMock.map((event, index) => (
          <Box key={event.id} sx={{ marginRight: 2 }}>
            <CardHypeEvent {...event} index={index} />
          </Box>
        ))}
      </Box>
      {/* eventos proximos */}

      <Typography
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          color: "#32363a",
          fontSize: 33,
          fontWeight: "bold",
          marginTop: 60,
          marginBottom: 40,
        }}
      >
        Próximos Eventos
      </Typography>

      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 7,
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {eventsMock.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </Slider>
      </div>

      {/* parceiros */}

      <Typography
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          color: "#32363a",
          fontSize: 33,
          fontWeight: "bold",
          marginTop: 70,
          marginBottom: 40,
        }}
      >
        Nossos Parceiros
      </Typography>

      <div
        style={{
          width: "100%",
          backgroundColor: "#32363a",
          marginBottom: 80,
        }}
      >
        <Slider ref={sliderRef2} {...settingsParteners}>
          {partnersMock.map((partner) => (
            <div
              key={partner.logoUri}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={partner.logoUri}
                alt="pensanoevento"
                width={120}
                height={120}
              />
            </div>
          ))}
        </Slider>
      </div>

      <Footer />
    </div>
  );
};

export default MainComponent;
