document.addEventListener('DOMContentLoaded', () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const linkId = queryParameters.get("linkId")

    if (!linkId) return

    updateContactData(linkId)
})

function updateContactData(linkId) {
    fetch(`${proccess.env.BACKEND_URL || 'http://localhost:3000/api/contacts-api/'}?linkId=${linkId}`, {
        method: 'put',
    })
}