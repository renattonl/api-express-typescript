import { ClienteInterface } from '../database/models/cliente';
import { sequelize } from '../database';
import { NotFoundException } from '../exceptions/NotFoundException';

class ClienteService {
  static async findAll() {
    const { Cliente } = sequelize.models;
    return Cliente.findAll({
      attributes: {
        include: [
          [sequelize.fn('TO_CHAR', sequelize.col('fecha_nacimiento'), 'yyyy-mm-dd'), 'fecha_nacimiento'],
          [
            sequelize.fn(
              'coalesce',
              sequelize.fn('date_part', 'year', sequelize.fn('age', sequelize.col('fecha_nacimiento'))),
              0,
            ),
            'edad',
          ],
        ],
      },
    });
  }

  static async create(data: ClienteInterface) {
    const { Cliente } = sequelize.models;
    return Cliente.create(data);
  }

  static async find(id: number) {
    const { Cliente } = sequelize.models;
    const row = await Cliente.findOne({ where: { id } });
    if (!row) {
      throw new NotFoundException(`El cliente con ID: ${id} no existe`);
    }
    return row;
  }

  static async update(id: number, data: object) {
    const row = await ClienteService.find(id);
    return row.update(data, { where: { id } });
  }

  static async destroy(id: number) {
    const row = await ClienteService.find(id);
    await row.destroy();
    return row;
  }

  static async avgFechaNacimiento() {
    const { Cliente } = sequelize.models;
    const row = await Cliente.findAll({
      attributes: [
        [
          sequelize.fn(
            'coalesce',
            sequelize.fn(
              'AVG',
              sequelize.fn('date_part', 'year', sequelize.fn('age', sequelize.col('fecha_nacimiento'))),
            ),
            0,
          ),
          'promedio',
        ],
      ],
    });
    return row[0];
  }
}

export default ClienteService;
