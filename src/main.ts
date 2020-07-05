import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

// eslint-disable next-line
;(async () => {
  const app = await NestFactory.createApplicationContext(AppModule)
})()
