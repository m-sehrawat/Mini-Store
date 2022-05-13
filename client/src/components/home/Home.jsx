
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
                    img={"https://cdn.shopify.com/s/files/1/0882/5946/files/20211031_LLSupply_00161_540x.jpg?v=1636495873"}
                />

                <Section
                    gender={'women'}
                    title={"Women's Products"}
                    path={'/category/women'}
                    img={"https://cdn.shopify.com/s/files/1/0882/5946/files/20211031_LLSupply_00446_540x.jpg?v=1636495899"}
                />

                <Section
                    gender={'kids'}
                    title={"Kid's Products"}
                    path={'/category/kids'}
                    img={"https://cdn.shopify.com/s/files/1/0882/5946/files/20210812_LLSupply_00003_900x.jpg?v=1630285650"}
                />

            </Grid>
        </>
    );
};

