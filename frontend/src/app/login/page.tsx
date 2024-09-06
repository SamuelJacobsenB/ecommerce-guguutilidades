'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormArea from '@/components/others/FormArea/FormArea';
import Button from '@/components/others/Button/Button';
import api from '@/services/api';
import './page.css';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (evt: any) => {
    evt.preventDefault();

    const user: { email: string; password: string } = {
      email,
      password,
    };

    const res: any = await api.post('/login', user);

    if (res.data.error_msg) {
    } else {
      localStorage.setItem('token', res.data);

      router.push('/home');
    }
  };

  return (
    <div className="login_area">
      <div className="login_box">
        <h1>Faça o seu login:</h1>
        <form className="login_form" onSubmit={(evt) => handleSubmit(evt)}>
          <FormArea
            name="email"
            type="email"
            labelText="Seu email: "
            inputPlaceholder="Seu email"
            value={email}
            setValue={setEmail}
          />
          <FormArea
            name="password"
            type="password"
            labelText="Sua senha: "
            inputPlaceholder="Insira uma senha"
            minLength={8}
            value={password}
            setValue={setPassword}
          />
          <Button type="submit" colorType="yellow">
            Logar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
