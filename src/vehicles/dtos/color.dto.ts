import {IsIn } from "class-validator";

export class ColorDTO{
   @IsIn(['YELLOW', 'WHITE', 'RED', 'DARK_BLUE'])
    color : string
}
