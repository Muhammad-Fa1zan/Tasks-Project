
export const UpdatePassword = async (password) => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/user/password-change' , {
        method : 'PUT',
        headers : {
        'Content-Type' : 'application/json',
        authorization : `Bearer ${token}`
        },
        body : JSON.stringify({password}),
    });
    if(!res.ok) return new Error('Failed to change password');
    return res.json();
};