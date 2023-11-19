const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [

			],
			currentEdit: {

			}
		},
		actions: {
			getcontact: async () => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/apis/fake/contact/agenda/Pamela");
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						setStore({ ...store, contact: data });
						console.log(store.contact)
					}
				} catch (error) {
					console.error("Error fetching : ", error);
				}
			},
			handlerDelete: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "DELETE"
					});
					if (!response.ok) {
						throw new Error(response.statusText)
					}
					const data = await response.json()
					console.log("Contacto eliminado", data);
					const store = getStore()
					let contactFiltered = store.contact.filter((obj) => obj.id !== id)
					setStore({ ...store, contact: contactFiltered })
				}
				catch (error) {
					console.log("Error", error);
				}
			},
			editContact: async (body, id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT",
						body: JSON.stringify(body),
						headers: { "Content-Type": "Application/json" }
					});
					if (!response.ok) {
						throw new Error(response.statusText)
					}
					const data = await response.json()
					console.log(data);
					const actions = getActions()
					await actions.getContacts()
				}
				catch (error) {
					console.log("Error", error);
				}
			},
			setCurrentEdit: (obj) => {
				let store = getStore();
				setStore({ ...store, currentEdit: obj });
			},
			handlerAdd: (data) => {
				console.log("Datos a enviar:", data);
				const actions = getActions();
				const URL = "https://playground.4geeks.com/apis/fake/contact/";
				const opt = {
					method: "POST",
					headers: {
						"Content-type": "Application/json",
					},
					body: JSON.stringify(data),
				}; fetch(URL, opt)
					.then((response) => {
						console.log("Respuesta:", response);
						if (response.ok) {
							actions.getcontact();
						} else {
							alert("Error al crear contacto");
						}
					})
					.catch((error) => {
						console.log("Error:", error);
						alert("Error al crear contacto");
					});
			},
		}
	};
};

export default getState;
