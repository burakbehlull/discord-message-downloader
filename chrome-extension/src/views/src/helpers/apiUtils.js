async function getUserData(TOKEN) {
    const url = `https://discord.com/api/v9/users/@me`;

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `${TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const userData = {
            id: data.id,
            avatar: getUserAvatar(data.id, data.avatar),
            username: data.username,
            globalName: data.global_name
        };

        return userData;
    } catch (err) {
        console.log('Error: ' + err.message);
    }
}

function getUserAvatar(userId, avatarId) {
    const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`
    return avatarId ? avatarUrl : "";
}


export {
	getUserData
}