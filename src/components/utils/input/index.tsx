import { UseFormRegister } from 'react-hook-form';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<any>;
  inputName: string;
}

export default function FormInput({
  register,
  inputName,
  ...rest
}: IInputProps) {
  return (
    <input
      {...rest}
      className="form_group_control"
      {...register(inputName)}
    />
  );
}
