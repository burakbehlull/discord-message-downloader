const token = localStorage.getItem('token')

if (token) {
    chrome.runtime.sendMessage({
        action: 'SEND_TOKEN',
        token: token
    })
} else {
    console.error('Token not found or deleted.');
}
