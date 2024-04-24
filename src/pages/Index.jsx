import { useState } from "react";
import { Box, Button, Text, VStack, useToast } from "@chakra-ui/react";
import { FaGift } from "react-icons/fa";

const Index = () => {
  const prizes = ["iPhone 13", "iPad Air", "MacBook Pro", "Apple Watch", "AirPods Pro", "Nothing"];
  const [prize, setPrize] = useState("");
  const toast = useToast();

  const handleDraw = () => {
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
  };

  return (
    <VStack spacing={8} p={8}>
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
        <Text fontSize="xl" fontWeight="bold">
          You won: {prize}
        </Text>
      )}
    </VStack>
  );
};

export default Index;
