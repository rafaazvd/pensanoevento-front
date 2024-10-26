"use client";

import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Mail from "@mui/icons-material/Mail";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        background:
          "linear-gradient(to bottom, #32363a, #32363a, #24272a, #232628, #101317)",

        height: "auto",
        color: "white",
        padding: 2,
      }}
    >
      <Typography
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 40,
        }}
        variant="h6"
        gutterBottom
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={"../logos/logo.png"}
            alt="Logo"
            sx={{ height: 40 }}
          />
        </Box>
      </Typography>
      <Divider sx={{ bgcolor: "#fff", marginBottom: 2 }} />
      <Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            cursor: "pointer",
            marginTop: 4,
            display: "flex",
            flexDirection: "row",
            transition: "color 0.3s",
            paddingBottom: 1,
            "&:hover": {
              border: "solid 1px",
              borderBottomColor: "#7ae2f0",
              color: "#7ae2f0",
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
            },
          }}
        >
          <HomeIcon style={{ marginRight: 6, fontSize: 17 }} />
          Home
        </Typography>
      </Box>

      <Box>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            cursor: "pointer",
            marginTop: 4,
            display: "flex",
            flexDirection: "row",
            transition: "color 0.3s",
            paddingBottom: 1,
            "&:hover": {
              border: "solid 1px",
              borderBottomColor: "#7ae2f0",
              color: "#7ae2f0",
              borderTopColor: "transparent",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
            },
          }}
        >
          <Mail style={{ marginRight: 6, fontSize: 17 }} />
          Fale Conósco
        </Typography>
      </Box>

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

      <Typography
        variant="body1"
        gutterBottom
        sx={{
          cursor: "pointer",
          marginTop: 14,
          transition: "color 0.3s",
          paddingBottom: 1,
          "&:hover": {
            border: "solid 1px",
            borderBottomColor: "#7ae2f0",
            color: "#7ae2f0",
            borderTopColor: "transparent",
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
          },
        }}
        onClick={() => {}}
      >
        <Logout style={{ fontSize: 17, marginRight: 6 }} />
        Sair
      </Typography>
    </Box>
  );
};

export default Sidebar;
