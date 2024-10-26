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
}

const EventCard: React.FC<ICard> = ({
  title,
  date,
  location,
  banner,
  link,
}) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <Card
      sx={{
        maxWidth: 290,
        marginBottom: 1,
        marginTop: 1,
        maxHeight: 400,
        borderRadius: "12px",
        boxShadow: 3,
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
        height="140"
        style={{
          maxHeight: "170px",
          minHeight: "170px",
        }}
        image={banner}
        alt={title}
        sx={{ borderRadius: "12px 12px 0 0" }}
      />
      <CardContent
        style={{
          maxHeight: "190px",
          minHeight: "190px",
        }}
      >
        <Typography
          gutterBottom
          style={{
            fontSize: "16px",
            fontWeight: "bold",
          }}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <ConfirmationNumberIcon sx={{ mr: 1, color: "#32363a" }} />
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </Box>
        <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
          <DirectionsIcon sx={{ mr: 1, color: "#32363a" }} />
          <Typography variant="body2" color="text.secondary">
            Como chegar
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventCard;
