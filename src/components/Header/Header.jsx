import { AppBar, Container, Typography, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

let pages = ["association", "projects", "contact"];

export default function Header({}) {
  return (
    <AppBar
      sx={{
        position: "relative",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Link href="\" ><Typography variant="smallTitle">Duke</Typography></Link>
        <ul style={{ display: "flex", justifyContent: "space-between",  width: "50%" }}>
          {pages.map((page) => (
            <li key={page}>
              <Link href={`.\\${page}`}>
                <Typography variant="normalBody" sx={{ textAlign: "center" }}>
                  {page.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                    return g1.toUpperCase() + g2.toLowerCase();
                  })}
                </Typography>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </AppBar>
  );
}
