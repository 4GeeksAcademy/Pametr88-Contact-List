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
						setStore({...store, contact: data });
						console.log (contact)
					}
				} catch (error) {
						console.error("Error fetching : ", error);
					}
				}

			}
		};
};

export default getState;
