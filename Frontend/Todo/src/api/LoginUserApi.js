
export const LoginUser = async (data) => {
    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
      if(!response.ok){
        throw new Error('First You Have to Make Account');
    };
    return response.json();
};