import {app} from "./app"
import { env } from './env'

const port = env.PORT || 3333;

app
  .listen({
    port: port,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
