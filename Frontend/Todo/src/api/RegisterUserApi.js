
export const RegisterUserApi = async (data) => {
    const response = await fetch('/api/user/register' , {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if(!response.ok){
        throw new Error('Registration failed');
    };
    return response.json();
};