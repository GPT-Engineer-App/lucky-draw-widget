import { useState } from "react";
import { Box, Button, Text, VStack, useToast, SimpleGrid } from "@chakra-ui/react";
import { FaGift } from "react-icons/fa";

const Index = () => {
  const prizes = ["iPhone 13", "iPad Air", "MacBook Pro", "Apple Watch", "AirPods Pro", "Nothing"];
  const [prize, setPrize] = useState("");
  const [highlightedPrize, setHighlightedPrize] = useState(null);
  const toast = useToast();

  const handleDraw = () => {
    let index = 0;
    const interval = setInterval(() => {
      setHighlightedPrize(prizes[index]);
      index = (index + 1) % prizes.length;
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setPrize(randomPrize);
      toast({
        title: "Congratulations!",
        description: `You won a ${randomPrize}!`,
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }, 2000);
  };

  return (
    <VStack spacing={8} p={8}>
      <Box position="relative" w="300px" h="300px">
        {prizes.map((item, idx) => {
          const angle = (360 / prizes.length) * idx;
          return (
            <Box position="absolute" transform={`rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`} textAlign="center" width="80px" className={highlightedPrize === item ? "highlight-animation" : ""}>
              {item}
            </Box>
          );
        })}
      </Box>
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Lucky Draw Game
        </Text>
        <Text fontSize="lg">Click the button below to draw a prize!</Text>
      </Box>
      <Button leftIcon={<FaGift />} colorScheme="teal" size="lg" onClick={handleDraw}>
        Draw a Prize
      </Button>
      {prize && (
        <Text fontSize="xl" fontWeight="bold" className="prize-animation">
          You won: {prize}
        </Text>
      )}
    </VStack>
  );
};

import "./Index.css";
export default Index;
