import { Box } from "@mui/material";
import Image from "next/image";

export default function HeroSection({}) {
  return (
    <Box sx={{
      width: "100%",
      height: "100lvh"
    }}>
      <Image src="/img/HeroSection.jpg" fill/>
    </Box>
  )
} 