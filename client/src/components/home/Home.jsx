
import { Box, Grid } from "@chakra-ui/react";
import { Section } from "./Section";
import { SlideShow } from "./SlideShow";

export const Home = () => {

    return (
        <>
            <Box  p={'20px'} mt={'20px'}>
                <SlideShow />
            </Box>

            <Grid maxW={'1200px'} p={'20px'} m={'20px auto'} gap={'30px'} templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>

                <Section
                    gender={'men'}
                    title={"Men's Products"}
                    path={'/category/men'}
                    img={"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cacb7e977fda43e88809ac1e00f709ef_9366/Runner_Tee_Blue_GC6719_21_model.jpg"}
                />

                <Section
                    gender={'women'}
                    title={"Women's Products"}
                    path={'/category/women'}
                    img={"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d596368f54d548c78d45ac5b01835e33_9366/Ultimate_Bra_Blue_GP6781_22_model.jpg"}
                />

                <Section
                    gender={'kids'}
                    title={"Kid's Products"}
                    path={'/category/kids'}
                    img={"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/30689ff7b9e542b6a46faafc00fd26bd_9366/Predator_20_Training_Gloves_Black_FH7294_01_standard.jpg"}
                />

            </Grid>
        </>
    );
};

