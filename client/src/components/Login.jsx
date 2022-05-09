import { Button, Container, Heading, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const Login = () => {

    const [login, setLogin] = useState({ email: "", password: "" });


    const handleChange = ({ target: { name, value } }) => {
        setLogin({ ...login, [name]: value })
    }

    const handleSubmit = () => {
        console.log(login);
    }

    return (
        <>
            <Container border={'1px solid #edf2f7'} my={['190px', '100px']} borderRadius={'2%'} p={'30px'} maxW={'400px'}>
                <VStack gap={'10px'}>
                    <Heading>Login</Heading>
                    <Input onChange={handleChange} name='email' value={login.email} type={'email'} placeholder='Email' />
                    <Input onChange={handleChange} name='password' value={login.password} type={'password'} placeholder='Password' />
                    <Button onClick={handleSubmit} w={'100%'}>Login</Button>
                    <Text pt={'20px'} color={'gray.400'}>New user? Signup</Text>
                </VStack>
            </Container>
        </>
    );
};