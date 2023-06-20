import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  address: string;
}
