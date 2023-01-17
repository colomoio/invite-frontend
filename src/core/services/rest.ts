import { createAPI } from "./api";

const API_URL = "http://localhost:3000/api";

export const rest = createAPI(API_URL);
