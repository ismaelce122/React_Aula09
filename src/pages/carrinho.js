function Carrinho({cart}) {
    return (
        <div>
            <h1>Carrinho:</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map(item => {
                        return (
                            <div key={item.id}>
                                <h3>{item.nome}</h3>
                                <p>Preço: R${item.price}</p>
                            </div>
                        )
                    })}
                </div>) : (<p>O Carrinho está Vázio.</p>)}
        </div>
    )
}

export default Carrinho