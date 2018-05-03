import { Body, Controller, Get, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';

import { ParseIntPipe } from 'pipes/parse-int.pipe';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserValidationPipe } from 'pipes/user-validation.pipe';

/**
 *  user controller
 * @export
 * @class UserController
 */

@Controller('user')
export class UserController {
  constructor(private readonly catsService: UserService) {}
  @Post()
  async create(@Res() res, @Body(new UserValidationPipe()) user: User) {
    // TODO: Add some logic here
    // tslint:disable-next-line:no-console
    console.dir(user);
    await this.catsService.create(user);
    res.status(HttpStatus.CREATED).send();
  }

  /**
   *  return user/users
   * @param request
   */
  @Get()
  async findAll(@Res() res, @Req() request){
    // TODO: Add some logic here
    const arr = await this.catsService.findAll();
    res.status(HttpStatus.OK).json(arr || []);
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id) {
    // TODO: Add some logic here
    const user = await this.catsService.findOne(id);
    // tslint:disable-next-line:no-console
    console.dir(user);
    res.status(HttpStatus.OK).json(user);
  }
}
