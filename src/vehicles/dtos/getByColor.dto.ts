import {IsIn } from "class-validator";

export class ColorParamValidator{
   @IsIn(['YELLOW', 'WHITE', 'RED', 'DARK_BLUE'])
    color : string
}
