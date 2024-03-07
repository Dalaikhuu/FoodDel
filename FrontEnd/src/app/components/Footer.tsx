"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
 

  const FooterArray = [
    { title: "Нүүр", href: "/" },
    { title: "Холбоо барих ЦЭС", href: "/hoolniTses" },
    { title: "Хоолны цэс", href: "/Hurgelt" },
    { title: "Үйлчилгээний нөхцөл", href: "/Hurgelt" },
    { title: "Хүргэлтийн бүс", href: "/Hurgelt" },
    { title: "Нууцлалын бодлого ", href: "/Hurgelt" },
  ];

  return (
    <Stack>
     
      <Stack
        gap="100px"
        padding="120px"
        alignItems="center"
        sx={{
          backgroundImage: `url('/Footer.png')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "2000px",
          height: "800px",
        }}
      >
        <Stack
          alignItems="center"
          gap="80px"
          sx={{ borderBottom: "2px solid white", paddingBottom: "50px" }}
        >
          <Stack direction="row" gap="10px" color="white" alignItems="center">
            <Image src="/Vector1.png" width={25} height={20} alt="image" />
            <Typography fontSize="20px" sx={{ fontWeight: "bold" }}>
              Food Delivery
            </Typography>
          </Stack>
          <Stack direction="row" gap="200px">
            {FooterArray.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{
                  textDecoration: "none",
                  borderBottom: "2px white solid",
                }}
              >
                <Typography
                  sx={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "white",
                  }}
                  variant="body1"
                  component="div"
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>
          <Stack color="white" direction="row" gap="20px">
            <FacebookOutlinedIcon sx={{ fontSize: "50px" }} />
            <InstagramIcon sx={{ fontSize: "50px" }} />
            <TwitterIcon sx={{ fontSize: "50px" }} />
          </Stack>
        </Stack>
        <Stack alignItems="center" color="white">
          <Typography>© 2024 Pinecone Foods LLC</Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;