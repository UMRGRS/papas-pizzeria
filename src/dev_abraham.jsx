function Produc1(){
    return(
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre del producto</h5>
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        precio
    </p>

    <form class="max-w-sm mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecioan tu carta</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="1">Producto 1</option>
    <option value="2">Producto 2</option>
    <option value="3">Producto 3</option>
    <option value="4">Producto 4</option>
  </select>
</form>

<br></br>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Añadir</button>
    
</div>
    )
}

function Produc2(){
    return(
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre del producto</h5>
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        precio unitario= x
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        cantidad=x
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        precio total= x
    </p>
<br></br>
    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Añadir</button>
    
</div>
    )
}
function Produc3(){
    return(
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre del producto</h5>
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        precio unitario= x
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        cantidad=x
    </p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        precio total= x
    </p>
<br></br>
    
    
</div>
    )
}
function Devabraham() {
    return(
        <Produc3/>

    )
}

export default Devabraham;
