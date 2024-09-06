'use client';

import { useState, useRef } from 'react';
import FormArea from '@/components/others/FormArea/FormArea';
import Button from '@/components/others/Button/Button';
import BackToHome from '@/components/others/BackToHome/BackToHome';
import './page.css';

const SignUp = () => {
  const form: any = useRef();

  const [picture, setPicture] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  return (
    <div className="signup_area">
      <div className="signup_box">
        <BackToHome />
        <h1>Crie uma conta com o Google:</h1>

        <form className="signup_form" ref={form}>
          <FormArea
            name="password"
            type="password"
            labelText="Sua senha: "
            inputPlaceholder="Insira uma senha"
            value={password}
            setValue={setPassword}
          />
          <FormArea
            name="check_password"
            type="password"
            labelText="Digite novamente: "
            inputPlaceholder="Reescreva sua senha"
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
