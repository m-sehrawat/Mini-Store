import { Button, Container, Heading, Input, Text, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginRequest } from "../../redux/auth/actions";

export const Login = () => {

    const [login, setLogin] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const handleChange = ({ target: { name, value } }) => {
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = () => {
        dispatch(loginRequest(login, toast, navigate));
    }

    return (
        <>
            <Container border={'1px solid #edf2f7'} my={['190px', '120px']} borderRadius={'2%'} p={'30px'} maxW={'400px'}>
                <VStack gap={'10px'}>
                    <Heading>Login</Heading>
                    <Input onChange={handleChange} name='email' value={login.email} type={'email'} placeholder='Email' />
                    <Input onChange={handleChange} name='password' value={login.password} type={'password'} placeholder='Password' />
                    <Button onClick={handleSubmit} w={'100%'}>Login</Button>
                    <Link to={'/signup'}><Text pt={'20px'} color={'gray.400'}>New user? Signup</Text></Link>
                </VStack>
            </Container>
        </>
    );
};