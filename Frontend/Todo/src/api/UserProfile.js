
export const UserProfile = async () => {
    const token = localStorage.getItem('token');

    if(!token) {
        throw new Error("User not logged in");
    }

    const response = await fetch('/api/user/profile', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
        }
    });
    if (!response.ok) {
        throw new Error("Failed to fetch profile");
    }

    return response.json();
};