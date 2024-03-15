import { useForm } from 'react-hook-form'
import womanImage from '../../assets/foto-mulher-jovem.svg'

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from '../../schemas/RegisterSchemas';
import { Link, NavLink } from 'react-router-dom';
import { LuChevronLeft } from "react-icons/lu";

export function Register(): JSX.Element {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IRegister>({
        resolver: yupResolver(schema)
    })

    function makeRegister(data: IRegister) {
        console.log(data);
    }


    return (
        <>
            <main className="flex md:flex-row flex-col">
                <figure className="md:w-2/4 w-full md:h-screen h-5/6 bg-tertiary flex justify-center items-end">
                    <img className="w-4/6 h-4/6" src={womanImage} alt={"Imagem mulher ruiva jovem"} />
                </figure>

                <section className="md:w-2/4 w-full flex flex-col h-screen p-4 justify-center items-center">

                    <form onSubmit={handleSubmit(makeRegister)} className="flex flex-col w-full max-w-sm">

                        <NavLink to="/" className="self-start mb-4 flex items-center">
                            <LuChevronLeft className="mr-1" />
                            <span className="cursor-pointer text-base">Voltar</span>
                        </NavLink>

                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold">Crie sua conta </h1>
                            <h2 className="text-xl text-gray-400">Por favor insira suas informações aqui</h2>
                        </div>

                        <div className="mt-8 mb-2 flex flex-col gap-1">
                            <label htmlFor="name">Digite seu nome:</label>
                            <input
                                className="border rounded-md border-black p-2 h-14"
                                type="text"
                                id="name"
                                placeholder="Nome..."
                                {...register('name')}
                            />
                            {errors.name && (<span>{errors.name.message}</span>)}
                        </div>

                        <div className="my-2 flex flex-col gap-1">
                            <label htmlFor="email">Digite seu email:</label>
                            <input
                                className="border rounded-md border-black p-2 h-14"
                                type="email"
                                id="email"
                                placeholder="E-mail..."
                                {...register('email')}
                            />
                            {errors.email && (<span>{errors.email.message}</span>)}
                        </div>

                        <div className="my-2 flex flex-col gap-1">
                            <label htmlFor="password">Digite sua senha:</label>
                            <input
                                className="border rounded-md border-black p-2 h-14"
                                type="password"
                                id="password"
                                placeholder="Senha..."
                                {...register('password')}
                            />
                            {errors.password && (<span>{errors.password.message}</span>)}
                        </div>

                        <button className="bg-primary h-14 text-secondary rounded-xl my-4">
                            Cadastrar
                        </button>

                        <p className='text-gray-400 text-center flex justify-center gap-1'>
                            <span>Já tem uma conta?</span>
                            <Link className='text-primary' to={'/login'}>Faça login aqui</Link>
                        </p>
                    </form>
                </section>
            </main>
        </>
    )
}