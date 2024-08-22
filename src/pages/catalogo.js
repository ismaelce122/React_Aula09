import { useState } from 'react'

function Catalogo({addToCart}) {
    const [items] = useState([
        {id: '1', nome: 'Xiaomi', price: 2000},
        {id: '2', nome: 'Iphone', price: 8000},
        {id: '3', nome: 'Samsung', price: 4000}
    ])

    return (
        <div>
            <h1>Catalogo</h1>
            <ul>
                {items.map(item => {
                    return (
                        <li key={item.id}>
                            {item.nome} - R${item.price}
                            <button onClick={() => addToCart(item)}>Adicionar ao Carrinho</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Catalogo