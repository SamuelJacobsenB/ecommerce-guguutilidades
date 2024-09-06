'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import FormArea from '@/components/others/FormArea/FormArea';
import Button from '@/components/others/Button/Button';
import BackToHome from '@/components/others/BackToHome/BackToHome';
import { GoogleLogin, GoogleCredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { User } from '@/types/UserType';
import api from '@/services/api';
import './page.css';

const SignUp = () => {
  const router = useRouter();

  const form: any = useRef();
  const googleArea: any = useRef();

  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  const handleSuccessGoogle = (res: GoogleCredentialResponse) => {
    if (res.credential) {
      const decodeRes: any = jwtDecode(res.credential);

      setPicture(decodeRes.picture);
      setName(decodeRes.name);
      setEmail(decodeRes.email);

      googleArea.current.style.display = 'none';
      form.current.style.display = 'block';
    }
  };

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();

    if (password == checkPassword) {
      const user: User = {
        picture,
        name,
        email,
        password,
      };

      const res: any = await api.post('/user/create', user);

      if (res.data.success_msg) {
        const response: any = await api.post('/login', { email, password });

        localStorage.setItem('token', response.data);

        router.push('/home');
      } else {
        console.log(res.data.error_msg);
      }
    } else {
      console.log('Password are not equals');
    }

    setPicture('');
    setName('');
    setEmail('');
    setPassword('');
    setCheckPassword('');
  };

  return (
    <div className="signup_area">
      <div className="signup_box">
        <BackToHome className="signup_back" />
        <h1>Crie uma conta com o Google:</h1>

        <div className="google_area" ref={googleArea}>
          <GoogleLogin
            text="signup_with"
            onSuccess={(res) => handleSuccessGoogle(res)}
            onError={() => console.log('Error')}
            width={400}
            context="signup"
          />
        </div>

        <form
          className="signup_form"
          ref={form}
          onSubmit={(evt) => handleSubmit(evt)}
        >
          <FormArea
            name="password"
            type="password"
            labelText="Sua senha: "
            inputPlaceholder="Insira uma senha"
            minLength={8}
            value={password}
            setValue={setPassword}
          />
          <FormArea
            name="check_password"
            type="password"
            labelText="Digite novamente: "
            inputPlaceholder="Reescreva sua senha"
            minLength={8}
            value={checkPassword}
            setValue={setCheckPassword}
          />
          <Button type="submit" colorType="yellow">
            Cadastrar-se
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
