
export const hydrateUsers = (data) =>  data.map((d => hydrateUser(d)))


export const hydrateUser = (data) => {
        
    return {
        name: data.name,
        email: data.email,
        id: data.id,
        address: data.address,
        phone: data.phone,
        website: data.website
        
        

    };
};