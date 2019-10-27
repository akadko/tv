const API_HOST = 'https://api.tvmaze.com'

const ENDPOINTS = {
    schedule: '/schedule',
}

export const getSchedule = (date, country = 'US') =>
    fetch(`${API_HOST}${ENDPOINTS.schedule}?country=${country}&date=${date}`)
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            throw new Error('Error occurred while fetching schedule.')
        })
