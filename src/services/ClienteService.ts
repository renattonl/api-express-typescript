import { ClienteInterface } from '../database/models/cliente';
import { sequelize } from '../database';
import { NotFoundException } from '../exceptions/NotFoundException';

class ClienteService {
  static async findAll() {
    const { Cliente } = sequelize.models;
    return Cliente.findAll();
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
}

export default ClienteService;
