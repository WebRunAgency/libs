document.addEventListener('DOMContentLoaded', () => {
    const queryParameters = new URLSearchParams(window.location.search)
    const linkId = queryParameters.get("linkId")

    if (!linkId) return

    updateContactData(linkId)
})

function updateContactData(linkId) {
    fetch(`https://app.webrun.com/api/contact-api?linkId=${linkId}`, {
        method: 'put',
    })
}