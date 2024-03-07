"use client";
import { Stack, Typography } from "@mui/material";
import { fontGrid } from "@mui/material/styles/cssUtils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputBase from "@mui/material/InputBase";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineSharpIcon from "@mui/icons-material/PersonOutlineSharp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
const Header = () => {
  const pathname = usePathname();
  const linkArray = [
    { title: "НҮҮР", href: "/" },
    { title: "ХООЛНЫ ЦЭС", href: "/hoolniTses" },
    { title: "ХҮРГЭЛТИЙН БҮС", href: "/Hurgelt" },
  ];

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
      <Stack direction="row" justifyContent="space-between " padding="120px">
        <Stack direction="row" alignItems="center" gap="20px">
          <Image src="/Vector.png" width={40} height={30} alt="image" />
          <Stack direction="row" gap="20px">
            {linkArray.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{ textDecoration: "none", fontWeight: "bold" }}
                  style={{ color: pathname === item.href ? "green" : "black" }}
                  variant="body1"
                  component="div"
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack alignItems="center" direction="row" gap="15px">
          <Stack
            alignItems="center"
            gap="5px"
            direction="row"
            sx={{
              border: "1px black solid",
              padding: "5px",
              borderRadius: "15px",
            }}
          >
            <SearchOutlinedIcon />
            <InputBase placeholder="Хайх" />
          </Stack>
          <Stack direction="row">
            <ShoppingBasketIcon />
            <Typography>Сагс</Typography>
          </Stack>
          <Stack direction="row">
            <PersonOutlineSharpIcon />
            <Link href="/Login">Нэвтрэх</Link>
          </Stack>
        </Stack>
      </Stack>
      
    </Stack>
  );
};

export default Header;
