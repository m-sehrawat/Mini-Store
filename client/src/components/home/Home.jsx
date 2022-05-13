
import { Box, Grid } from "@chakra-ui/react";
import { Section } from "./Section";
import { SlideShow } from "./SlideShow";

export const Home = () => {

    return (
        <>
            <Box>
                <SlideShow />
            </Box>

            <Grid maxW={'1200px'} p={'20px'} m={'20px auto'} gap={'30px'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>

                <Section
                    gender={'men'}
                    title={"Men's Products"}
                    path={'/category/men'}
                    img={"home/men.png"}
                />

                <Section
                    gender={'women'}
                    title={"Women's Products"}
                    path={'/category/women'}
                    img={"home/women.png"}
                />

                <Section
                    gender={'kids'}
                    title={"Kid's Products"}
                    path={'/category/kids'}
                    img={"home/kids.png"}
                />

            </Grid>
        </>
    );
};

