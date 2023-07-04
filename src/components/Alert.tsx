import Link from "next/link";
import * as Icon from "react-icons/fi";

export default function Alert() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="bg-gray-950 p-8 sm:w-[500px] w-full shadow-lg flex flex-col gap-8 rounded-lg">
                <section className="flex flex-col gap-3">
                    <h5 className="text-sky-400">Erro 401</h5>
                    <h1 className="text-3xl text-white">Não Autorizado</h1>
                    <h5 className="text-white">Desculpe, mas parece que você não está autorizado a visualizar esta página</h5>
                    <Link href="/">
                        <button className="bg-white px-6 py-2 hover:brightness-75 transition-all flex gap-2 justify-center items-center rounded text-lg text-black">
                        <Icon.FiArrowLeft className="text-2xl" />
                            Voltar
                        </button>
                    </Link>
                </section>
            </main>
        </div>
    );
}