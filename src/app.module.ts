import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { YamlModule } from './yaml/yaml.module'

@Module({
  imports: [YamlModule],
  providers: [AppService],
})
export class AppModule {}
