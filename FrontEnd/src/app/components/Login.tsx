"use client";
import * as React from "react";
import { useColorScheme, CssVarsProvider } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import CssBaseline from "@mui/joy/CssBaseline";
import Typography from "@mui/joy/Typography";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Link from "@mui/joy/Link";
import { Stack } from "@mui/material";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Button
      variant="soft"
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? "Turn dark" : "Turn light"}
    </Button>
  );
}

export default function LoginFinal() {
  return (
    <CssVarsProvider>
      <main>
        <ModeToggle />
        <CssBaseline />
        <Sheet
          sx={{
            width: 400,
            mx: "auto",
            my: 4,
            py: 3,
            px: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
            boxShadow: "md",
            height: 500,
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Нэвтрэх</b>
            </Typography>
          </div>
          <FormControl>
            <FormLabel>Имэйл</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Имэйл хаягаа оруулна уу"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Нууц үг</FormLabel>
            <Input name="password" type="password" placeholder="Нууц үг" />
          </FormControl>
          <FormControl sx={{ justifyContent: "right" }}>
            <FormLabel>Нууц үг сэргээх</FormLabel>
          </FormControl>
          <Stack
            sx={{
              mt: 1,
              background: "green",
              color: "white",
              fontWeight: "bold",
              alignItems: "center",
              py: 2,
              borderRadius: "10px",
            }}
          >
            Нэвтрэх
          </Stack>
          <Stack alignItems="center">Эсвэл</Stack>
          <Stack
            sx={{
              mt: 1,
              color: "green",
              fontWeight: "bold",
              alignItems: "center",
              py: 2,
              borderRadius: "10px",
              border: "1px solid green",
            }}
          >
            Бүртгүүлэх
          </Stack>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
