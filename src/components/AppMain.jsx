export default function AppMain() {

  // logic
  const products = [
    {
      id: 1,
      name: 'Product A',
      price: 19.99,
      description: 'This is a sample product.',
      in_stock: true
    },
    {
      id: 2,
      name: 'Product B',
      price: 9.99,
      description: 'This is another example product.',
      in_stock: false
    },
    {
      id: 3,
      name: 'Product C',
      price: 29.99,
      description: 'This product has a lot of features.',
      in_stock: true
    },
    {
      id: 4,
      name: 'Product D',
      price: 39.99,
      description: 'This is the most expensive product.',
      in_stock: false
    }
  ];


  const list = ["<li>item1</li>", "<li>item2</li>", "<li>sdfsd</li>"]

  const in_stock = products.filter((product) => product.in_stock)
  const out_of_stock = products.filter((product) => !product.in_stock)

  console.log(in_stock), out_of_stock;




  // markup
  return (

    <main>

      <section className="in_stock">
        <h2>In Stock</h2>

        <ul>

          {in_stock.map((product, index) => <li key={index}>{product.name}</li>)}

        </ul>
      </section>


      <section className="out_of_stock">
        <h2>Out of Stock</h2>
        {out_of_stock.map(product => <li key={product.id}>{product.name}</li>)}
      </section>




    </main>

  )

}