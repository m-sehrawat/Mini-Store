import { Button, Container, Heading, Input, Select, Text, useToast, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signupRequest } from "../../redux/auth/actions";
import { signupValidator } from "../../utils/extrafunctions";


export const Signup = () => {

    const init = { name: "", mobile: "", email: "", gender: "", password: "" };
    const [signup, setSignup] = useState(init);
    const toast = useToast();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        setSignup({ ...signup, [name]: value });
    }

    const handleSubmit = () => {
        if(signupValidator(signup, toast)){
            dispatch(signupRequest(signup, toast, navigate));
        }
    }

    return (
        <Container border={'1px solid #edf2f7'} mt={['60px', '20px']} borderRadius={'2%'} p={['10px', '20px', '30px']} maxW={'400px'}>
            <VStack gap={'10px'}>
                <Heading>Signup</Heading>
                <Input onChange={handleChange} name='name' value={signup.name} type={'text'} placeholder='Name' />
                <Input onChange={handleChange} name='mobile' value={signup.mobile} type={'tel'} placeholder='Mobile' />
                <Input onChange={handleChange} name='email' value={signup.email} type={'email'} placeholder='Email' />
                <Select onChange={handleChange} name='gender' value={signup.gender} color={'gray.500'} placeholder="Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Select>
                <Input onChange={handleChange} name='password' value={signup.password} type={'password'} placeholder='Password' />
                <Button onClick={handleSubmit} w={'100%'}>Create Account</Button>
                <Link to={'/login'}><Text pt={'20px'} color={'gray.400'}>Already a user? Login</Text></Link>
            </VStack>
        </Container>
    );
};