import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';

import { cat_pacientes } from '@prisma/client';
import { PrismaService } from './services/prisma.service';

@Controller('/api')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('creaPaciente')
  async creaPaciente(
    @Body()
    postData: {
      id_paciente: string;
      nombre: string;
      email: string;
      telefono_movil: string;
      telefono_fijo: string;
      fecha_nacimiento: string;
      deportista: string;
      fumador: string;
      alcohol: string;
      grosor_piel: string;
      intensidad_grosor_piel: string;
      color_piel: string;
      intensidad_color_piel: string;
      enviar_notificaciones: string;
      enfermedades_piel: string;
      motivacion_tratamiento: string;
    },
  ): Promise<cat_pacientes> {
    return this.prismaService.cat_pacientes.create({ data: postData });
  }
}
