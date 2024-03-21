function Produc1(){
    return(
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-lime-50 dark:border-gray-700"> 
    
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-950 ">Nombre del producto</h5>
    
    <p class=" block mb-2 text-lg font-medium ">
        Precio: x
    </p>
    <form class="max-w-sm mx-auto ">

    <label for="number-input" class="block mb-2 text-lg font-medium ">Cantidad:</label>
    <input type="number" id="number-input"  min="1" placeholder="Cantidad" className="border border-black" required />
    
    </form>
    <p class="block mb-2 text-lg font-medium "></p>
    
    <button type="button" class="text-white bg-lime-400 hover:bg-lime-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-lime-600 dark:hover:bg-lime-600 focus:outline-none dark:focus:ring-blue-800">Añadir</button>
    
</div>
    )
}
export default Produc1;