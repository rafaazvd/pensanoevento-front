import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import DirectionsIcon from "@mui/icons-material/Directions";

interface ICard {
  title: string;
  date: string;
  description: string;
  location: string;
  id: string;
  banner: string;
  link: string;
  index: number;
}

const CardHypeEvent: React.FC<ICard> = ({
  title,
  date,
  location,
  banner,
  link,
  index,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Card
      sx={{
        position: "relative",
        maxWidth: 345,
        maxHeight: 410,
        borderRadius: "12px",
        boxShadow: 3,
        display: "flex",
        flexDirection: "row",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
      onClick={handleClick} // Adicionando o onClick
    >
      <CardMedia
        component="img"
        height="100%"
        width="70"
        style={{
          maxHeight: "160px",
          minHeight: "160px",
          maxWidth: "120px",
          minWidth: "120px",
        }}
        image={banner}
        alt={title}
        sx={{ borderRadius: "12px 12px 0 0" }}
      />
      <CardContent
        style={{
          maxHeight: "120px",
          minHeight: "120px",
          maxWidth: "220px",
          minWidth: "220px",
        }}
      >
        <Typography
          gutterBottom
          style={{
            fontSize: "12px",
            fontWeight: "bold",
          }}
          component="div"
        >
          {title}
        </Typography>
        <Typography style={{ fontSize: 12 }} color="text.secondary">
          {date}
        </Typography>
        <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
          <ConfirmationNumberIcon sx={{ mr: 1, color: "#32363a" }} />
          <Typography style={{ fontSize: 12 }} color="text.secondary">
            {location}
          </Typography>
        </Box>
        <Box sx={{ mt: 1, display: "flex", alignItems: "center" }}>
          <DirectionsIcon sx={{ mr: 1, color: "#32363a" }} />
          <Typography style={{ fontSize: 12 }} color="text.secondary">
            Como chegar
          </Typography>
        </Box>
      </CardContent>
      <Typography
        style={{
          position: "absolute",
          top: 0,
          backgroundColor: "#32363a",
          color: "#fff",
          fontSize: 18,
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          height: "60px",
        }}
      >
        {index + 1}
      </Typography>
    </Card>
  );
};

export default CardHypeEvent;
