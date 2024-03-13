import womanImage from '../assets/foto-mulher-jovem.svg'

export function Register(): JSX.Element {
    return (
        <>
            <main className="flex flex-row">
                <figure className="w-2/4 bg-tertiary flex justify-center items-center">
                    <img className="w-4/6 h-4/6" src={womanImage} alt={"Imagem mulher ruiva jovem"} />
                </figure>

                <section className="w-2/4 flex flex-col h-screen p-4 justify-center items-center">
                
                    <form className="flex flex-col w-full max-w-sm">

                        <div className="flex flex-col gap-1">
                            <h1 className="text-3xl font-bold">Crie sua conta </h1>
                            <h2 className="text-xl">Por favor insira suas informações aqui</h2>
                        </div>

                        <div className="my-2 flex flex-col gap-1">
                            <label htmlFor="name">Digite seu nome:</label>
                            <input className="border rounded-md border-black p-1" type="text" id="name" placeholder="Nome..." />
                        </div>

                        <div className="my-2 flex flex-col gap-1">
                            <label htmlFor="email">Digite seu email:</label>
                            <input className="border rounded-md border-black p-1" type="email" id="email" placeholder="E-mail..." />
                        </div>

                        <div className="my-2 flex flex-col gap-1">
                            <label htmlFor="password">Digite sua senha:</label>
                            <input className="border rounded-md border-black p-1" type="password" id="password" placeholder="Senha..." />
                        </div>

                        <button className="bg-primary h-14 text-secondary rounded-xl my-4">
                            Cadastrar
                        </button>
                    </form>
                </section>
            </main>
        </>
    )
}