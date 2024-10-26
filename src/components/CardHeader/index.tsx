"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";

interface CardProps {
  title: string;
  subTitle: string;
  path: string;
  icon: string;
  color: string;
  subColor?: string;
}

const CustomCard: React.FC<CardProps> = ({
  title,
  subTitle,
  path,
  icon,
  color,
  subColor = "#233dff",
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(path);
  };

  return (
    <Card
      sx={{
        width: 150,
        height: 120,
        backgroundColor: color,
        boxShadow: 3,
        "&:hover": {
          boxShadow: 6,
          cursor: "pointer",
        },
        transition: "box-shadow 0.3s ease-in-out",
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <IconButton color="inherit">
          <Image src={icon} alt="Icon" width={25} height={25} />
        </IconButton>
        <Typography
          style={{ fontSize: 14, color: "#18085d", fontWeight: "700" }}
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="subtitle1" color={subColor}>
          {subTitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
