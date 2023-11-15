const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [

			]
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
					setStore({...store,contact:contactFiltered})
				}
				catch (error) {
					console.log("Error", error);
				}
			},
			handlerEdit: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
						method: "PUT"
					});
					if (!response.ok) {
						throw new Error(response.statusText)
					}
					const data = await response.json()
					console.log("Contacto editado", data);
					const store = getStore()
					let contactFiltered = store.contact.filter((obj) => obj.id !== id)
					setStore({...store,contact:contactFiltered})
				}
				catch (error) {
					console.log("Error", error);
				}
			},
			handlerAdd: async (inputName, inputEmail, inputNumber, inputAddress,inputAgenda) => {
				console.log(inputName, inputEmail, inputNumber, inputAddress,inputAgenda);
				const actions= getActions();
				try {
					const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {"Content-type":"Application/json"},
						body: JSON.stringify(inputName, inputEmail, inputNumber, inputAddress,inputAgenda),
					});
					if (response.ok) {
						const data = await response.json();
						let store = getStore();
						actions.getcontact();
						setStore({ ...store, contact: data });
						console.log(data)
					}
					else {
						console.log(response.status,response.statusText);
					}
				} catch (error) {
					console.error("Error fetching : ", error);
				}
			}
		}		
	};
};

export default getState;
