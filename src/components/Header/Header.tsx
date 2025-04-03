import { Box, Heading } from "@chakra-ui/react"

export const Header = () =>{
    
    return(
        <>
            <Box background="green" width="100%" padding="5" color="white">
                <Heading as="h1">Список задач</Heading>
            </Box>
        </>
    )
}