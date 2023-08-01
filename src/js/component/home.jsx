import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState(["Make the bed", "Wash my hands","Eat","Walk the dog"])

	const handleInput = (e) => {
		let texto = e.target.value
		if (e.keyCode == 13) {
			setTarea(texto)
			//Una primera aproximación para agregar a la lista es usando una variable auxiliar
			//let tempArr = lista.slice() //copia de arreglo por valor
			//tempArr.push(texto)
			//setLista(tempArr)

			//Una segunda aproximación es usando el operador spread ...
			setLista([...lista, texto])
		}
	}

	const deleteTask = (index) => { 
		let tempArr = lista.slice() //copiar el estado lista en una variable auxiliar
		tempArr = tempArr.filter((item, index2) => { return index2 != index })
		setLista(tempArr)
	}

	return (
		<>
			<div className="paper container text-center justify-content-center justify-items-center">
				
				<p className="titulotodos ">TODOS</p>
				
					<div className="nota ">
			<ul className="list-group">
			<input className="list-group-item text-center" type="text" placeholder="Escriba aquí una tarea"
					onKeyUp={
						(e) => { handleInput(e) }
					} />
					
			{
						lista && lista.length > 0 ?
							<>{
								lista.map((item, index) => {
									return <li className="text-center list-group-item" key={index}>
										{item}
										<button type="button" onClick={e => { deleteTask(index) }}>
											<p className="eliminar">X</p>
										</button>
									</li>
								})
							}</>
							: "la lista está vacía"
					}
					
			</ul>
			</div>
				<p className="agregado">items left  {lista.length}</p> 
			</div>
			
			
			
			
		</>
	);
};

export default Home;