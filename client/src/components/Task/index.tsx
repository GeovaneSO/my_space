

const Task = (): JSX.Element => {
    return (
        <>
            <div>
                <h3>Tarefas</h3>
                <div>
                    <button>
                        Todos
                    </button>
                    <button>
                        Concluídos
                    </button>
                    <button>
                        Criar
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <p>Status</p>
                        <p>Título</p>
                    </div>
                    <div>
                        <p>Descrição</p>
                        <p>Categoria</p>
                        <p>Editar</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <div>
                            <input type="checkbox" name="" id="" />
                        </div>
                        <div>
                            <p>Fazer exercícios segunda pela manhã</p>
                        </div>
                        <div>
                            <p>Ir correr</p>
                        </div>
                        <div>
                            <p>Saúde</p>
                        </div>

                        <div>
                            <button>
                                Editar
                            </button>
                        </div>
                    </li>

                </ul>
            </div>

        </>
    )
}

export { Task };