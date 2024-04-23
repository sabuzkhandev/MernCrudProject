//read Api Service
import axios from 'axios'
export async function Read() {
  const result = await axios.get('/api/Read')
  //console.log(result)
  return result
}
