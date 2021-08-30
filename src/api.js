export const API_END_POINT = 'https://kdt.roto.codes/documents'

export const request = async (url, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, options = {
      headers: {
        'Content-Type': 'application/json',
        'x-username': 'goumi1009'
      },
      ...options
    })
    if (res.ok) {
      const json = await res.json()
      return json
    }
    throw new Error('API 호출 오류')
  } catch (e) {
    alert(e.message)
  }
}