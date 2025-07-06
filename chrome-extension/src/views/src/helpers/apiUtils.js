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

async function fetchAllMessages(channelId, token, maxMessages = Infinity) {
  const headers = {
    Authorization: token
  };

  const allMessages = [];
  let before = null;

  while (true) {
    const remaining = maxMessages - allMessages.length;
    if (remaining <= 0) break;

    const limit = remaining > 50 ? 50 : remaining;

    const url = `https://discord.com/api/v9/channels/${channelId}/messages?limit=${limit}${before ? `&before=${before}` : ''}`;
    const res = await fetch(url, { headers });

    if (!res.ok) {
      console.error("API error: ", await res.text());
      break;
    }

    const messages = await res.json();
    allMessages.push(...messages);

    if (messages.length < limit) break;

    before = messages[messages.length - 1].id;
  }

  return allMessages;
}


export {
	getUserData,
	fetchAllMessages
}