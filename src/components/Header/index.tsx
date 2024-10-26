import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useTransition, animated } from "@react-spring/web";

const phrases = [
  { text: "Bem vindo!", style: { color: "#f2785c", fontSize: 22 } },
  {
    text: "Encontre as melhores baladas e shows",
    style: { color: "#60df77", fontSize: 22 },
  },
  { text: "Fotos de vários roles!", style: { color: "#4464f3", fontSize: 22 } },
  {
    text: "Compras de forma prática e rápida",
    style: { color: "#cece43", fontSize: 22 },
  },
];

const Header: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#32363a", color: "#fff" }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 22,
          paddingRight: 22,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/" passHref>
            <IconButton edge="start" color="inherit" aria-label="home">
              <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                Inicio |
              </Typography>
            </IconButton>
          </Link>
          <Link href="/contact" passHref>
            <IconButton color="inherit" aria-label="contact">
              <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                Fale Conosco |
              </Typography>
            </IconButton>
          </Link>
          <Link href="/login" passHref>
            <IconButton color="inherit" aria-label="login">
              <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                Entrar
              </Typography>
            </IconButton>
          </Link>
        </div>

        <div
          style={{
            position: "relative",
            width: "40%",
            height: "100%",
          }}
        >
          {transitions((style, i) => (
            <animated.div
              style={{
                ...style,
                position: "absolute",
                width: "100%",
                textAlign: "center",
                ...phrases[i].style,
              }}
            >
              {phrases[i].text}
            </animated.div>
          ))}
        </div>

        <div>
          <IconButton
            color="inherit"
            aria-label="instagram"
            href="https://www.instagram.com/pensanoeventosistema"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="facebook"
            href="https://www.facebook.com/pensanoevento"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="twitter"
            href="https://x.com/pensanoevento"
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="pinterest"
            href="https://br.pinterest.com/pensanoevento"
            target="_blank"
          >
            <PinterestIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
