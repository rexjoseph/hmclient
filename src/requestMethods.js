import axios from 'axios'

const BASE_URL = "http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzQxNDQ2NjUzYmEzYmE0YTAwOGZhMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2ODYyODc5NywiZXhwIjoxNjY4NjI4Nzk3fQ.dhkz-kkilvT089-0ibUg4C0IokFX4D8ZPpTM288CidY";

export const publicRequest = axios.create({
  baseURL: BASE_URL
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});