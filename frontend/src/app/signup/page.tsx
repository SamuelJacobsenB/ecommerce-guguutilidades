'use client';

import { useState, useRef } from 'react';
import FormArea from '@/components/others/FormArea/FormArea';
import Button from '@/components/others/Button/Button';
import './page.css';

const SignUp = () => {
  const [password, setPassword] = useState<string>('');
  const [checkPassword, setCheckPassword] = useState<string>('');

  return (
    <div className="signup_area">
      <div className="signup_box">
        <h1>Crie uma conta com o Google:</h1>

        <form>
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
            inputPlaceholder="Insira novamente sua senha"
            value={checkPassword}
            setValue={setCheckPassword}
          />
          <Button type="submit" colorType="blue">
            Cadastrar-se
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
